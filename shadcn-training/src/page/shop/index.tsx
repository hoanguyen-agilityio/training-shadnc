// Libs
import { useState } from 'react';

// Layouts
import { Footer, Header } from '@/layouts';

// Ui
import { ActiveFilter, HeroImg, ShopBanner } from '@/ui';

// Mocks
import {
  CATEGORY_OPTIONS,
  PRICE_OPTIONS,
  PRODUCTS_SHOP_PAGE,
  RATING_OPTIONS,
  SHOW_OPTIONS,
  SORT_OPTIONS,
} from '@/mocks';

// Components
import {
  NavigationTrail,
  Dropdown,
  ProductCard,
  FeatureBar,
  Pagination,
  Subscribe,
} from '@/components';

export const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = PRODUCTS_SHOP_PAGE.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(PRODUCTS_SHOP_PAGE.length / productsPerPage);
  return (
    <>
      <div className="max-w-[1320px] mx-auto px-10">
        <Header />
      </div>
      <main>
        <div className="max-w-[1320px] mx-auto flex flex-col px-10">
          <NavigationTrail breadcrumbName="Shop" />
          <ShopBanner />
          <section className="flex flex-col gap-2.5 justify-between mt-5 min-[1200px]:gap-0 min-[1200px]:flex-row">
            <div className="flex flex-col gap-4 min-[600px]:flex-row">
              <Dropdown options={CATEGORY_OPTIONS} defaultValue="All Categories" />
              <Dropdown options={PRICE_OPTIONS} defaultValue="Any Price" />
              <Dropdown options={RATING_OPTIONS} defaultValue="Any Rating" />
            </div>
            <div className="flex flex-col gap-4 min-[600px]:flex-row">
              <Dropdown options={SORT_OPTIONS} label="Sort by" defaultValue="Latest" />
              <Dropdown options={SHOW_OPTIONS} label="Show" defaultValue="16" />
            </div>
          </section>
        </div>
        <ActiveFilter />
        <section className="max-w-[1320px] mx-auto mt-20 px-10">
          <div className="w-full grid grid-cols-1 justify-items-center gap-4 min-[890px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1280px]:justify-items-start">
            {currentProducts.map(
              ({ img, imgAlt, variant, title, brand, rating, price, reviewLabel }, index) => (
                <ProductCard
                  key={index}
                  img={img}
                  imgAlt={imgAlt}
                  variant={variant}
                  title={title}
                  brand={brand}
                  rating={rating}
                  price={price}
                  reviewLabel={reviewLabel}
                />
              ),
            )}
          </div>
          <div className="flex flex-col gap-2.5 justify-between items-center mt-[30px] min-[750px]:gap-0 min-[750px]:flex-row">
            <span className="text-sm dark:text-white">
              Showing {indexOfFirstProduct + 1}–
              {Math.min(indexOfLastProduct, PRODUCTS_SHOP_PAGE.length)} of{' '}
              {PRODUCTS_SHOP_PAGE.length} items
            </span>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
        <HeroImg />
        <div className="max-w-[1320px] mx-auto px-10 mt-[60px]">
          <FeatureBar />
        </div>
        <Subscribe />
      </main>
      <div className="max-w-[1320px] mx-auto px-10 mt-[30px]">
        <Footer />
      </div>
    </>
  );
};
