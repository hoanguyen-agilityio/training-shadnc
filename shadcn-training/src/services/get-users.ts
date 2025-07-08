// Libs
import dotenv from 'dotenv';

// APIs
import { apiRequest } from './api';

// Modals
import { User } from '@/types';

dotenv.config();

export const getUsers = async () => {
  const VITE_ACCOUNT_URL = process.env.VITE_ACCOUNT_URL;
  if (!VITE_ACCOUNT_URL) {
    throw new Error('Missing VITE_ACCOUNT_URL in environment variables');
  }

  try {
    const data: User[] = await apiRequest(VITE_ACCOUNT_URL, 'GET');
    return data.reverse();
  } catch (error) {
    console.error(`An error occurred while getting users: ${error}`);
  }
};
