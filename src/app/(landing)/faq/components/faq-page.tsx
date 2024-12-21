import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageBoard } from "@/components/page-board";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Dropdown from "./drop-down";

export const FaqPage = () => {
  return (
    <div>
      <PageBoard
        backgroundImage="url('/images/help-bg.jpeg')"
        heading="Frequently Asked Question"
        desc="By leveraging the power of Quick School, your school can experience transformative growth and improvement. "
      />

      <MaxWidthWrapper className="py-16 max-w-5xl">
        <Dropdown />
      </MaxWidthWrapper>
    </div>
  );
};
