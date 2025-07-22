// Types
import { IPagination } from '@/types';

// Components
import { CompactPagination } from './compact-pagination';
import { FullPagination } from './full-pagination';

export const Pagination = ({ totalPages, currentPage, onPageChange }: IPagination) => {
  return (
    <>
      <CompactPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <FullPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};
