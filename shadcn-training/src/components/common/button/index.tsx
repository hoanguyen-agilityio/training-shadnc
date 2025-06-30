// Libs
import clsx from 'clsx';
import { ReactNode } from 'react';

// Components
import { Button as ButtonShadcn } from '@/components/ui/button';

interface IButton {
  variant: 's' | 'm';
  label: string;
  icon?: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ variant = 'm', label, icon, className, onClick }: IButton) => {
  const buttonClasses = clsx(
    'bg-black text-white rounded-[10px] px-[30px] cursor-pointer transition-all duration-200 ease-in-out',
    'hover:brightness-110 active:scale-95 focus:outline-none focus:ring-2',
    {
      'py-2.5': variant === 's',
      'py-4': variant === 'm',
    },
    className,
  );

  return (
    <ButtonShadcn
      className={`bg-black text-white rounded-[10px] px-[30px] ${buttonClasses}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </ButtonShadcn>
  );
};
