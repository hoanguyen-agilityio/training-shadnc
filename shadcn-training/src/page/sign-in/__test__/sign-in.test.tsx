// Libs
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mocks
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

jest.mock('@/utils', () => ({
  ...jest.requireActual('@/utils'),
  useInitialUsers: () => [
    {
      email: 'admin@gmail.com',
      password: '@Admin123456',
      firstName: 'Test',
      lastName: 'User',
    },
  ],
}));

// Components
import { LoginPage } from '..';

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
  test('renders LoginPage correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('logs in with valid credentials', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('robertfox@example.com'), {
      target: { value: 'admin@gmail.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('**************'), {
      target: { value: '@Admin123456' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith('token', 'admin@gmail.com');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
