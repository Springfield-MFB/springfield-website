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
import { SERVICES } from "@/config";

export function PotentialCarousel() {
  return (
    <Carousel className="w-full">
      <div className="flex gap-4 items-center mt-12">
        <CarouselPrevious className="top-0" />
        <CarouselNext className="top-0" />
      </div>
      <CarouselContent className="-ml-1">
        {SERVICES.map((service, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-none p-0 border-none shadow-none">
                <CardContent className="flex aspect-square w-full flex-col ">
                  <div className="w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="mt-4">
                    <h1 className="text-dark-primary font-bold text-xl">
                      {service.title}
                    </h1>
                    <p className="text-[#54606E] text-xs font-light mt-2 leading-[20px]">
                      Discover tailored corporate banking solutions to manage
                      your business finances, including treasury management and
                      foreign exchange services.
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
