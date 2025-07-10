// theme-context.test.tsx

import { renderHook } from '@testing-library/react';
import { useTheme, ThemeProviderContext } from '@/components';

describe('useTheme hook', () => {
  const mockSetTheme = jest.fn();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProviderContext.Provider value={{ theme: 'dark', setTheme: mockSetTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );

  test('returns the correct theme and setTheme when used within ThemeProvider', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe<'dark'>('dark');
    result.current.setTheme('light');
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
