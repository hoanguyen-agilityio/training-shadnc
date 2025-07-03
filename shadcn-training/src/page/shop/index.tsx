import { Breadcrumb } from '@/components';
import { Header } from '@/layouts';

export const ShopPage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[60px] px-10">
        <Header />
        <Breadcrumb breadcrumbName="Shop" />
      </div>
    </>
  );
};
