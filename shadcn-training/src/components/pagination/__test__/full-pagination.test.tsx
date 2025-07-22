// Libs
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { FullPagination } from '../full-pagination';

describe('Full Pagination component', () => {
  const setup = (currentPage = 1, totalPages = 5) => {
    const handlePageChange = jest.fn();
    render(
      <FullPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />,
    );
    return { handlePageChange };
  };
  test('Renders FullPagination component', () => {
    const handlePageChange = jest.fn();
    const { container } = render(
      <FullPagination totalPages={5} currentPage={1} onPageChange={handlePageChange} />,
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

  test('calls onPageChange when clicking page 1', () => {
    const { handlePageChange } = setup(2, 5);
    const page1 = screen.getByText('1');
    fireEvent.click(page1);

    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  test('calls onPageChange when clicking page 2', () => {
    const { handlePageChange } = setup(1, 5);
    const page2 = screen.getByText('2');
    fireEvent.click(page2);
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when clicking the current page in the middle range', () => {
    const { handlePageChange } = setup(3, 5);
    const currentPage = screen.getByText('3');
    fireEvent.click(currentPage);
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  test('calls onPageChange when clicking the last page', () => {
    const { handlePageChange } = setup(3, 5);
    const lastPage = screen.getByText('5');
    fireEvent.click(lastPage);
    expect(handlePageChange).toHaveBeenCalledWith(5);
  });

  test('renders and handles click for all pages when totalPages <= 3', () => {
    const { handlePageChange } = setup(1, 3); // triggers the "totalPages <= 3" block

    const page2 = screen.getByText('2');
    const page3 = screen.getByText('3');

    // Ensure they are rendered
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();

    // Click page 2
    fireEvent.click(page2);
    expect(handlePageChange).toHaveBeenCalledWith(2);

    // Click page 3
    fireEvent.click(page3);
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });
});
