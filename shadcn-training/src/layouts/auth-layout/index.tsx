// Libs
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

// Components
import { Logo, WavingHandIcon } from '@/components/icons';
import { ROUTES } from '@/constants';

interface IAuthLayout {
  title: string;
  icon?: boolean;
  description: string;
  children: ReactNode;
}

export const AuthLayout = ({ title, description, icon, children }: IAuthLayout) => (
  <main className="relative w-full h-screen overflow-hidden">
    <img
      src="/assets/side-img.svg"
      alt="side image"
      className="absolute inset-0 w-full h-full object-cover hidden min-[1200px]:block"
    />
    <Link
      to={ROUTES.HOME}
      className="absolute top-10 left-10 p-[15px] bg-white rounded shadow hidden min-[1200px]:block"
      aria-label="logo"
    >
      <Logo width="80px" height="80px" />
    </Link>
    <div className="absolute top-0 right-0 h-full w-full min-[1200px]:w-[40%] flex justify-center items-center px-6 bg-white z-10 dark:bg-black">
      <div className="flex flex-col gap-[30px] max-w-[480px] w-full">
        <div className="flex flex-col gap-[5px]">
          <div className="flex gap-2.5">
            <span className="text-[46px] dark:text-white">{title}</span>
            {icon && <WavingHandIcon width="64px" height="64px" />}
          </div>
          <span className="text-lg text-charcoalGray-60 dark:text-gray-60">{description}</span>
        </div>
        {children}
      </div>
    </div>
  </main>
);
