import { IProductCard } from '@/types';
import { apiRequest } from './api';

export const getProductsTab = async () => {
  const VITE_PRODUCTS_TAB = process.env.VITE_PRODUCTS_TAB;
  if (!VITE_PRODUCTS_TAB) {
    throw new Error('Missing VITE_PRODUCTS_TAB in environment variables');
  }

  try {
    console.log({ VITE_PRODUCTS_TAB });

    const data: IProductCard[] = await apiRequest(VITE_PRODUCTS_TAB, 'GET');
    console.log('====data=====', data.reverse());

    return data.reverse();
  } catch (error) {
    console.error(`An error occurred while getting users: ${error}`);
    return [];
  }
};
