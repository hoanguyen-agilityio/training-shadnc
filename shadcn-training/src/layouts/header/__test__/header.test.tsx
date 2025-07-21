import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv';

// Layouts
import { Header } from '..';

// Constants
import { ROUTES } from '@/constants';
import { ClerkProvider } from '@clerk/clerk-react';

dotenv.config();

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => jest.fn()), // Return a mock function for navigate
}));

let isSignedIn = false;

jest.mock('@clerk/clerk-react', () => ({
  ...jest.requireActual('@clerk/clerk-react'),
  SignedIn: ({ children }: { children: React.ReactNode }) => (isSignedIn ? <>{children}</> : <></>),
  SignedOut: ({ children }: { children: React.ReactNode }) =>
    !isSignedIn ? <>{children}</> : <></>,
  ClerkProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  UserButton: () => (
    <button
      aria-label="User"
      onClick={() => {
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = () => {
          localStorage.removeItem('token');

          // trigger mocked navigate function
          const navigate = (useNavigate as jest.Mock).mock.results[0].value;
          navigate('/sign-in', { replace: true });
        };
        document.body.appendChild(logoutBtn);
      }}
    >
      User
    </button>
  ),
}));

// Mock constants
jest.mock('@/constants', () => ({
  ROUTES: {
    HOME: '/',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
  },
  MENU_ITEMS_HEADER: [
    { label: 'Home', href: '/', disabled: false },
    { label: 'About', href: '/about', disabled: false },
  ],
}));

describe('Header component', () => {
  const user = userEvent.setup();
  const mockNavigate = useNavigate as jest.Mock;

  beforeAll(() => {
    // Mock window.matchMedia
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

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    mockNavigate.mockReturnValue(jest.fn()); // Reset navigate mock for each test
  });

  test('Renders header component', () => {
    const { container } = render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <Header />
        </ClerkProvider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should remove token and navigate to sign-in page on logout', async () => {
    isSignedIn = true;

    render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <Header />
        </ClerkProvider>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    const avatarTrigger = screen.getByRole('button', { name: 'User' });
    await user.click(avatarTrigger);

    const logoutItem = await screen.findByText('Logout');
    await user.click(logoutItem);

    expect(localStorage.getItem('token')).toBeNull();

    const navigateFn = (useNavigate as jest.Mock).mock.results[0].value;
    expect(navigateFn).toHaveBeenCalledWith('/sign-in', { replace: true });
  });

  test('should navigate to sign-up page when sign-up button is clicked', async () => {
    isSignedIn = false;

    render(
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <Header />
        </ClerkProvider>
      </MemoryRouter>,
    );

    // Find and click the sign-up button
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    await user.click(signUpButton);

    // Verify navigation to sign-up page
    expect(mockNavigate).toHaveBeenCalled();
    const navigateFn = mockNavigate.mock.results[0].value; // Get the navigate function returned by useNavigate
    expect(navigateFn).toHaveBeenCalledWith(ROUTES.SIGN_UP, { replace: true });
  });
});
