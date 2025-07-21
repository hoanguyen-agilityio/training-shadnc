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

export const FullPagination = ({ totalPages, currentPage, onPageChange }: IPagination) => {
  const goToPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPages = () => {
    const pages: React.ReactNode[] = [];

    pages.push(
      <PaginationItem key={1}>
        <PaginationLink isActive={currentPage === 1} onClick={() => onPageChange(1)}>
          1
        </PaginationLink>
      </PaginationItem>,
    );

    if (totalPages <= 3) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={currentPage === i} onClick={() => onPageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 2; i <= 3; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink isActive={currentPage === i} onClick={() => onPageChange(i)}>
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
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
        for (let i = totalPages - 2; i < totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink isActive={currentPage === i} onClick={() => onPageChange(i)}>
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
      } else {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={currentPage}>
            <PaginationLink isActive onClick={() => onPageChange(currentPage)}>
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

      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <PaginationShadcn className="hidden @bp-500/main:flex">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={goToPrevious} aria-disabled={currentPage === 1} />
        </PaginationItem>

        {renderPages()}

        <PaginationItem>
          <PaginationNext onClick={goToNext} aria-disabled={currentPage === totalPages} />
        </PaginationItem>
      </PaginationContent>
    </PaginationShadcn>
  );
};
