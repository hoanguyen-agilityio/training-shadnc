import {
  NavigationTrail,
  CarouselWithSideControls,
  CarouselWithTopControls,
  Subscribe,
  Banner,
} from '@/components';

import { Footer, Header } from '@/layouts';
import { DeliveryPromise, OrganicFoodStore } from '@/ui';

export const AboutPage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto px-10">
        <Header />
      </div>
      <main>
        <div className="max-w-[1320px] mx-auto flex flex-col px-10">
          <NavigationTrail breadcrumbName="FAQ’s" />
          <Banner title="About US" />
        </div>
        <OrganicFoodStore />
        <div className="max-w-[1320px] mx-auto flex flex-col px-10 my-20">
          <DeliveryPromise />
          <section className="mt-20">
            <div className="max-w-[640px] text-center mx-auto mb-10">
              <h3 className="text-[46px] dark:text-white">Our Awesome Team</h3>
              <p className="text-lg text-charcoalGray-60 dark:text-gray-60 mt-3">
                Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus
                neque. Duis non diam eget est luctus tincidunt a a mi.
              </p>
            </div>
            <CarouselWithSideControls />
          </section>
        </div>
        <section className="bg-theme-gray-150 dark:bg-neutral-700 py-20">
          <CarouselWithTopControls />
        </section>
        <Subscribe />
      </main>
      <div className="max-w-[1320px] mx-auto px-10 mt-[30px]">
        <Footer />
      </div>
    </>
  );
};
