import Image from "next/image";
import { AboutHero } from "./about-hero";
import { Aim } from "./aim";
import { CoreValues } from "./core-values";

export const AboutPage = () => {
  return (
    <div className="relative py-16">
      {/* Hero section */}
      <AboutHero />

      {/* Optional: Background grid effect */}
      <div className="absolute top-[10%] opacity-70  -z-10 left-0 right-0 w-full ">
        <Image
          src="/images/building.png"
          alt="Building"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Our AIM */}
      <Aim />

      {/* Core Values */}
      <CoreValues />
    </div>
  );
};
