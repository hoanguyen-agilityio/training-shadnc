// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import dotenv from 'dotenv';

// Components
import { LoginPage } from '..';

dotenv.config();

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

// Mocks
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

beforeAll(() => {
  // MatchMedia mock
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

  // ResizeObserver mock
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('LoginPage', () => {
  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders LoginPage correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <LoginPage />
        </ClerkProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
