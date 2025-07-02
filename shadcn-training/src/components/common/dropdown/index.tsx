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
        <div className="relative w-max">
          <input
            readOnly
            value={label ? `${label}: ${position}` : position}
            className="w-full border border-[#E6E6E6] rounded px-4 py-2.5 cursor-pointer text-sm"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[178px]">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {options.map((opt) => (
            <DropdownMenuRadioItem key={opt.value} value={opt.value}>
              {opt.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
