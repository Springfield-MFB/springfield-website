import Image from "next/image";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Heading } from "@/components/heading";

import AimImage from "@/public/images/aim-image.png";
import { cn } from "@/lib/utils";
import BoxReveal from "@/components/ui/box-reveal";

export const DocumentRequired = () => {
  return (
    <MaxWidthWrapper>
      <div className=" px-4 flex flex-col-reverse gap-y-8 lg:flex-row w-full items-center">
        <div className="flex-1">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={AimImage}
              alt="photo About Hero"
              width={1000}
              height={1000}
              className="object-cover lg:w-[80%] h-full"
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <BoxReveal boxColor={"#F0B929"} duration={1}>
            <Heading className="text-white text-center lg:text-left">
              Document Required
            </Heading>
          </BoxReveal>

          <BoxReveal boxColor={"#F0B929"} duration={1.3}>
            <p className="mt-4 text-center lg:text-left text-white text-sm lg:w-[90%] leading-[24px]">
              To ensure a smooth process, please submit the following documents
              and ensure all documents are complete, up-to-date, and legible.
            </p>
          </BoxReveal>

          <div className="mt-6 flex flex-col space-y-4">
            {[
              "Valid ID card  (Driver's License, International Passport, National Identity Card or Vote's Card)",
              "2 passport photographs",
              "Bank Verification Number (BVN)",
              "Recent Utility Bill dated within the last three month.",
              "TIN Certificate",
              " Board Resolution Letter",
              "Certificate of Incorporation, CO2,CO7 and MEMART",
            ].map((item, i) => (
              <div key={i} className="flex gap-x-2 text-white lg:w-[85%]">
                <IoMdCheckmarkCircleOutline
                  className={cn(
                    "size-[32px] text-brand-primary",
                    i === 0 && "size-[44px]"
                  )}
                />
                <BoxReveal boxColor={"#F0B929"} duration={1}>
                  <p className="text-sm font-normal  leading-[24px]">{item}</p>
                </BoxReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
