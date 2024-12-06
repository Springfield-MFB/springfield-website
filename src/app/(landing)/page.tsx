"use client";

import { Heading } from "@/components/heading";
import Feat from "@/components/home/feat";
import { FullPotential } from "@/components/home/full-potential";
import { Hero } from "@/components/home/hero";
import { OurServices } from "@/components/home/our-services";
import { Testimonials } from "@/components/home/testimonials";
import { WhySpringfield } from "@/components/home/why-spring-field";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

const Page = () => {
  return (
    <>
      {/* Hero section */}
      <section className="mt-8 lg:mt-16 relative lg:pb-24 ">
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>

        {/* Optional: Background grid effect */}
        <div className="absolute -bottom-[20%] -z-10 left-0 right-0 w-full ">
          <Image
            src="/images/building.png"
            alt="Building"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Feat section */}
      <Feat />

      {/* Full Potential section */}
      <section className="relative pb-20 md:pb-32  ">
        <div className="absolute inset-x-0 -inset-y-16 bg-[#F9F9F9] -z-20" />
        <MaxWidthWrapper>
          <FullPotential />
        </MaxWidthWrapper>
      </section>

      {/* Why Choose Springfield? Sction */}
      <section className="relative py-12 lg:py-24">
        <div className="absolute inset-x-0 -inset-y-8 bg-dark-primary -z-20" />
        <MaxWidthWrapper>
          <WhySpringfield />
        </MaxWidthWrapper>
      </section>

      {/* Our Products & Services */}
      <section className="relative py-20 lg:py-24">
        <MaxWidthWrapper>
          <OurServices />
        </MaxWidthWrapper>
      </section>

      {/* What are customers saying? */}
      <section className="relative  lg:py-8">
        <MaxWidthWrapper>
          <Testimonials />
        </MaxWidthWrapper>
      </section>
      <section></section>
    </>
  );
};

export default Page;
