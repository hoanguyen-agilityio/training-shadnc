// Libs

// APIs
import { apiRequest } from './api';

// Modals
import { User } from '@/types';

export const getUsers = async () => {
  try {
    if (!import.meta.env.VITE_ACCOUNT_URL) {
      throw new Error('VITE_BASE_URL is not defined in the environment variables.');
    }

    const data: User[] = await apiRequest(import.meta.env.VITE_ACCOUNT_URL, 'GET');
    return data.reverse();
  } catch (error) {
    console.error(`An error occurred while getting users: ${error}`);
  }
};
