// Libs
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Pagination } from '..';

describe('Pagination component', () => {
  const setup = (currentPage = 1, totalPages = 5) => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />,
    );
    return { handlePageChange };
  };
  test('Renders pagination component', () => {
    const handlePageChange = jest.fn();
    const { container } = render(
      <Pagination totalPages={5} currentPage={1} onPageChange={handlePageChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('calls onPageChange when clicking next', () => {
    const { handlePageChange } = setup(2, 5);

    const nextButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextButton);

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  test('calls onPageChange when clicking previous', () => {
    const { handlePageChange } = setup(3, 5);

    const prevButton = screen.getByLabelText('Go to previous page');
    fireEvent.click(prevButton);

    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  test('disables previous button on first page', () => {
    setup(1, 5);

    const prevButton = screen.getByLabelText('Go to previous page');
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
  });

  test('disables next button on last page', () => {
    setup(5, 5);

    const nextButton = screen.getByLabelText('Go to next page');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
  });

  test('calls onPageChange when clicking a specific page number', () => {
    const { handlePageChange } = setup(1, 5);

    const pageButton = screen.getByText('3');
    fireEvent.click(pageButton);

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });
});
