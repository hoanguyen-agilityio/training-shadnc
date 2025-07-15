import { Button } from '@/components';

export const CollectionHero = () => (
  <section aria-label="collection hero" className="text-center">
    <h2 className="font-scope text-fs-2xl dark:text-white">A Style That Fits Everyone</h2>
    <p className="text-lg leading-7 text-charcoalGray-60 dark:text-gray-60 mt-4">
      Be inspired by sleek shapes, fresh colors and expressive prints
    </p>
    <Button label="Shop collection" disabled size="sm" className="mt-8" />
  </section>
);
