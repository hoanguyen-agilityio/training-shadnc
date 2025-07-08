// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { ContactPage } from '..';

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

describe('Contact page', () => {
  test('Renders Contact page', () => {
    const { container } = render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
