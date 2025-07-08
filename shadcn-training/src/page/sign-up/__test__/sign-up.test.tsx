// Libs
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mocks
const mockNavigate = jest.fn();
const mockCreateUser = jest.fn();

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

jest.mock('@/services', () => ({
  createUser: (...args: User[]) => mockCreateUser(...args),
}));

// Components
import { SignUpPage } from '..';
import { User } from '@/types';

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

  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('SignUpPage', () => {
  test('renders SignUpPage correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('shows error when using an existing email', async () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('Robert'), {
      target: { value: 'Test' },
    });
    fireEvent.change(screen.getByPlaceholderText('Fox'), {
      target: { value: 'User' },
    });
    fireEvent.change(screen.getByPlaceholderText('robertfox@example.com'), {
      target: { value: 'admin@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('**************'), {
      target: { value: '@Admin123456' },
    });

    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    await waitFor(() => {
      expect(screen.getByText(/email already exists/i)).toBeInTheDocument();
    });
  });

  test('submits form and navigates on success', async () => {
    mockCreateUser.mockResolvedValueOnce({});
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('Robert'), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByPlaceholderText('Fox'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('robertfox@example.com'), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('**************'), {
      target: { value: 'securePass123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        email: 'jane@example.com',
        password: 'securePass123',
        firstName: 'Jane',
        lastName: 'Doe',
      });
      expect(setItemSpy).toHaveBeenCalledWith('token', 'jane@example.com');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
