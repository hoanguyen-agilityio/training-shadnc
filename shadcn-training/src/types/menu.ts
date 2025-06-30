export interface MenuItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

export interface MenuProps {
  menuItems: MenuItem[];
}
