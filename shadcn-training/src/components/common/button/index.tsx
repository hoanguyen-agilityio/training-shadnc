// Libs
import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

// Components
import { Button as ButtonShadcn } from '@/components/ui/button';

interface IButton extends ComponentProps<typeof ButtonShadcn> {
  label: string;
  icon?: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ label, icon, className, onClick, ...props }: IButton) => {
  return (
    <ButtonShadcn
      className={clsx(
        'bg-black text-white rounded-[10px] px-[30px] cursor-pointer transition-all duration-200 ease-in-out',
        'hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {icon}
      {label}
    </ButtonShadcn>
  );
};
