// Libs
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { NotFoundPage } from '..';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
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

describe('Not Found page', () => {
  test('Renders Not Found page', () => {
    const { container } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('navigates to home when "BACK TO HOME" button is clicked', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: /back to home/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
