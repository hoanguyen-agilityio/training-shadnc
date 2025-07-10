// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Constants
import { MENU_ITEMS_HEADER } from '@/constants';

// Components
import { Menu } from '..';

describe('Menu component', () => {
  test('Renders menu component', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu menuItems={MENU_ITEMS_HEADER} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
