// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Breadcrumb } from '..';

describe('Breadcrumb component', () => {
  test('Renders breadcrumb component', () => {
    const { container } = render(
      <MemoryRouter>
        <Breadcrumb breadcrumbName="Shop" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
