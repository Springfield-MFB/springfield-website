import React, { useState } from "react";
import { Heading } from "../heading";
import { SERVICES } from "@/config";
import { PotentialCarousel } from "./full-potential-carousel";
import BoxReveal from "../ui/box-reveal";

export const FullPotential = () => {
  return (
    <div className="w-full pt-16">
      <BoxReveal boxColor={"#F0B929"} duration={1.2}>
        <Heading className=" lg:w-[70%]">
          Unleash the <span className="text-brand-primary">Full Potential</span>{" "}
          of Your Business
        </Heading>
      </BoxReveal>

      <div className="full">
        <PotentialCarousel />
      </div>
    </div>
  );
};
