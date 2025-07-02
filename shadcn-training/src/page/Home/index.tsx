import { CollectionHero, HomeBanner, NewArrivals, NewIn, SocialGallery } from '@/ui';
import { Footer, Header } from '@/layouts';
import { FeatureBar } from '@/components/feature-bar';
import { Subscribe } from '@/components/subscribe';

export const HomePage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[60px] px-10">
        <Header />
        <HomeBanner />
        <CollectionHero />
      </div>
      <NewIn />
      <div className="max-w-[1320px] mx-auto px-10 mt-[60px]">
        <NewArrivals />
        <FeatureBar />
      </div>
      <SocialGallery />
      <Subscribe />
      <div className="max-w-[1320px] mx-auto px-10 mt-[30px]">
        <Footer />
      </div>
    </>
  );
};
