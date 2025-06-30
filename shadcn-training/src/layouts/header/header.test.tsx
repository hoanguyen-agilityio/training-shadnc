// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Layouts
import { Header } from '.';

describe('Header component', () => {
  test('Renders header component', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
