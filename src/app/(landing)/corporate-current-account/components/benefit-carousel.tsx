import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BENEFITS } from "@/config";

export function BenefitCarousel() {
  return (
    <Carousel className="w-full">
      <div className="flex gap-4 items-center mt-12">
        <CarouselPrevious className="top-0" />
        <CarouselNext className="top-0" />
      </div>
      <CarouselContent className="-ml-1">
        {BENEFITS.map((benefit, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-[32%]"
          >
            <div className="p-1">
              <Card className="bg-none p-0 border-none shadow-none">
                <CardContent className="flex aspect-square w-full flex-col ">
                  <div className="w-full">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="mt-4">
                    <h1 className="text-dark-primary font-bold text-xl">
                      {benefit.title}
                    </h1>
                    <p className="text-[#54606E] text-xs font-light mt-2 leading-[20px]">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
