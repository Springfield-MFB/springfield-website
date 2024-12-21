import Image from "next/image";
import { CareerAim } from "./career-aim";
import { CoreValues } from "../../about/comoponents/core-values";
import { Openings } from "./openings";
import { CareerHero } from "./career-hero";

function CareerPage() {
  return (
    <>
      <div className="relative py-16">
        {/* Hero div */}
        <CareerHero />

        <div className="bg-[#2B2B2B] absolute inset-0 -z-20" />
      </div>

      {/* Openings */}
      <Openings />
    </>
  );
}

export default CareerPage;
