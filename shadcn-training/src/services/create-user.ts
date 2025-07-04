// APIs
import { apiRequest } from './api';
import { User } from '@/types';

export const createUser = async (userData: User) => {
  try {
    const newUser = (await apiRequest(import.meta.env.VITE_ACCOUNT_URL, 'POST', {
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
    })) as { user: User };

    console.log('User created successfully!');
    return newUser;
  } catch (error) {
    console.error(`Create user error: ${(error as Error).message}`);
    return null;
  }
};
