import { Button } from '@/components';
import { Tabs } from '@/components/common/tabs';
import { ArrowIcon } from '@/components/icons';
import { PRODUCTS_HOME_PAGE, TABS_LABEL } from '@/mocks';

export const NewArrivals = () => (
  <section className="max-w-[1320px] mx-auto">
    <div className="flex flex-col text-center gap-3.5 mb-4 items-center">
      <span className="text-[46px] text-[#484848]">New Arrivals</span>
      <span className="text-lg text-[#8A8A8A] w-full max-w-[746px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
        sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
      </span>
    </div>
    <Tabs tabs={TABS_LABEL} cards={PRODUCTS_HOME_PAGE} />
    <div className="flex justify-center mt-[50px]">
      <Button
        label="View More"
        icon={<ArrowIcon fill="white" />}
        onClick={() => {}}
        size="sm"
        className="flex flex-row-reverse"
      />
    </div>
  </section>
);
