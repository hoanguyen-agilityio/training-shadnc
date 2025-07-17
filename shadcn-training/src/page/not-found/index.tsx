// Libs
import { useNavigate } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

// Layouts
import { Footer, Header } from '@/layouts';

// Components
import { Button, MetaTags } from '@/components';
import { NotFound } from '@/components/icons';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHomePage = () => {
    return navigate(ROUTES.HOME);
  };

  return (
    <>
      <MetaTags />
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div className="max-w-container mx-auto px-10 w-full">
          <Header />
        </div>

        {/* Main (flex-grow to fill remaining space) */}
        <main className="flex-grow flex items-center justify-center p-10">
          <section className="max-w-custom-8xl text-center">
            <div className="flex justify-center">
              <NotFound width="446px" height="271px" />
            </div>
            <h1 className="text-fs-2xl font-normal mt-6 dark:text-white">Oops! page not found</h1>
            <p className="text-base font-normal mt-2 dark:text-white">
              Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis
              tortor at metus mollis
            </p>
            <Button
              label="BACK TO HOME"
              size="default"
              className="text-base mt-6"
              onClick={handleBackToHomePage}
            />
          </section>
        </main>

        {/* Footer */}
        <div className="border-t border-theme-gray-500 pt-space-2xl">
          <div className="max-w-container mx-auto px-10 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
