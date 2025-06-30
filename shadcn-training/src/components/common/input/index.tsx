import { Input as InputShadcn } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import clsx from 'clsx';

interface IInput {
  variant: 'default' | 'primary';
  type: string;
  placeholder: string;
  label?: string;
  name: string;
  htmlFor?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}: IInput) => {
  const inputClasses = clsx(
    'font-poppins text-base focus:border-[#b0b0b0] focus:ring-0 ring-0',
    {
      'rounded-[10px] border border-[#E2E2E2] py-4 px-3': variant === 'default',
      'border-0 shadow-md pt-7 pb-8 px-[30px]': variant === 'primary',
    },
    className,
  );
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={htmlFor}>{label}</Label>
      <InputShadcn
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  );
};
