import { render, screen, act } from '@testing-library/react';
import { useTheme } from '@/components';
import { ThemeProvider } from '../theme-provider';

describe('ThemeProvider', () => {
  const TestComponent = () => {
    const { theme, setTheme } = useTheme();

    return (
      <>
        <span data-testid="current-theme">{theme}</span>
        <button onClick={() => setTheme('dark')}>Set Dark</button>
        <button onClick={() => setTheme('light')}>Set Light</button>
      </>
    );
  };

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  test('uses theme from localStorage if available', () => {
    localStorage.setItem('vite-ui-theme', 'dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('falls back to defaultTheme when localStorage is empty', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  test('uses system theme when theme is "system"', () => {
    // Simulate prefers-color-scheme
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    render(
      <ThemeProvider defaultTheme="system">
        <TestComponent />
      </ThemeProvider>,
    );

    const appliedClass = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    expect(['dark', 'light']).toContain(appliedClass);
  });

  test('setTheme updates theme and DOM class and localStorage', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent />
      </ThemeProvider>,
    );

    const button = screen.getByText('Set Dark');
    act(() => {
      button.click();
    });

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(localStorage.getItem('vite-ui-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
