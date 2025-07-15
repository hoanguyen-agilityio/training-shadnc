import { Button } from '@/components';
import { Tabs } from '@/components/common/tabs';
import { ChevronIcon } from '@/components/icons';
import { PRODUCTS_HOME_PAGE, TABS_LABEL } from '@/mocks';

export const NewArrivals = () => (
  <section aria-label="new arrivals" className="max-w-container mx-auto">
    <div className="flex flex-col text-center gap-3.5 mb-4 items-center">
      <h2 className="font-scope text-fs-2xl text-theme-gray-900 dark:text-white">New Arrivals</h2>
      <p className="text-lg leading-7 text-charcoalGray-60 dark:text-gray-60 w-full max-w-custom-9xl-plus">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
        sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
      </p>
    </div>
    <Tabs tabs={TABS_LABEL} cards={PRODUCTS_HOME_PAGE} />
    <div className="flex justify-center mt-space-4xl">
      <Button
        label="View More"
        icon={<ChevronIcon fill="white" />}
        disabled
        size="sm"
        className="flex flex-row-reverse !leading-7"
      />
    </div>
  </section>
);
