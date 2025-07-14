import { Input as InputShadcn } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import clsx from 'clsx';
import { ComponentProps } from 'react';

interface IInput extends ComponentProps<typeof InputShadcn> {
  variant: 'default' | 'primary';
  type: string;
  placeholder: string;
  label?: string;
  name: string;
  htmlFor?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  variant = 'default',
  type,
  placeholder,
  label,
  name,
  onChange,
  htmlFor,
  className,
  ...props
}: IInput) => {
  const inputClasses = clsx(
    'font-poppins text-base focus:border-theme-gray-650 focus:ring-0 ring-0',
    {
      'rounded-radius-md border border-theme-gray-400 py-4 px-3': variant === 'default',
      'border-0 shadow-md pt-7 pb-8 px-space-2xl': variant === 'primary',
    },
    className,
  );
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={htmlFor} className="dark:text-white">
        {label}
      </Label>
      <InputShadcn
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};
