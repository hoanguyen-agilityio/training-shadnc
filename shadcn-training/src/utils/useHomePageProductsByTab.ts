// Libs
import { use } from 'react';

// Types
import { IProductCard } from '@/types';

// Apis
import { getProductsTab } from '@/services';

let cachedProductsPromise: Promise<IProductCard[]> | null = null;

export const useHomePageProductsByTab = (): IProductCard[] => {
  if (!cachedProductsPromise) {
    cachedProductsPromise = getProductsTab() as Promise<IProductCard[]>;
  }

  return use(cachedProductsPromise) as IProductCard[];
};
