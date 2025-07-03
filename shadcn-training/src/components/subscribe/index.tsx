// Components
import { Button, Input } from '@/components';
import { ArrowIcon } from '@/components/icons';

export const Subscribe = () => {
  return (
    <section className="max-h-[867px] w-full h-[867px] relative mt-[60px]">
      <img src="/public/assets/subscribe.webp" alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p className="text-[46px] text-[#8A8A8A]">Subscribe To Our Newsletter</p>
        <p className="text-lg text-charcoalGray-50 max-w-[688px] mt-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
          sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
        </p>
        <div className="flex flex-col items-center gap-[30px] w-full max-w-md mt-2.5">
          <Input
            variant="primary"
            type="email"
            placeholder="michael@ymail.com"
            name="email"
            onChange={() => {}}
          />
          <Button
            size="sm"
            label="Subscribe Now"
            icon={<ArrowIcon fill="white" />}
            onClick={() => {}}
            className="cursor-not-allowed"
          />
        </div>
      </div>
    </section>
  );
};
