import { PageBoard } from "@/components/page-board";
import { ESGSections } from "./esg-sections";
import { OurCommitment } from "./our-commitment";

export const EsgPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <PageBoard
        containerClassName="lg:w-[90%]"
        className="h-[80vh] lg:h-[90vh]"
        backgroundImage="url('/images/esg-page-bg.png')"
        desc="At Springfield Microfinance Bank we are committed to driving sustainable growth through the integration of Environmental, Social, and Governance (ESG) principles into our operations. We believe that aligning our business goals with sustainability and ethical practices not only creates long-term value for our stakeholders but also contributes to a better world for future generations."
        heading="Environmental, Social, and Governance (ESG) at Springfield Microfinance Bank Limited"
      />

      <ESGSections />

      <OurCommitment />
    </div>
  );
};
