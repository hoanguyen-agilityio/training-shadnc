// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import dotenv from 'dotenv';

// Components
import { AboutPage } from '..';

dotenv.config();

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

jest.mock('@/components/ui/carousel', () => {
  const actual = jest.requireActual('@/components/ui/carousel');
  return {
    ...actual,
    Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    CarouselPrevious: () => <button>Prev</button>,
    CarouselNext: () => <button>Next</button>,
  };
});

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

describe('About page', () => {
  test('Renders About page', () => {
    const { container } = render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <AboutPage />
        </ClerkProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
