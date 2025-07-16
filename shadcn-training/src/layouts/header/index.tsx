// Libs
import { Link, useNavigate } from 'react-router-dom';

// Clerk
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';

// Constants
import { MENU_ITEMS_HEADER, ROUTES } from '@/constants';

// Components
import { Menu, Button, ModeToggle } from '@/components';
import { Logo } from '@/components/icons';

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToSignupPage = () => {
    navigate(ROUTES.SIGN_UP, { replace: true });
  };

  return (
    <header className="flex items-center justify-between mt-5 border-b-1 border-theme-gray-250 pb-5">
      <div className="flex items-center @bp-680/structure:gap-8 gap-0">
        <Link to={ROUTES.HOME} aria-label="logo">
          <Logo width="100px" height="100px" />
        </Link>

        {/* Menu: Sign in link included conditionally */}
        <SignedIn>
          <Menu menuItems={MENU_ITEMS_HEADER} />
        </SignedIn>
        <SignedOut>
          <Menu
            menuItems={[
              ...MENU_ITEMS_HEADER,
              { label: 'Sign in', href: ROUTES.SIGN_IN, disabled: false },
            ]}
          />
        </SignedOut>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button label="Sign Up" size="sm" onClick={handleNavigateToSignupPage} />
        </SignedOut>
      </div>
    </header>
  );
};
