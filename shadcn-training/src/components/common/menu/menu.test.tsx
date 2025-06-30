import '@testing-library/jest-dom';
import { Menu } from '.';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Menu component', () => {
  test('renders menu component', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
