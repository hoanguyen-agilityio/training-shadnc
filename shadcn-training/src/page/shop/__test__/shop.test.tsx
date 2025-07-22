import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import dotenv from 'dotenv';

// Components
import { ShopPage } from '..';

dotenv.config();

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

// Mock products
jest.mock('@/hooks', () => ({
  useProducts: () =>
    Array.from({ length: 30 }, (_, i) => ({
      img: '',
      imgAlt: '',
      variant: 'expanded',
      title: `Product ${i + 1}`,
      brand: 'Brand A',
      rating: 4,
      price: '$16.00',
      reviewLabel: '(52 Feedback)',
    })),
}));

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

describe('Shop page pagination logic', () => {
  test('Renders Shop page', () => {
    const { container } = render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <ShopPage />
        </ClerkProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders 12 products on first page and updates on page change', () => {
    render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <ShopPage />
        </ClerkProvider>
      </MemoryRouter>,
    );

    // Page 1: Products 1–12
    let productCards = screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(12);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 12')).toBeInTheDocument();

    // Move to page 2
    fireEvent.click(screen.getByText('2'));

    productCards = screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(12);
    expect(screen.getByText('Product 13')).toBeInTheDocument();
    expect(screen.getByText('Product 24')).toBeInTheDocument();

    // Move to page 3
    fireEvent.click(screen.getByText('3'));

    productCards = screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(6);
    expect(screen.getByText('Product 25')).toBeInTheDocument();
    expect(screen.getByText('Product 30')).toBeInTheDocument();
  });

  test('displays correct "Showing x–y of z items" text', () => {
    render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <ShopPage />
        </ClerkProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText('Showing 1–12 of 30 items')).toBeInTheDocument();

    fireEvent.click(screen.getByText('3'));
    expect(screen.getByText('Showing 25–30 of 30 items')).toBeInTheDocument();
  });
});
