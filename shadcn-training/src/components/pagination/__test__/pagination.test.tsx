// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Pagination } from '..';

describe('Pagination component', () => {
  test('Renders pagination component', () => {
    const handlePageChange = jest.fn();
    const { container } = render(
      <Pagination totalPages={5} currentPage={1} onPageChange={handlePageChange} />,
    );
    expect(container).toMatchSnapshot();
  });
});
