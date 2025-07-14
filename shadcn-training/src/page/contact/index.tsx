import { Banner, NavigationTrail } from '@/components';
import { Footer, Header } from '@/layouts';
import { ContactSection } from '@/ui/contact';

export const ContactPage = () => {
  return (
    <>
      <div className="max-w-container mx-auto px-10">
        <Header />
      </div>
      <main>
        <div className="max-w-container mx-auto flex flex-col px-10">
          <NavigationTrail breadcrumbName="Contact US" />
          <Banner title="Contact US" />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
};
