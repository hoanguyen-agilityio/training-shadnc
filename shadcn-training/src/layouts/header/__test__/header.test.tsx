import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Layouts
import { Header } from '..';

// Constants
import { ROUTES } from '@/constants';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => jest.fn()), // Return a mock function for navigate
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
        <Header />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should remove token and navigate to sign-in page on logout', async () => {
    // Set initial logged-in state
    localStorage.setItem('token', 'mock-token');

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    // Find and click the avatar to open the dropdown
    const avatarTrigger = screen.getByRole('button', { name: 'User' });
    await user.click(avatarTrigger);

    // Find and click the logout item
    const logoutItem = await screen.findByText('Logout');
    await user.click(logoutItem);

    // Verify token is removed
    expect(localStorage.getItem('token')).toBeNull();

    // Verify navigation to sign-in page
    expect(mockNavigate).toHaveBeenCalled();
    const navigateFn = mockNavigate.mock.results[0].value; // Get the navigate function returned by useNavigate
    expect(navigateFn).toHaveBeenCalledWith(ROUTES.SIGN_IN, { replace: true });
  });

  test('should navigate to sign-up page when sign-up button is clicked', async () => {
    render(
      <MemoryRouter>
        <Header />
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
