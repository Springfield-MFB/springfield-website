import Image from "next/image";
import { CareerHero } from "./career-hero";
import { CareerAim } from "./career-aim";
import { CoreValues } from "../../about/comoponents/core-values";
import { Openings } from "./openings";

function CareerPage() {
  return (
    <>
      <div className="relative ">
        {/* Hero div */}
        <CareerHero />

        <div className="bg-[#FFFAEE] absolute inset-0 -z-20" />

        {/* Optional: Background grid effect */}
        <div className="absolute top-[30%] -z-10 opacity-100  left-0 right-0 w-full ">
          <Image
            src="/images/building.png"
            alt="Building"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Aim */}
      <CareerAim />

      {/* Core Values */}
      <CoreValues />

      {/* Openings */}
      <Openings />
    </>
  );
}

export default CareerPage;
