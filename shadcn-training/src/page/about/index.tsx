import {
  Breadcrumb,
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
      <div className="max-w-[1320px] mx-auto flex flex-col px-10">
        <Header />
        <Breadcrumb breadcrumbName="FAQ’s" />
        <Banner title="About US" />
      </div>
      <OrganicFoodStore />
      <div className="max-w-[1320px] mx-auto flex flex-col px-10 my-20">
        <DeliveryPromise />
        <section className="mt-20">
          <div className="max-w-[640px] text-center mx-auto mb-10">
            <h3 className="text-[46px]">Our Awesome Team</h3>
            <p className="text-lg text-[#8A8A8A] mt-3">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus
              neque. Duis non diam eget est luctus tincidunt a a mi.
            </p>
          </div>
          <CarouselWithSideControls />
        </section>
      </div>
      <section className="bg-[#F2F2F2] py-20">
        <CarouselWithTopControls />
      </section>
      <Subscribe />
      <div className="max-w-[1320px] mx-auto px-10 mt-[30px]">
        <Footer />
      </div>
    </>
  );
};
