import { Button } from '@/components';

export const HomeBanner = () => (
  <section className="flex flex-col md:flex-row gap-[30px] items-stretch w-full">
    <img
      src="/src/assets/left-home-banner.svg"
      alt="left home banner"
      className="w-full min-w-[100px] object-contain"
    />
    <div className="flex flex-col gap-9 w-full">
      <img src="/src/assets/psyllium-home-banner.svg" alt="" className="w-full object-contain" />
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="text-[clamp(2rem,8vw,5rem)] uppercase leading-none">Ultimate</div>
        <div className="text-[clamp(4rem,16vw,10rem)] uppercase text-transparent stroke leading-none">
          SALE
        </div>
        <span className="text-base md:text-xl uppercase tracking-widest text-charcoalGray-50">
          New Collection
        </span>
        <Button label="SHOP NOW" size="sm" onClick={() => {}} className="w-full mt-1.5" />
      </div>
      <img src="/src/assets/sandalwood-home-banner.svg" alt="" className="w-full object-contain" />
    </div>
    <img
      src="/src/assets/right-home-banner.svg"
      alt="right home banner"
      className="w-full min-w-[100px] object-contain"
    />
  </section>
);
