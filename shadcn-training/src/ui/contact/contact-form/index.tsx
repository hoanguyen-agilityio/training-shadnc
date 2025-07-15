// Components
import { Button, DatePicker, Input } from '@/components';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const ContactForm = () => {
  return (
    <Card className="w-full shadow-xl rounded-radius-md">
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
          <DatePicker />

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="subject" className="dark:text-white text-sm">
              Subject
            </Label>
            <Textarea
              id="subject"
              placeholder="Subject"
              className="px-3 py-4 border border-theme-gray-400 rounded-radius-md min-h-custom-h-sm dark:text-white"
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
