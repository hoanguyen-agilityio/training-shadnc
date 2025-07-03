import { HomeIcon } from 'lucide-react';
import { ArrowIcon } from '../icons';
import { Link, useLocation } from 'react-router-dom';

interface IBreadcrumb {
  breadcrumbName: string;
}

export const Breadcrumb = ({ breadcrumbName }: IBreadcrumb) => {
  const location = useLocation();
  return (
    <section className="flex gap-3 mt-[25px]">
      <Link to="/">
        <HomeIcon width="24px" height="24px" />
      </Link>
      <ArrowIcon width="24px" height="24px" fill="#666666" />
      <Link to={location.pathname}>
        <span className="text-base text-green-50">{breadcrumbName}</span>
      </Link>
    </section>
  );
};
