import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import { Suspense } from 'react';

import { useProducts, useHomePageProductsByTab } from '..';
import { getProducts, getProductsTab } from '@/services';
import { IProductCard } from '@/types';

jest.mock('@/services', () => ({
  getProducts: jest.fn(),
  getProductsTab: jest.fn(),
}));

const MOCK_PRODUCTS: IProductCard[] = [
  {
    img: 'https://picsum.photos/seed/1/354/244',
    imgAlt: 'img product',
    variant: 'compact',
    title: 'Lorem ipsum 1',
    brand: 'Al Karam',
    rating: 5,
    price: '$95.50',
    reviewLabel: '(4.1k) Customer Reviews',
    value: 'lorem1',
  },
];

const ProductsComponent = () => {
  const products = useProducts();
  return (
    <div>
      {products.map((p) => (
        <div key={p.title}>{p.title}</div>
      ))}
    </div>
  );
};

const ProductsByTabComponent = () => {
  const products = useHomePageProductsByTab();
  return (
    <div>
      {products.map((p) => (
        <div key={p.title}>{p.title}</div>
      ))}
    </div>
  );
};

describe('Custom hooks with Suspense and caching', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('useProducts returns and renders product data', async () => {
    let resolveProducts: (value: IProductCard[]) => void;

    const productsPromise = new Promise((res) => {
      resolveProducts = res;
    });

    (getProducts as jest.Mock).mockReturnValue(productsPromise);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsComponent />
        </Suspense>,
      );

      resolveProducts!(MOCK_PRODUCTS);
    });

    expect(await screen.findByText('Lorem ipsum 1')).toBeInTheDocument();
    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  test('useHomePageProductsByTab returns and renders product data', async () => {
    let resolveTabs: (value: IProductCard[]) => void;

    const tabsPromise = new Promise((res) => {
      resolveTabs = res;
    });

    (getProductsTab as jest.Mock).mockReturnValue(tabsPromise);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading Tabs...</div>}>
          <ProductsByTabComponent />
        </Suspense>,
      );

      resolveTabs!(MOCK_PRODUCTS);
    });

    expect(await screen.findByText('Lorem ipsum 1')).toBeInTheDocument();
    expect(getProductsTab).toHaveBeenCalledTimes(1);
  });
});
