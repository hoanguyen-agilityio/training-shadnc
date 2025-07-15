import { XIcon } from 'lucide-react';

export const ActiveFilter = () => (
  <section className="border-b-1 border-t-1 border-theme-gray-250 p-5 mt-5">
    <div className="max-w-container mx-auto px-10 flex flex-col gap-2.5 justify-between @bp-700/main:gap-0 @bp-700/main:flex-row">
      <div className="flex flex-col gap-2.5 @bp-520/main:flex-row @bp-520/main:gap-6">
        <span className="text-charcoalGray-60 dark:text-gray-60 text-sm">Active Filters:</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-black dark:text-white">Wing Chair</span>
          <XIcon
            width="12px"
            height="12px"
            className="text-theme-gray-700 hover:text-black dark:hover:text-white cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-black dark:text-white">Min $300 - Max 500</span>
          <XIcon
            width="12px"
            height="12px"
            className="text-theme-gray-700 hover:text-black dark:hover:text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-1">
        <span className="text-sm text-black dark:text-white">2,547</span>
        <span className="text-charcoalGray-60 dark:text-gray-60 text-sm">Results found.</span>
      </div>
    </div>
  </section>
);
