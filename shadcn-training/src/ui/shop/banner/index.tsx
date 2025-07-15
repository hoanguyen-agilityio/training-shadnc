// Components
import { Button } from '@/components';

// Mocks
import { COUNTDOWN_DATA } from '@/mocks';

export const ShopBanner = () => {
  return (
    <section className="flex flex-col items-center gap-4 relative mt-space-3xl">
      <img
        src="/assets/shop-banner.svg"
        alt="shop banner"
        className="w-auto h-custom-h-lg @bp-950/main:w-full @bp-950/main:h-auto object-cover"
      />
      <div className="text-center absolute inset-0 flex flex-col justify-center items-center w-full">
        <span className="text-sm leading-lh-sm uppercase text-white">Best Deals</span>
        <h1 className="text-4xl leading-lh-3xl @bp-720/main:text-fs-xl font-semibold mt-3 text-white">
          Sale of the Month
        </h1>
        <div className="flex items-center gap-2 justify-center mt-5">
          {COUNTDOWN_DATA.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl leading-9 font-semibold text-white">{item.value}</span>
                <span className="text-xs leading-3 opacity-50 text-white">{item.label}</span>
              </div>
              {index < COUNTDOWN_DATA.length - 1 && (
                <span className="text-2xl font-semibold text-white">:</span>
              )}
            </div>
          ))}
        </div>
        <Button label="Shop Now" size="default" disabled className="mt-8 cursor-not-allowed" />
      </div>
      <div className="bg-theme-brand rounded-full flex flex-col p-3 text-center absolute right-2 top-2 @bp-400/main:right-1/12 @bp-400/main:top-1/12 @bp-720/main:p-6 @bp-1180/main:right-3/12">
        <span className="text-xl @bp-720/main:text-2xl font-semibold text-white leading-9">
          56%
        </span>
        <span className="text-xs text-white opacity-80 leading-lh-sm">OFF</span>
      </div>
    </section>
  );
};
