import { Request, Response } from 'express';
import { handleWebhook } from '../userController';

const SIGNING_SECRET = process.env.VITE_SIGNING_SECRET!;
const mockApiUrl = process.env.VITE_ACCOUNT_URL!;

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  handleWebhook(req, res, mockApiUrl!, SIGNING_SECRET);
}
