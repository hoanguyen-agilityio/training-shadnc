// Libs
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

// Components
import { useTheme } from '@/components';
import { ModeToggle } from '..';

// Mocks
jest.mock('@/components', () => ({
  useTheme: jest.fn(),
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

describe('ModeToggle component', () => {
  test('renders ModeToggle button', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
    });

    const { container } = render(<ModeToggle />);
    expect(container).toMatchSnapshot();
  });

  test('calls setTheme("dark") when theme is light and button is clicked', () => {
    const setTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme,
    });

    const { getByRole } = render(<ModeToggle />);
    const button = getByRole('button', { name: /light mode switch/i });

    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  test('calls setTheme("light") when theme is dark and button is clicked', () => {
    const setTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme,
    });

    const { getByRole } = render(<ModeToggle />);
    const button = getByRole('button', { name: /light mode switch/i });

    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('light');
  });
});
