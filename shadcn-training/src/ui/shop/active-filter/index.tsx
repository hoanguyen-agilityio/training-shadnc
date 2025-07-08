import { XIcon } from 'lucide-react';

export const ActiveFilter = () => (
  <section className="border-b-1 border-t-1 border-[#EAEAEA] p-5 mt-5">
    <div className="max-w-[1320px] mx-auto px-10 flex flex-col gap-2.5 justify-between min-[700px]:gap-0 min-[700px]:flex-row">
      <div className="flex flex-col gap-2.5 min-[520px]:flex-row min-[520px]:gap-6">
        <span className="text-[#808080] text-sm">Active Filters:</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-black dark:text-white">Wing Chair</span>
          <XIcon
            width="12px"
            height="12px"
            className="text-[#9A9CAA] hover:text-black dark:hover:text-white cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-black dark:text-white">Min $300 - Max 500</span>
          <XIcon
            width="12px"
            height="12px"
            className="text-[#9A9CAA] hover:text-black dark:hover:text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-1">
        <span className="text-sm text-black dark:text-white">2,547</span>
        <span className="text-[#808080] text-sm">Results found.</span>
      </div>
    </div>
  </section>
);
