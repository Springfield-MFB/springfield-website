import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageBoard } from "@/components/page-board";
import { WhistleBlowingForm } from "./whistle-blowing-form";

export const WhistleBlowingPage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <PageBoard
        backgroundImage="url('/images/help-bg.jpeg')"
        heading="Whistleblowing"
        desc="Learn about our whistleblowing policy and report any form of illegal activity, wrong doing or criminal offence."
      />

      <MaxWidthWrapper className="py-16 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
          {/* INFO */}
          <div className="col-span-1">
            <div className="lg:w-[80%] px-4 lg:px-0">
              <p className="text-sm text-[#4A4949] leading-7 mt-4">
                Springfield MfB as a dynamic microfinance bank is committed to
                upholding innovative customer services and top notch ethical
                value in the work place, consequently all Employees, Directors,
                Vendors and other Stakeholders are required to comport
                themselves with the utmost honesty and integrity in their
                dealings with the Bank and its stakeholders.
              </p>

              <p className="text-sm text-[#4A4949] leading-7 mt-6">
                The Bank's Whistle-Blowing Policy aims at strengthening its
                corporate governance and risk management architecture whilst
                enhancing value for all stakeholders. Therefore, all
                stakeholders are encouraged to report their concerns about any
                unethical behavior to the Bank for investigation and appropriate
                attention.
              </p>

              <p className="text-sm text-[#4A4949] leading-7 mt-6">
                The Bank recognizes the need for protection of whistle-blowers
                and takes all reasonable steps to protect their identity. The
                Bank also appreciates the importance of utmost confidentiality
                in these situations and has developed various anonymous channels
                for reporting unethical behavior.
              </p>
              <p className="text-sm text-[#4A4949] leading-7 ">
                For this purpose, any report of unethical behavior may be
                communicated through any of the following designated media:
              </p>

              <p className="text-sm text-[#4A4949] leading-7 ">
                Email: ethicsline@springfieldmfb.com
              </p>
              <p className="text-sm text-[#4A4949] leading-7">
                Mobile Number : +234 803 449 2091
              </p>
            </div>
          </div>

          {/* WHISTLE BLOWING  FORM*/}
          <div className="col-span-1">
            <WhistleBlowingForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
