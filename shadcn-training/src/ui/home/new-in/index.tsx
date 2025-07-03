import { Button } from '@/components';
import { ArrowIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NEW_IN_CARD } from '@/mocks';

export const NewIn = () => (
  <section className="bg-[#F0F0F0] mt-[53px]">
    <div className="flex flex-col max-w-[1320px] mx-auto justify-between min-[1140px]:flex-row py-[50px] px-10">
      <div className="flex flex-col justify-center w-full min-[1140px]:w-[414px] items-center min-[1140px]:items-start text-center min-[1140px]:text-left">
        <span className="text-[46px]">New In</span>
        <span className="text-lg">
          Shop the latest fashion trends from the top luxury designers.
        </span>
        <Button
          icon={<ArrowIcon fill="white" />}
          label="Shop New In"
          size="sm"
          onClick={() => {}}
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
              <CardTitle className="text-base">{title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
