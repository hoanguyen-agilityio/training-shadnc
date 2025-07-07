import { ROUTES } from './routes';

const MENU_ITEMS_HEADER = [
  { label: 'Shop', href: ROUTES.SHOP },
  { label: 'New Arrivals', href: undefined, disabled: true },
  { label: 'About Us', href: ROUTES.ABOUT },
];

const MENU_ITEMS_FOOTER = [
  { label: 'Support Center', href: undefined, disabled: true },
  { label: 'Contact', href: ROUTES.CONTACT },
  { label: 'Blog', href: undefined, disabled: true },
  { label: 'FAQ,s', href: ROUTES.ABOUT },
];

export { MENU_ITEMS_HEADER, MENU_ITEMS_FOOTER };
