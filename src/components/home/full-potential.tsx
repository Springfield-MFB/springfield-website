import React, { useState } from "react";
import { Heading } from "../heading";
import { SERVICES } from "@/config";
import { PotentialCarousel } from "./full-potential-carousel";

export const FullPotential = () => {
  return (
    <div className="w-full pt-16">
      <Heading className=" lg:w-[70%]">
        Unleash the <span className="text-brand-primary">Full Potential</span>{" "}
        of Your Business
      </Heading>

      <div className="full">
        <PotentialCarousel />
      </div>
    </div>
  );
};
