import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { BenefitCarousel } from "./benefit-carousel";
import BoxReveal from "@/components/ui/box-reveal";

export const SavvingsBenefit = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <BoxReveal boxColor={"#F0B929"} duration={1.2}>
        <Heading className="lg:w-[60%]">
          Benefits of <span className="text-brand-primary">Saving </span>{" "}
          Account
        </Heading>
      </BoxReveal>

      <div className="full">
        <BenefitCarousel />
      </div>
    </MaxWidthWrapper>
  );
};
