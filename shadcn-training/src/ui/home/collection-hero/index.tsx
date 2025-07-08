import { Button } from '@/components';

export const CollectionHero = () => (
  <section className="text-center">
    <h3 className="text-[46px] dark:text-white">A style that fits everyone</h3>
    <p className="text-lg text-[#8A8A8A] mt-4">
      Be inspired by sleek shapes, fresh colors and expressive prints{' '}
    </p>
    <Button label="Shop collection" disabled size="sm" className="mt-8" />
  </section>
);
