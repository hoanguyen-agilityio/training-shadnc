// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Layouts
import { Footer } from '.';

describe('Footer component', () => {
  test('Renders footer component', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
