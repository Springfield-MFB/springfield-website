import { PageBoard } from "@/components/page-board";
import SectionOne from "./section-1";
import { OurImpact } from "./our-impact";
import SectionTwo from "./section-2";

export const CsrPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <PageBoard
        containerClassName="lg:w-[80%]"
        className="h-[80vh] lg:h-[90vh]"
        backgroundImage="url('/images/csr-bg.png')"
        desc="At Springfield Microfinance Bank Limited, we view corporate social responsibility as an integral part of our mission. From the very beginning, we have been committed to creating value beyond financial services by uplifting communities, fostering economic empowerment, and promoting sustainable practices."
        heading="Our Commitment to Building a Better Tomorrow"
      />

      <SectionOne />

      <OurImpact />

      <SectionTwo />
    </div>
  );
};
