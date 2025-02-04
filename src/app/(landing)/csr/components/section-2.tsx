import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Section } from "@/components/page-section";

import { CSRSection2 as section } from "@/config/index";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const SectionTwo = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
        <Section {...section} />

        <div className="md:w-[50%] font-satoshi text-xs text-[#494848] leading-5">
          <Heading className="sm:text-[44px] lg:leading-[60px]">
            Join Us in Making a Difference
          </Heading>
          <p className="mb-2">
            Together, we can create lasting change. Partner with us or
            participate in our initiatives to help build stronger, more
            prosperous communities.
          </p>
          <p>
            For inquiries or collaboration opportunities, please contact us at:
          </p>

          <div className="flex flex-col space-y-2 mt-6">
            <div className="flex gap-3 items-center">
              <div className="flex size-9 rounded-full justify-center items-center border border-brand-primary">
                <MdEmail className="text-brand-primary size-[20px]" />
              </div>

              <p className="text-[#2B2B2B] text-[13px] font-bold">
                csr@springfieldmfb.com
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex size-9 rounded-full justify-center items-center border border-brand-primary">
                <IoIosCall className="text-brand-primary size-[20px]" />
              </div>

              <p className="text-[#2B2B2B] text-[13px] font-bold">
                +234 9015040918
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SectionTwo;
