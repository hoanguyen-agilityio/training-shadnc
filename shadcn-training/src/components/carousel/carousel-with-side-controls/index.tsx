// Components
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from '@/components/icons';
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
  const socialNetwork = [
    {
      icon: <FacebookIcon width="18px" height="18px" />,
    },
    {
      icon: <TwitterIcon width="18px" height="18px" />,
    },
    {
      icon: <PinterestIcon width="18px" height="18px" />,
    },
    {
      icon: <InstagramIcon width="18px" height="18px" />,
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <Carousel opts={{ align: 'start' }} className="w-full max-w-7xl">
        <CarouselContent>
          {OurAwesomeTeam.map((member, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/3">
              <div className="p-4">
                <Card className="w-full gap-4 group overflow-hidden relative">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-auto object-cover"
                    />

                    {/* black overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* social icons overlay */}
                    <div
                      className="absolute inset-0 flex justify-center items-center gap-2
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {socialNetwork.map((social, idx) => (
                        <div
                          key={idx}
                          className="p-3 hover:bg-green-50 rounded-full cursor-pointer transition-colors duration-300"
                        >
                          {social.icon}
                        </div>
                      ))}
                    </div>
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
