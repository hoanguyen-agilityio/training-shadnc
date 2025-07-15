import { Button } from '@/components';
import { ChevronIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NEW_IN_CARD } from '@/mocks';

export const NewIn = () => (
  <section aria-label="new in" className="bg-theme-gray-200 mt-space-5xl dark:bg-zinc-800">
    <div className="flex flex-col max-w-container mx-auto justify-between @bp-1140/main:flex-row py-space-4xl px-10">
      <div className="flex flex-col justify-center w-full @bp-1140/main:w-custom-6xl-plus items-center @bp-1140/main:items-start text-center @bp-1140/main:text-left">
        <h2 className="text-fs-2xl dark:text-white">New In</h2>
        <p className="text-lg dark:text-slate-400">
          Shop the latest fashion trends from the top luxury designers.
        </p>
        <Button
          icon={<ChevronIcon />}
          label="Shop New In"
          size="sm"
          disabled
          className="w-custom-xl mt-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[30px] @bp-1140/main:justify-start mt-5 @bp-1140/main:mt-0 @bp-730/main:flex-row @bp-730/main:items-start">
        {NEW_IN_CARD.map(({ img, imgAlt, title }, index) => (
          <Card key={index} className="bg-white w-custom-2xl">
            <CardHeader>
              <img
                src={img}
                alt={imgAlt}
                className="w-full h-full max-w-custom-md-plus max-h-custom-h-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base dark:text-white">{title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
