import { getUsers } from '@/services/getUsers';
import { User } from '@/types';
import { use } from 'react';

let cachedUsersPromise: Promise<User[]> | null = null;

export const useInitialUsers = (): User[] => {
  if (!cachedUsersPromise) {
    cachedUsersPromise = getUsers() as Promise<User[]>;
  }

  return use(cachedUsersPromise) as User[];
};
