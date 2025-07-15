// Libs
import { HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

// Components
import { ChevronIcon } from '../icons';

interface INavigationTrail {
  breadcrumbName: string;
}

export const NavigationTrail = ({ breadcrumbName }: INavigationTrail) => {
  const location = useLocation();
  return (
    <section className="flex gap-3 mt-space-md">
      <Link aria-label="back to home page" to={ROUTES.HOME}>
        <HomeIcon width="24px" height="24px" className="text-black dark:text-white" />
      </Link>
      <ChevronIcon width="24px" height="24px" className="text-theme-gray-750 dark:text-white" />
      <Link to={location.pathname}>
        <span className="text-base text-green-700 dark:text-green-50">{breadcrumbName}</span>
      </Link>
    </section>
  );
};
