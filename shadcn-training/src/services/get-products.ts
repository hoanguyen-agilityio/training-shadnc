import { IProductCard } from '@/types';
import { apiRequest } from './api';

export const getProductsTab = async () => {
  const VITE_PRODUCTS_TAB = process.env.VITE_PRODUCTS_TAB;
  if (!VITE_PRODUCTS_TAB) {
    throw new Error('Missing VITE_PRODUCTS_TAB in environment variables');
  }

  try {
    const data: IProductCard[] = await apiRequest(VITE_PRODUCTS_TAB, 'GET');

    return data.reverse();
  } catch (error) {
    console.error(`An error occurred while getting users: ${error}`);
    return [];
  }
};

export const getProducts = async () => {
  const VITE_PRODUCTS = process.env.VITE_PRODUCTS;

  if (!VITE_PRODUCTS) {
    throw new Error('Missing VITE_PRODUCTS in environment variables');
  }

  try {
    const data: IProductCard[] = await apiRequest(VITE_PRODUCTS, 'GET');

    return data.reverse();
  } catch (error) {
    console.error(`An error occurred while getting users: ${error}`);
    return [];
  }
};
