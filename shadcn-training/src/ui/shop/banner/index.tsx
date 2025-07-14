// Components
import { Button } from '@/components';

// Mocks
import { COUNTDOWN_DATA } from '@/mocks';

export const ShopBanner = () => {
  return (
    <section className="flex flex-col items-center gap-4 relative mt-[42px]">
      <img
        src="/assets/shop-banner.svg"
        alt="shop banner"
        className="w-auto h-custom-h-lg min-[950px]:w-full min-[950px]:h-auto object-cover"
      />
      <div className="text-center absolute inset-0 flex flex-col justify-center items-center w-full">
        <span className="text-sm uppercase text-white">Best Deals</span>
        <h1 className="text-4xl min-[720px]:text-[40px] font-semibold mt-3 text-white">
          Sale of the Month
        </h1>
        <div className="flex items-center gap-2 justify-center mt-5">
          {COUNTDOWN_DATA.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-semibold text-white">{item.value}</span>
                <span className="text-xs opacity-50 text-white">{item.label}</span>
              </div>
              {index < COUNTDOWN_DATA.length - 1 && (
                <span className="text-2xl font-semibold text-white">:</span>
              )}
            </div>
          ))}
        </div>
        <Button label="Shop Now" size="default" disabled className="mt-8 cursor-not-allowed" />
      </div>
      <div className="bg-theme-brand rounded-full flex flex-col p-3 text-center absolute right-2 top-2 min-[400px]:right-1/12 min-[400px]:top-1/12 min-[720px]:p-6 min-[1180px]:right-3/12">
        <span className="text-xl min-[720px]:text-2xl font-semibold text-white">56%</span>
        <span className="text-xs text-white opacity-80">OFF</span>
      </div>
    </section>
  );
};
