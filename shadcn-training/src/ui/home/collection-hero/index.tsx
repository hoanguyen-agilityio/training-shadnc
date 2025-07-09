import { Button } from '@/components';

export const CollectionHero = () => (
  <section aria-label="collection hero" className="text-center">
    <h2 className="text-[46px] dark:text-white">A style that fits everyone</h2>
    <p className="text-lg text-[#8A8A8A] mt-4">
      Be inspired by sleek shapes, fresh colors and expressive prints{' '}
    </p>
    <Button label="Shop collection" disabled size="sm" className="mt-8" />
  </section>
);
