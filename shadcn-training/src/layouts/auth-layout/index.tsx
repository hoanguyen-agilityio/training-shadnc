// Libs
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Logo } from '@/components/icons';

interface IAuthLayout {
  children: ReactNode;
}

export const AuthLayout = ({ children }: IAuthLayout) => (
  <div className="relative w-full h-screen overflow-hidden">
    <img
      src="/public/assets/side-img.svg"
      alt="side image"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <Link to="/" className="absolute top-10 left-10 p-[15px] bg-white rounded shadow">
      <Logo width="80px" height="80px" />
    </Link>
    <div className="absolute top-0 right-0 h-full w-[40%] flex justify-center items-center px-6 bg-white z-10">
      {children}
    </div>
  </div>
);
