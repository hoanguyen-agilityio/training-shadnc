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
      <CardHeader>
        <h3 className="text-2xl font-bold text-black">Just Say Hello!</h3>
        <p className="text-sm font-normal text-[#808080]">
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
            <div className="flex flex-col gap-3">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="relative w-max">
                    <Input
                      label="Date"
                      type="text"
                      variant="default"
                      placeholder="Select date"
                      name="date"
                      id="date-picker"
                      className="pr-8 cursor-pointer"
                      readOnly
                      value={date ? date.toLocaleDateString() : ''}
                    />
                    <span className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
                      {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
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
                    className="!bg-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-3">
              <Input
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
          <div className="flex flex-col gap-3">
            <Label>Subject</Label>
            <Textarea
              placeholder="Subject"
              className="px-3 py-4 border border-[#E2E2E2] rounded-[10px] min-h-[180px]"
            />
          </div>
          <Button
            label="SEND MESSAGE"
            className="w-[177px] text-base cursor-not-allowed"
            disabled
          />
        </form>
      </CardContent>
    </Card>
  );
};
