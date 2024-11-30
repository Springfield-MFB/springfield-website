"use client";

import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

const Page = () => {
  return (
    <>
      <section>
        <MaxWidthWrapper>
          <div className="">
            <Heading>
              <span>Guiding you toward</span>{" "}
              <span className="text-brand-primary">financial</span>{" "}
              <span>achievement</span>
            </Heading>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};

export default Page;
