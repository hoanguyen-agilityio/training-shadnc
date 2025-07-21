import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CompactPagination } from '../compact-pagination';

describe('CompactPagination component', () => {
  const setup = (currentPage: number, totalPages: number = 5) => {
    const onPageChange = jest.fn();
    render(
      <CompactPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    );
    return { onPageChange };
  };

  test('renders CompactPagination correctly', () => {
    const { container } = render(
      <CompactPagination totalPages={5} currentPage={1} onPageChange={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('calls onPageChange when clicking Next', async () => {
    const user = userEvent.setup();
    const { onPageChange } = setup(1);

    const nextButton = screen.getByLabelText('Go to next page');
    await user.click(nextButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when clicking First (Previous)', async () => {
    const user = userEvent.setup();
    const { onPageChange } = setup(3);

    const prevButton = screen.getByLabelText('Go to previous page');
    await user.click(prevButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('disables Previous button on first page', () => {
    setup(1);
    const prevButton = screen.getByLabelText('Go to previous page');
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
  });

  test('disables Next button on last page', () => {
    setup(5);
    const nextButton = screen.getByLabelText('Go to next page');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
  });
});
