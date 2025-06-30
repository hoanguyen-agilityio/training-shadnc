// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Menu } from '.';

describe('Menu component', () => {
  test('Renders menu component', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
