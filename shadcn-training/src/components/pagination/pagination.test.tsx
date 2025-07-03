// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Pagination } from '.';

describe('Pagination component', () => {
  test('Renders pagination component', () => {
    const { container } = render(<Pagination />);
    expect(container).toMatchSnapshot();
  });
});
