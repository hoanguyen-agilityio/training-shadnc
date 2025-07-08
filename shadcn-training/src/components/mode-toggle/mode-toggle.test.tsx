// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { ModeToggle } from '.';

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

describe('ModeToggle component', () => {
  test('Renders modeToggle component', () => {
    const { container } = render(<ModeToggle />);
    expect(container).toMatchSnapshot();
  });
});
