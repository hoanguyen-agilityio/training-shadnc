// Layouts
import { Footer, Header } from '@/layouts';

// Uis
import { CollectionHero, HomeBanner, NewArrivals, NewIn, SocialGallery } from '@/ui';

// Components
import { FeatureBar } from '@/components/feature-bar';
import { Subscribe } from '@/components/subscribe';
import { MetaTags } from '@/components';

export const HomePage = () => {
  return (
    <>
      <MetaTags />
      <div className="@container/structure max-w-container mx-auto px-10 bg-white dark:bg-black">
        <Header />
      </div>
      <main className="@container/main mt-space-6xl">
        <div className="max-w-container mx-auto flex flex-col gap-[60px] px-10 bg-white dark:bg-black">
          <HomeBanner />
          <CollectionHero />
        </div>
        <NewIn />
        <div className="max-w-container mx-auto px-10 mt-space-6xl">
          <NewArrivals />
          <FeatureBar />
        </div>
        <SocialGallery />
        <Subscribe />
      </main>
      <div className="@container/structure max-w-container mx-auto px-10 mt-space-2xl">
        <Footer />
      </div>
    </>
  );
};
