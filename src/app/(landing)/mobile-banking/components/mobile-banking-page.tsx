import Image from "next/image";
import MobileBankingHero from "./hero";
import FunctionalityApp from "./functionality";

export default function MobileBankingPage() {
  return (
    <div className="relative">
      <MobileBankingHero />

      {/* Optional: Background grid effect */}
      <div className="absolute hidden lg:block top-[25%] z-10 opacity-20  left-0 right-0 w-full ">
        <Image
          src="/images/building.png"
          alt="photo Building"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      <FunctionalityApp />
    </div>
  );
}
