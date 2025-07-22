// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import dotenv from 'dotenv';

// Components
import { HomePage } from '..';

dotenv.config();

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

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

describe('Home page', () => {
  test('Renders Home page', () => {
    const { container } = render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <HomePage />
        </ClerkProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
