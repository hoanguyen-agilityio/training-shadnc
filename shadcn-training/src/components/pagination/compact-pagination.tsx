// Types
import { IPagination } from '@/types';

// Components
import {
  Pagination as PaginationShadcn,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export const CompactPagination = ({ totalPages, currentPage, onPageChange }: IPagination) => {
  const goToPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <PaginationShadcn className="flex @bp-500/main:hidden">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={goToPrevious} aria-disabled={currentPage === 1}>
            First
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={goToNext} aria-disabled={currentPage === totalPages}>
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </PaginationShadcn>
  );
};
