// Libs
import { Link } from 'react-router-dom';

// Constants
import { MENU_ITEMS_HEADER } from '@/constants';

// Components
import { Menu, Button } from '@/components';
import { Logo } from '@/components/icons';

export const Header = () => (
  <header className="flex items-center justify-between mt-5 border-b-1 border-[#EAEAEA] pb-5">
    <div className="flex items-center min-[680px]:gap-8 gap-0">
      <Link to="/">
        <Logo width="100px" height="100px" />
      </Link>
      <Menu menuItems={MENU_ITEMS_HEADER} />
    </div>
    <Button label="Sign Up" size="sm" onClick={() => {}} />
  </header>
);
