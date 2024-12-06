import * as React from "react";
import Image from "next/image";

import { TESTIMONIALS } from "@/config";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Placeholder from "@/public/svg/placeholder.svg";

export function TestimonialCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {TESTIMONIALS.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="  pl-1 md:basis-1/2 lg:basis-[45%]"
          >
            <div className="p-1">
              <Card className="relative overflow-hidden bg-none p-0  border-[0.9px] rounded-[14px] border-[#D6D6D6] bg-[#F2F2F2] shadow-none">
                <CardContent className="  flex aspect-auto px-8 py-8 mb-8 w-full flex-col ">
                  <p className="text-black text-sm font-normal mt-2 leading-[30px]">
                    {testimonial.testimony}
                  </p>

                  <div className="flex items-center gap-x-4 mt-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={1000}
                      height={1000}
                      className="rounded-full  size-[50px] border-[1.2px] border-[#3A3A3A]"
                    />

                    <div>
                      <h1 className="text-black font-bold text-base">
                        {testimonial.name}
                      </h1>
                      <p className="text-[#54606E] text-xs font-light leading-[20px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <Image
                    src={Placeholder}
                    alt="Testimonial"
                    width={1000}
                    height={1000}
                    className="absolute right-0 -bottom-28  w-[180px] h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-4 items-center mt-16">
        <CarouselPrevious className="top-0" />
        <CarouselNext className="top-0" />
      </div>
    </Carousel>
  );
}
