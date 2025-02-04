import { ESGSections as sections } from "@/config/index";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import { Section } from "@/components/page-section";

export const ESGSections = () => {
  return (
    <div className="my-8">
      <MaxWidthWrapper>
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </MaxWidthWrapper>
    </div>
  );
};
