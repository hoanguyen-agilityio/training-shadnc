import { VercelRequest, VercelResponse } from '@vercel/node';
import getRawBody from 'raw-body';
import { handleWebhook } from '../userController.js';

const SIGNING_SECRET = process.env.VITE_SIGNING_SECRET!;
const mockApiUrl = process.env.VITE_ACCOUNT_URL!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const rawBody = await getRawBody(req);
    await handleWebhook(rawBody, req, res, mockApiUrl, SIGNING_SECRET);
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(400).json({ success: false, message: (err as Error).message });
  }
}
