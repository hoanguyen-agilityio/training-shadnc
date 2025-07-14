import { Button } from '@/components';

export const CollectionHero = () => (
  <section aria-label="collection hero" className="text-center">
    <h2 className="text-fs-2xl dark:text-white">A style that fits everyone</h2>
    <p className="text-lg text-charcoalGray-60 dark:text-gray-60 mt-4">
      Be inspired by sleek shapes, fresh colors and expressive prints{' '}
    </p>
    <Button label="Shop collection" disabled size="sm" className="mt-8" />
  </section>
);
