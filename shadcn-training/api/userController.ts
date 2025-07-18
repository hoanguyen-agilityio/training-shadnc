// api/userController.ts
import { Webhook } from 'svix';
import { Request, Response } from 'express';

interface WebhookEventData {
  id?: string;
  first_name?: string;
  last_name?: string;
  email_addresses?: { email_address: string }[];
  [key: string]: unknown;
}

/**
 * Handles incoming webhook events from Clerk (e.g., user.created, user.updated, etc.)
 * Verifies the event signature, parses the data, and performs appropriate actions on mock API.
 */
export const handleWebhook = async (
  rawBody: Buffer,
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

  let evt: { type: string; data: WebhookEventData; timestamp?: string };

  // Verify signature
  try {
    evt = wh.verify(rawBody, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as { type: string; data: WebhookEventData; timestamp?: string };
  } catch (err) {
    return res.status(400).json({ success: false, message: (err as Error).message });
  }

  const eventType = evt.type;

  // Utility to get user from mock API by Clerk ID
  const getUserById = async (id: string) => {
    const res = await fetch(`${mockApiUrl}?userId=${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.length ? data[0] : null;
  };

  const user = evt.data.id ? await getUserById(evt.data.id) : null;

  try {
    switch (eventType) {
      // Handle new user creation (from Clerk) and sync to mock API.
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

      // Update last sign-in time from a session.created event.
      case 'session.created': {
        if (evt.timestamp && user) {
          await fetch(`${mockApiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ last_sign_in_at: evt.timestamp }),
          });
        }
        break;
      }

      // Delete user from mock API when deleted from Clerk.
      case 'user.deleted': {
        if (!evt.data.id) {
          throw new Error('User ID is missing in event data');
        }

        const existingUser = await getUserById(evt.data.id);
        if (existingUser) {
          const deleteRes = await fetch(`${mockApiUrl}/${existingUser.id}`, {
            method: 'DELETE',
          });

          if (!deleteRes.ok) {
            const errText = await deleteRes.text();
            console.error(`Failed to delete user in mock API:`, errText);
            throw new Error('Failed to delete user in mock API');
          }

          console.log(`Deleted user ${evt.data.id} from mock API.`);
        }
        break;
      }

      // Update user profile in mock API when updated in Clerk.
      case 'user.updated': {
        if (!evt.data.id) {
          throw new Error('User ID is missing in event data');
        }

        const existingUser = await getUserById(evt.data.id);
        if (existingUser) {
          const updateResponse = await fetch(`${mockApiUrl}/${existingUser.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: evt.data.first_name,
              lastName: evt.data.last_name,
              email: evt.data.email_addresses?.[0]?.email_address || '',
            }),
          });

          if (!updateResponse.ok) {
            const errorText = await updateResponse.text();
            console.error('Failed to update user in mock API:', errorText);
            throw new Error('Failed to update user in mock API');
          }

          console.log(`Updated user ${evt.data.id} in mock API.`);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error(`Error handling ${eventType}:`, err);
    res.status(500).json({ success: false, message: `Error handling ${eventType}` });
  }
};

/**
 * API handler for deleting a user via REST endpoint (called manually from app).
 */
export const deleteUserHandler = async (req: Request, res: Response, mockApiUrl: string) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'User ID is required' });
  }

  try {
    const response = await fetch(`${mockApiUrl}/${userId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ success: false, message: text });
    }

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * API handler for editing a user via REST endpoint (called manually from app).
 */
export const editUserHandler = async (req: Request, res: Response, mockApiUrl: string) => {
  const userId = req.params.id;
  const { firstName, lastName, email } = req.body;

  if (!userId || !firstName || !lastName || !email) {
    return res.status(400).json({ success: false, message: 'Missing required user fields' });
  }

  try {
    const response = await fetch(`${mockApiUrl}/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ success: false, message: text });
    }

    res.status(200).json({ success: true, message: 'User updated successfully' });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
