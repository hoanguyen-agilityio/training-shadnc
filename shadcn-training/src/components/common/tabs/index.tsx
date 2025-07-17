// Types
import { IProductCard } from '@/types';

// Components
import { Tabs as TabShadcn, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard, Button } from '@/components';
import { ChevronIcon } from '@/components/icons';
import { useState } from 'react';

interface ICard {
  tabs: {
    label: string;
    value: string;
  }[];
  cards: IProductCard[];
}

const ITEMS_PER_PAGE = 6;

export const Tabs = ({ tabs, cards }: ICard) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || '');
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(
    Object.fromEntries(tabs.map((tab) => [tab.value, ITEMS_PER_PAGE])),
  );

  const handleViewMore = () => {
    setVisibleCounts((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] ?? ITEMS_PER_PAGE) + ITEMS_PER_PAGE,
    }));
  };

  const groupedCards = tabs.reduce((acc, tab) => {
    acc[tab.value] = cards.filter((card) => card.value === tab.value);
    return acc;
  }, {} as Record<string, IProductCard[]>);

  return (
    <TabShadcn defaultValue={activeTab} onValueChange={(value) => setActiveTab(value)}>
      <div className="flex w-full overflow-x-auto whitespace-nowrap">
        <TabsList className="mx-auto">
          {tabs.map(({ label, value }) => (
            <TabsTrigger value={value} key={value} className="min-w-custom-h-sm">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map(({ value }) => {
        const cardsForTab = groupedCards[value] || [];
        const visibleCount = visibleCounts[value] || ITEMS_PER_PAGE;
        const isMore = visibleCount < cardsForTab.length;

        return (
          <TabsContent value={value} key={value}>
            <div className="w-full grid grid-cols-1 justify-items-center gap-4 @bp-890:grid-cols-2 @bp-1200:grid-cols-3 @bp-1280:justify-items-start">
              {cardsForTab.slice(0, visibleCount).map((card, index) => (
                <ProductCard
                  key={index}
                  img={card.img}
                  imgAlt={card.imgAlt}
                  variant={card.variant}
                  title={card.title}
                  brand={card.brand}
                  rating={card.rating}
                  price={card.price}
                  reviewLabel={card.reviewLabel}
                />
              ))}
            </div>
            {cardsForTab.length > ITEMS_PER_PAGE && (
              <div className="flex justify-center mt-space-4xl">
                <Button
                  label="View More"
                  icon={<ChevronIcon fill="white" />}
                  size="sm"
                  className="flex flex-row-reverse !leading-7"
                  onClick={handleViewMore}
                  disabled={!isMore}
                />
              </div>
            )}
          </TabsContent>
        );
      })}
    </TabShadcn>
  );
};
