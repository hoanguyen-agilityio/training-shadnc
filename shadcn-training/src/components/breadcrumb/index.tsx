import { HomeIcon } from 'lucide-react';
import { ChevronIcon } from '../icons';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants';

interface IBreadcrumb {
  breadcrumbName: string;
}

export const Breadcrumb = ({ breadcrumbName }: IBreadcrumb) => {
  const location = useLocation();
  return (
    <section className="flex gap-3 mt-[25px]">
      <Link to={ROUTES.HOME}>
        <HomeIcon width="24px" height="24px" />
      </Link>
      <ChevronIcon width="24px" height="24px" fill="#666666" />
      <Link to={location.pathname}>
        <span className="text-base text-green-50">{breadcrumbName}</span>
      </Link>
    </section>
  );
};
