// Types
import { IProductCard } from '@/types';

// Components
import { Tabs as TabShadcn, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components';

interface ICard {
  tabs: {
    label: string;
    value: string;
  }[];
  cards: (IProductCard & { value: string })[];
}

export const Tabs = ({ tabs, cards }: ICard) => {
  return (
    <TabShadcn defaultValue="lorem1">
      <TabsList>
        {tabs.map(({ label, value }, index) => {
          return (
            <TabsTrigger value={value} key={index}>
              {label}
            </TabsTrigger>
          );
        })}
      </TabsList>
      <div className="w-full grid grid-cols-3 gap-4">
        {cards.map(
          ({ img, imgAlt, variant, title, brand, rating, price, reviewLabel, value }, index) => {
            return (
              <TabsContent value={value} key={index}>
                <ProductCard
                  img={img}
                  imgAlt={imgAlt}
                  variant={variant}
                  title={title}
                  brand={brand}
                  rating={rating}
                  price={price}
                  reviewLabel={reviewLabel}
                />
              </TabsContent>
            );
          },
        )}
      </div>
    </TabShadcn>
  );
};
