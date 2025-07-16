// Libs
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

// Components
import { Logo } from '@/components/icons';
import { ROUTES } from '@/constants';
import { ClerkLoading } from '@clerk/clerk-react';
import { LoadingPage } from '@/page';

interface IAuthLayout {
  children: ReactNode;
}

export const AuthLayout = ({ children }: IAuthLayout) => (
  <main className="@container/main relative w-full h-screen overflow-hidden">
    <img
      src="/assets/side-img.svg"
      alt="side image"
      className="absolute inset-0 w-full h-full object-cover hidden @bp-1200/main:block"
    />
    <Link
      to={ROUTES.HOME}
      className="absolute top-10 left-10 p-space-md bg-white rounded shadow hidden @bp-1200/main:block"
      aria-label="logo"
    >
      <Logo width="80px" height="80px" />
    </Link>
    <div className="absolute top-0 right-0 h-full w-full @bp-1200/main:w-[40%] flex justify-center items-center px-6 bg-white z-10 dark:bg-black">
      <div className="flex flex-col gap-[30px] max-w-custom-7xl-plus w-full">
        <ClerkLoading>
          <LoadingPage />
        </ClerkLoading>
        {children}
      </div>
    </div>
  </main>
);
