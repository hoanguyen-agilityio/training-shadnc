// Layouts
import { Footer, Header } from '@/layouts';

// Uis
import { ContactSection } from '@/ui';

// Components
import { Banner, MetaTags, NavigationTrail } from '@/components';

export const ContactPage = () => {
  return (
    <>
      <MetaTags />
      <div className="@container/structure max-w-container mx-auto px-10">
        <Header />
      </div>
      <main className="@container/main">
        <div className="max-w-container mx-auto flex flex-col px-10">
          <NavigationTrail breadcrumbName="Contact US" />
          <Banner title="Contact US" />
          <ContactSection />
        </div>
      </main>
      <div className="@container/structure max-w-container mx-auto flex flex-col px-10">
        <Footer />
      </div>
    </>
  );
};
