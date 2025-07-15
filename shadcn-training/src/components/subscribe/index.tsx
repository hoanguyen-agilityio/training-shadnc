// Components
import { Button, Input } from '@/components';
import { ChevronIcon } from '@/components/icons';

export const Subscribe = () => {
  return (
    <section aria-label="subscribe" className="max-h-custom-h-3xl w-full h-custom-h-3xl relative">
      <img src="/assets/subscribe.webp" alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-fs-2xl text-charcoalGray-60 dark:text-gray-60">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-lg text-charcoalGray-50 max-w-custom-9xl mt-space-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
          sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
        </p>
        <div className="flex flex-col items-center gap-[30px] w-full max-w-md mt-2.5">
          <Input
            variant="primary"
            type="email"
            placeholder="michael@ymail.com"
            name="email"
            className="dark:text-black"
          />
          <Button
            size="sm"
            label="Subscribe Now"
            icon={<ChevronIcon fill="white" />}
            disabled
            className="dark:bg-black dark:text-white"
          />
        </div>
      </div>
    </section>
  );
};
