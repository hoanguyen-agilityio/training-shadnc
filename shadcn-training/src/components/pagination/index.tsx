import {
  Pagination as PaginationShadcn,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface IPagination {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: IPagination) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationShadcn>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={
              currentPage === 1 ? undefined : () => onPageChange(Math.max(currentPage - 1, 1))
            }
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink isActive={page === currentPage} onClick={() => onPageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={
              currentPage === totalPages
                ? undefined
                : () => onPageChange(Math.min(currentPage + 1, totalPages))
            }
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationShadcn>
  );
};
