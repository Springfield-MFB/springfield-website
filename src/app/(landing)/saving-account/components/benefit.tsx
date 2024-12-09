import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { BenefitCarousel } from "./benefit-carousel";

export const Benefit = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <Heading className="lg:w-[60%]">
        Benefits of <span className="text-brand-primary">Saving </span> Account
      </Heading>

      <div className="full">
        <BenefitCarousel />
      </div>
    </MaxWidthWrapper>
  );
};
