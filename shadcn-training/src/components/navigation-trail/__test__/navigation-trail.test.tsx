// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { NavigationTrail } from '..';

describe('NavigationTrail component', () => {
  test('Renders navigation trail component', () => {
    const { container } = render(
      <MemoryRouter>
        <NavigationTrail breadcrumbName="Shop" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
