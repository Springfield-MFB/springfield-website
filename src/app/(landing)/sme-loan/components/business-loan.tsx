import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { BusinessLoanForm } from "./business-loan-form";

export const BusinessLoanPage = () => {
  return (
    <div className="py-16 bg-[#FAFAFA]">
      <MaxWidthWrapper>
        <Heading className="text-left lg:text-center">
          Apply For Business Loan
        </Heading>
        <p className="text-xs text-[#606060] text-left lg:text-center  mt-3 lg:w-[70%] lg:mx-auto">
          Apply For Business Loan Boost your business with quick, flexible loans
          tailored to your needs.
        </p>

        <BusinessLoanForm />
      </MaxWidthWrapper>
    </div>
  );
};
