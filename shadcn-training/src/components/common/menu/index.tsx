// Libs
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import HamburgerIcon from '@/components/icons/hamburger-icon';
import { MenuProps } from '@/types';

export const Menu = ({ menuItems }: MenuProps) => {
  const location = useLocation();

  return (
    <>
      <Breadcrumb className="hidden @bp-850/structure:flex">
        <BreadcrumbList className="flex sm:gap-8">
          {menuItems.map((item) => (
            <BreadcrumbItem key={item.label}>
              <BreadcrumbLink
                href={item.disabled ? undefined : item.href}
                className={clsx('font-poppins hover:text-green-50 text-base', 'dark:text-white', {
                  'cursor-not-allowed': item.disabled,
                  'text-green-700 dark:text-green-50': location.pathname === item.href,
                })}
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex @bp-850/structure:hidden cursor-pointer">
          <HamburgerIcon width="24px" height="24px" className="text-black dark:text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={clsx(
            'flex flex-col gap-2',
            'bg-white rounded-lg shadow-xl',
            'p-2',
            'transition-transform duration-200 ease-in-out',
            'transform-gpu',
            'backdrop-blur-sm backdrop-saturate-150',
            'border border-gray-200',
            'dark:bg-black dark:text-white dark:border-gray-700',
          )}
        >
          {menuItems.map((item, index) => (
            <div key={item.label}>
              <DropdownMenuItem
                disabled={item.disabled}
                className={clsx('font-poppins text-base hover:text-green-50', {
                  'cursor-not-allowed': item.disabled,
                  'text-green-50': location.pathname === item.href,
                })}
                asChild
              >
                {item.href ? <Link to={item.href}>{item.label}</Link> : <span>{item.label}</span>}
              </DropdownMenuItem>
              {index < menuItems.length - 1 && (
                <DropdownMenuSeparator className="border border-black mt-2 dark:border-white" />
              )}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
