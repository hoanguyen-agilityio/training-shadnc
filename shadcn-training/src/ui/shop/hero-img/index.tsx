import { Button } from '@/components';

export const HeroImg = () => (
  <section className="relative mt-20">
    <img
      src="/assets/shop-hero-img.svg"
      alt="shop hero image"
      className="w-auto h-[450px] min-[750px]:w-full min-[750px]:h-full object-cover"
    />
    <div className="absolute inset-0 flex justify-center items-center px-10">
      <div className="border-4 border-white p-10 text-center min-[1080px]:p-20">
        <h3 className="block text-white text-4xl min-[850px]:text-[46px]">
          -50 PROMOTION HOT SUMMER
        </h3>
        <span className="block text-sm mt-2.5 text-white max-w-[467px] mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </span>
        <Button
          label="Explore"
          size="default"
          disabled
          className="mt-[30px] w-[294px] cursor-not-allowed"
        />
      </div>
    </div>
  </section>
);
