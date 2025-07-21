// Types
import { IProductCard } from '@/types';
import { apiRequest } from '../api';
import { getProducts, getProductsTab } from '../get-products';

jest.mock('../api', () => ({
  apiRequest: jest.fn(),
}));

const mockData: IProductCard[] = [
  {
    img: 'https://picsum.photos/seed/1/350/446',
    imgAlt: 'img product',
    variant: 'expanded',
    title: 'Chinese cabbage',
    brand: 'Al Karam',
    rating: 5,
    price: '$95.50',
    reviewLabel: '(524 Feedback)',
  },
  {
    img: 'https://picsum.photos/seed/2/350/446',
    imgAlt: 'img product',
    variant: 'expanded',
    title: 'Organic carrots',
    brand: 'Fresh Farm',
    rating: 4,
    price: '$25.00',
    reviewLabel: '(321 Feedback)',
  },
];

describe('getProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns reversed product list on success', async () => {
    process.env.VITE_PRODUCTS = 'https://api.test/products';
    (apiRequest as jest.Mock).mockResolvedValueOnce([...mockData]);

    const result = await getProducts();
    expect(apiRequest).toHaveBeenCalledWith('https://api.test/products', 'GET');
    expect(result).toEqual([...mockData].reverse());
  });

  test('returns empty array and logs error when apiRequest fails', async () => {
    process.env.VITE_PRODUCTS = 'https://api.test/products';
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (apiRequest as jest.Mock).mockRejectedValueOnce(new Error('API failed'));

    const result = await getProducts();
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('An error occurred while getting users'),
    );
    expect(result).toEqual([]);

    consoleSpy.mockRestore();
  });

  test('throws error when VITE_PRODUCTS is missing', async () => {
    delete process.env.VITE_PRODUCTS;
    await expect(getProducts()).rejects.toThrow('Missing VITE_PRODUCTS in environment variables');
  });
});

describe('getProductsTab', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns reversed product list on success', async () => {
    process.env.VITE_PRODUCTS = 'https://api.test/products';
    (apiRequest as jest.Mock).mockResolvedValueOnce([...mockData]);

    const result = await getProducts();
    expect(apiRequest).toHaveBeenCalledWith('https://api.test/products', 'GET');
    expect(result).toEqual([...mockData].reverse());
  });

  test('returns empty array and logs error when apiRequest fails', async () => {
    process.env.VITE_PRODUCTS_TAB = 'https://api.test/products-tab';
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (apiRequest as jest.Mock).mockRejectedValueOnce(new Error('API failed'));

    const result = await getProductsTab();
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('An error occurred while getting users'),
    );
    expect(result).toEqual([]);

    consoleSpy.mockRestore();
  });

  test('throws error when VITE_PRODUCTS_TAB is missing', async () => {
    delete process.env.VITE_PRODUCTS_TAB;
    await expect(getProductsTab()).rejects.toThrow(
      'Missing VITE_PRODUCTS_TAB in environment variables',
    );
  });
});
