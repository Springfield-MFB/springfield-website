import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Section } from "@/components/page-section";

import { CSRSection1 as section } from "@/config/index";

const SectionOne = () => {
  return (
    <div className="my-8">
      <MaxWidthWrapper>
        <Section {...section} />
      </MaxWidthWrapper>
    </div>
  );
};

export default SectionOne;
