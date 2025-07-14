import { Button, Input } from '@/components';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };

  return (
    <Card className="w-full shadow-xl rounded-[10px]">
      <CardHeader className="gap-2">
        <h2 className="text-2xl font-bold text-black dark:text-white">Just Say Hello!</h2>
        <p className="text-sm font-normal text-charcoalGray-60 dark:text-theme-gray-450">
          Do you fancy saying hi to me or you want to get started with your project and you need my
          help? Feel free to contact me.
        </p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3">
          <div className="flex gap-4">
            <Input label="Name" type="text" placeholder="Name" variant="default" name="name" />
            <Input
              label="Phone Number"
              type="number"
              placeholder="Phone Number"
              variant="default"
              name="phone number"
            />
          </div>
          <Input label="Email" type="email" placeholder="Email" variant="default" name="email" />
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
                    className="relative border border-theme-gray-350 px-3 py-4 text-left text-sm dark:text-white rounded-[10px] w-36"
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

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="subject" className="dark:text-white text-sm">
              Subject
            </Label>
            <Textarea
              id="subject"
              placeholder="Subject"
              className="px-3 py-4 border border-theme-gray-400 rounded-[10px] min-h-custom-h-sm dark:text-white"
            />
          </div>

          <Button
            label="SEND MESSAGE"
            className="w-custom-sm text-base cursor-not-allowed"
            disabled
          />
        </form>
      </CardContent>
    </Card>
  );
};
