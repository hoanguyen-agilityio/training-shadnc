// Libs
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Components
import { Card, CardContent } from '@/components/ui/card';
import {
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as CarouselShadcn,
} from '@/components/ui/carousel';
import { ArrowIcon } from '@/components/icons';
import { Avatar, Evaluate } from '@/components';

// Mocks
import { clientReviews } from '@/mocks';

export const CarouselWithTopControls = () => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-[50px]">
        <h3 className="text-[46px] dark:text-white">Client Testimonial</h3>
        <div className="flex gap-2">
          <Button
            aria-label="previous"
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 bg-white text-black hover:bg-[#6C9D30] hover:text-white cursor-pointer"
            onClick={scrollPrev}
          >
            <ArrowIcon />
          </Button>
          <Button
            aria-label="next"
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 bg-white text-black hover:bg-[#6C9D30] hover:text-white cursor-pointer"
            onClick={scrollNext}
          >
            <ArrowIcon className="rotate-180" />
          </Button>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <CarouselShadcn
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {clientReviews.map((clientReview) => (
            <CarouselItem key={clientReview.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-0 shadow-none p-0 bg-white rounded-lg">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-[26px] w-9 text-green-300 fill-current" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#4D4D4D] dark:text-slate-400 font-normal text-sm	mb-6 flex-grow">
                    {clientReview.text}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar
                        className="h-14 w-14"
                        src={clientReview.avatar}
                        alt={clientReview.alt}
                        avatarFallback={clientReview.avatarFallback}
                      ></Avatar>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white text-sm">
                          {clientReview.name}
                        </h4>
                        <p className="text-charcoalGray-60 dark:text-[#DEDEDE] text-xs font-normal">
                          {clientReview.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <Evaluate value={clientReview.rating} />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </CarouselShadcn>
    </div>
  );
};
