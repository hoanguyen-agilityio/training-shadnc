import {
  Pagination as PaginationShadcn,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';

interface IPagination {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: IPagination) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPages = () => {
    const pages: React.ReactNode[] = [];

    // Always render the first page
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink isActive={currentPage === 1} onClick={() => handlePageClick(1)}>
          1
        </PaginationLink>
      </PaginationItem>,
    );

    // Determine if ellipsis and last page are needed
    if (totalPages <= 3) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={currentPage === i} onClick={() => handlePageClick(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      // Show second and third page or current range
      if (currentPage <= 2) {
        pages.push(
          <PaginationItem key={2}>
            <PaginationLink isActive={currentPage === 2} onClick={() => handlePageClick(2)}>
              2
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={3}>
            <PaginationLink isActive={currentPage === 3} onClick={() => handlePageClick(3)}>
              3
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      } else if (currentPage >= totalPages - 1) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={totalPages - 2}>
            <PaginationLink
              isActive={currentPage === totalPages - 2}
              onClick={() => handlePageClick(totalPages - 2)}
            >
              {totalPages - 2}
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={totalPages - 1}>
            <PaginationLink
              isActive={currentPage === totalPages - 1}
              onClick={() => handlePageClick(totalPages - 1)}
            >
              {totalPages - 1}
            </PaginationLink>
          </PaginationItem>,
        );
      } else {
        // Middle page range
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={currentPage}>
            <PaginationLink isActive onClick={() => handlePageClick(currentPage)}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // Always render the last page
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <PaginationShadcn>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={currentPage > 1 ? () => onPageChange(currentPage - 1) : undefined}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {renderPages()}

        <PaginationItem>
          <PaginationNext
            onClick={currentPage < totalPages ? () => onPageChange(currentPage + 1) : undefined}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationShadcn>
  );
};
