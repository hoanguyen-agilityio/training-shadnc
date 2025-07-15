// Libs
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Components
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components';

export const DatePicker = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };

  return (
    <div className="flex gap-4">
      {/* Date Picker */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="date-picker" className="dark:text-white text-sm">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              id="date-picker"
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="radix-r4"
              aria-label="select date"
              className="relative border border-theme-gray-350 px-3 py-4 text-left text-sm dark:text-white rounded-radius-md w-36"
            >
              {date ? date.toLocaleDateString() : 'Select date'}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
              className="!bg-white dark:!bg-black"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-1.5">
        <Input
          aria-label="time picker"
          label="Time"
          type="time"
          id="time-picker"
          name="time picker"
          placeholder=""
          step="60"
          defaultValue={getCurrentTime()}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          variant="default"
        />
      </div>
    </div>
  );
};
