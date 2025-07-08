import { Link } from 'react-router-dom';
import { Menu } from '@/components';
import { Logo } from '@/components/icons';
import { MENU_ITEMS_FOOTER, ROUTES } from '@/constants';

export const Footer = () => (
  <footer className="px-4 text-center">
    <div className="flex items-center justify-between">
      <Link to={ROUTES.HOME}>
        <Logo width="100px" height="100px" />
      </Link>
      <Menu menuItems={MENU_ITEMS_FOOTER} />
    </div>
    <span className="font-poppins text-base pt-3 dark:text-[#8A8A8A]">
      Copyright © 2024 . All Rights Reserved.
    </span>
  </footer>
);
