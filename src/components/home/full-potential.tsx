import React, { useState } from "react";
import { Heading } from "../heading";
import { SERVICES } from "@/config";

export const FullPotential = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <Heading className=" lg:w-[70%]">
        Unleash the <span className="text-brand-primary">Full Potential</span>{" "}
        of Your Business
      </Heading>
    </div>
  );
};
