"use client";

import { Heading } from "@/components/heading";
import Feat from "@/components/home/feat";
import { FullPotential } from "@/components/home/full-potential";
import { Hero } from "@/components/home/hero";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

const Page = () => {
  return (
    <>
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
      <Feat />

      <section className="relative ">
        <div className="absolute inset-x-0 -inset-y-16 bg-[#F9F9F9] -z-20" />
        <MaxWidthWrapper>
          <FullPotential />
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};

export default Page;
