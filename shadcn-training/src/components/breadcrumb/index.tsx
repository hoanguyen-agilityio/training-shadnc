// Libs
import { HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

// Components
import { ChevronIcon } from '../icons';

interface IBreadcrumb {
  breadcrumbName: string;
}

export const Breadcrumb = ({ breadcrumbName }: IBreadcrumb) => {
  const location = useLocation();
  return (
    <section className="flex gap-3 mt-[25px]">
      <Link to={ROUTES.HOME}>
        <HomeIcon width="24px" height="24px" className="text-black dark:text-white" />
      </Link>
      <ChevronIcon width="24px" height="24px" className="text-[#666666] dark:text-white" />
      <Link to={location.pathname}>
        <span className="text-base text-green-50">{breadcrumbName}</span>
      </Link>
    </section>
  );
};
