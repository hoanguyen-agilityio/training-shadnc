// src/api/userController.ts
import { Webhook } from 'svix';
import { Request, Response } from 'express';

export const handleWebhook = async (
  req: Request,
  res: Response,
  mockApiUrl: string,
  signingSecret: string,
) => {
  const wh = new Webhook(signingSecret);
  const headers = req.headers as Record<string, string | undefined>;

  const svix_id = headers['svix-id'];
  const svix_timestamp = headers['svix-timestamp'];
  const svix_signature = headers['svix-signature'];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ success: false, message: 'Missing svix headers' });
  }

  interface WebhookEventData {
    id?: string;
    first_name?: string;
    last_name?: string;
    email_addresses?: { email_address: string }[];
    [key: string]: unknown;
  }

  let evt: { type: string; data: WebhookEventData; timestamp?: string };

  try {
    evt = wh.verify(req.body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as { type: string; data: WebhookEventData; timestamp?: string };
  } catch (err) {
    return res.status(400).json({ success: false, message: (err as Error).message });
  }

  const eventType = evt.type;

  const getUserById = async (id: string) => {
    const res = await fetch(`${mockApiUrl}?userId=${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.length ? data[0] : null;
  };

  const user = evt.data.id ? await getUserById(evt.data.id) : null;

  try {
    switch (eventType) {
      case 'user.created': {
        if (!evt.data.id) {
          throw new Error('User ID is missing in event data');
        }
        const existingUser = await getUserById(evt.data.id);
        if (!existingUser) {
          await fetch(mockApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: evt.data.id,
              firstName: evt.data.first_name,
              lastName: evt.data.last_name,
              email: evt.data.email_addresses?.[0]?.email_address || '',
            }),
          });
        }
        break;
      }

      case 'session.created':
        if (evt.timestamp && user) {
          await fetch(`${mockApiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ last_sign_in_at: evt.timestamp }),
          });
        }
        break;

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error(`Error handling ${eventType}:`, err);
    res.status(500).json({ success: false, message: `Error handling ${eventType}` });
  }
};
