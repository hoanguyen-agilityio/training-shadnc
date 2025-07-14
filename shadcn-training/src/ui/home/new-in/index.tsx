import { Button } from '@/components';
import { ChevronIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NEW_IN_CARD } from '@/mocks';

export const NewIn = () => (
  <section aria-label="new in" className="bg-theme-gray-200 mt-[53px] dark:bg-zinc-800">
    <div className="flex flex-col max-w-[1320px] mx-auto justify-between min-[1140px]:flex-row py-[50px] px-10">
      <div className="flex flex-col justify-center w-full min-[1140px]:w-[414px] items-center min-[1140px]:items-start text-center min-[1140px]:text-left">
        <h2 className="text-[46px] dark:text-white">New In</h2>
        <p className="text-lg dark:text-slate-400">
          Shop the latest fashion trends from the top luxury designers.
        </p>
        <Button
          icon={<ChevronIcon />}
          label="Shop New In"
          size="sm"
          disabled
          className="w-[210px] mt-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[30px] min-[1140px]:justify-start mt-5 min-[1140px]:mt-0 min-[730px]:flex-row min-[730px]:items-start">
        {NEW_IN_CARD.map(({ img, imgAlt, title }, index) => (
          <Card key={index} className="bg-white w-[230px]">
            <CardHeader>
              <img src={img} alt={imgAlt} className="w-full h-full max-w-[190px] max-h-[260px]" />
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
