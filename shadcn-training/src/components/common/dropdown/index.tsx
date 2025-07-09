// Libs
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
interface IDropdown {
  label?: string;
  defaultValue?: string;
  options: { label: string; value: string }[];
}

export const Dropdown = ({ label, defaultValue, options }: IDropdown) => {
  const [position, setPosition] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button type="button" className="relative w-[178px]">
          <span
            aria-label="dropdown"
            className="w-full border border-[#E6E6E6] rounded px-4 py-2.5 cursor-pointer text-sm dark:text-white inline-block text-left"
          >
            {label ? `${label}: ${position}` : position}
          </span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {open ? (
              <ChevronUp size={16} className="text-black dark:text-white" />
            ) : (
              <ChevronDown size={16} className="text-black dark:text-white" />
            )}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[178px] bg-white dark:bg-black">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {options.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className="text-black dark:text-white"
            >
              {opt.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
