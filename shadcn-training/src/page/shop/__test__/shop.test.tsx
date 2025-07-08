// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { ShopPage } from '..';

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

describe('Shop page', () => {
  test('Renders Shop page', () => {
    const { container } = render(
      <MemoryRouter>
        <ShopPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
