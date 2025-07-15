import { Button } from '@/components';

export const HeroImg = () => (
  <section className="relative mt-20">
    <img
      src="/assets/shop-hero-img.svg"
      alt="shop hero image"
      className="w-auto h-custom-h-2xl @bp-750/main:w-full @bp-750/main:h-full object-cover"
    />
    <div className="absolute inset-0 flex justify-center items-center px-10">
      <div className="border-4 border-white p-10 text-center @bp-1080/main:p-20">
        <h2 className="block text-white text-4xl @bp-850/main:text-fs-2xl font-scope">
          -50 PROMOTION HOT SUMMER
        </h2>
        <span className="block text-sm mt-2.5 text-white max-w-custom-7xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </span>
        <Button
          label="Explore"
          size="default"
          disabled
          className="mt-space-2xl w-custom-5xl cursor-not-allowed"
        />
      </div>
    </div>
  </section>
);
