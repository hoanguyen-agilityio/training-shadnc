// Libs
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';

export const Menu = () => {
  const location = useLocation();

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex sm:gap-8">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/shop"
            className={clsx(
              'font-poppins hover:text-green-50 text-base',
              location.pathname === '/shop' && 'text-green-50',
            )}
          >
            Shop
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="font-poppins hover:text-green-50 cursor-not-allowed text-base">
            New Arrivals
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="font-poppins hover:text-green-50 cursor-not-allowed text-base">
            About Us
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="sign-in" className="font-poppins hover:text-green-50 text-base">
            Sign in
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
