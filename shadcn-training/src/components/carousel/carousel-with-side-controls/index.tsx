// Components
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Mocks
import { OurAwesomeTeam } from '@/mocks';

export const CarouselWithSideControls = () => {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {OurAwesomeTeam.map((member, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/3">
              <div className="p-4">
                <Card className="w-full gap-4">
                  <CardHeader className="p-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-auto object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <span className="text-lg font-semibold text-black">{member.name}</span>
                    <p className="text-gray-500 text-sm font-normal">{member.position}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
