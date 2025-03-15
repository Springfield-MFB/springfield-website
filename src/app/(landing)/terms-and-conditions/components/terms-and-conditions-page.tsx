import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageBoard } from "@/components/page-board";
import Introduction from "./introduction";
import { AccountRegistration } from "./account-registration";
import { LoansAndRepayments } from "./loans-and-repayments";
import { TransactionsAndTransfers } from "./transactions-and-transfers";
import { ProhibitedActivities } from "./prohibited-activities";
import { SecurityAndDataPrivacy } from "./security-and-data-privacy";
import { DisputeResolutionAndTermination } from "./dispute-resolution-and-termination";

export const TermsAndConditionsPage = () => {
  return (
    <div className="">
      <PageBoard
        heading="Terms and Conditions"
        headingSize="md:text-5xl lg:leading-[50px]"
        backgroundImage="url('/images/terms-img.jpg')"
        desc="The guidelines that define the rights, responsibilities, and usage policies for our services. By using our platform, you agree to these terms. Read them to understand your rights and obligations."
      />

      <MaxWidthWrapper className="my-12">
        <div className="space-y-8">
          <Introduction />
          <AccountRegistration />
          <LoansAndRepayments />
          <TransactionsAndTransfers />
          <ProhibitedActivities />
          <SecurityAndDataPrivacy />
          <DisputeResolutionAndTermination />

          <div className="text-xs lg:text-sm space-y-2">
            <p>
              By using Springfield Microfinance Bank’s services, you acknowledge
              that you have read and agreed to these terms. If you do not agree,
              please discontinue use immediately.
            </p>

            <p>
              For inquiries, contact{" "}
              <strong>
                Springfield Microfinance Bank Customer Support:
                info@springfieldmfb.com
              </strong>
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
