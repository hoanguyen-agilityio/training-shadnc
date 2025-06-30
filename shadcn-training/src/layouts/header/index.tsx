import { Menu } from '@/components';
import { Button } from '@/components/common/button';
import { Logo } from '@/components/icons';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex items-center justify-between mt-5 px-4">
      <div className="flex items-center min-[680px]:gap-8 gap-0">
        <Link to="/">
          <Logo width="100px" height="100px" />
        </Link>
        <Menu />
      </div>
      <Button label="Sign Up" variant="m" onClick={() => {}} />
    </header>
  );
};
