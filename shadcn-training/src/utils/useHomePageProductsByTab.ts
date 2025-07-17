// Libs
import { use } from 'react';

// Types
import { IProductCard } from '@/types';

// Apis
import { getProducts, getProductsTab } from '@/services';

let cachedProductsPromise: Promise<IProductCard[]> | null = null;

export const useHomePageProductsByTab = (): IProductCard[] => {
  if (!cachedProductsPromise) {
    cachedProductsPromise = getProductsTab() as Promise<IProductCard[]>;
  }

  return use(cachedProductsPromise) as IProductCard[];
};

let cachedProductsCardPromise: Promise<IProductCard[]> | null = null;

export const useProducts = (): IProductCard[] => {
  if (!cachedProductsCardPromise) {
    cachedProductsCardPromise = getProducts() as Promise<IProductCard[]>;
  }

  return use(cachedProductsCardPromise) as IProductCard[];
};
