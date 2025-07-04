// Libs
import { Link, useNavigate } from 'react-router-dom';

// Constants
import { MENU_ITEMS_HEADER, ROUTES } from '@/constants';

// Components
import { Menu, Button, Avatar } from '@/components';
import { Logo } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

export const Header = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(ROUTES.SIGN_IN, { replace: true });
  };

  return (
    <header className="flex items-center justify-between mt-5 border-b-1 border-[#EAEAEA] pb-5">
      <div className="flex items-center min-[680px]:gap-8 gap-0">
        <Link to={ROUTES.HOME}>
          <Logo width="100px" height="100px" />
        </Link>
        <Menu menuItems={MENU_ITEMS_HEADER} />
      </div>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to={ROUTES.SIGN_UP}>
          <Button label="Sign Up" size="sm" onClick={() => {}} />
        </Link>
      )}
    </header>
  );
};
