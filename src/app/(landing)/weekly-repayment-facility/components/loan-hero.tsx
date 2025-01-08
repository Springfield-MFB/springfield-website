import Image from "next/image";

import { motion } from "framer-motion";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import BoxReveal from "@/components/ui/box-reveal";

import LoanHeroImage from "@/public/images/weekly-hero.jpeg";

import { WEEKLY_REPAYMENT_LOAN_PROPERTIES } from "@/config";
import { useRouter } from "next/navigation";

export const LoanHero = () => {
  const router = useRouter();
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <div className=" flex pb-16 flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left">
            <BoxReveal boxColor={"#F0B929"} duration={1}>
              <Heading className=" mx-auto w-[80%] md:mx-0">
                Springfield{" "}
                <span className="text-brand-primary">Weekly Repayment</span>{" "}
                Facility (SWR)
              </Heading>
            </BoxReveal>
            <BoxReveal boxColor={"#F0B929"} duration={1.2}>
              <p className="lg:w-[90%] text-dark-text lg:leading-7 text-sm mb-6">
                This is a weekly repayment loan for small businesses.
              </p>
            </BoxReveal>

            {/* <p className="text-dark-text mb-6 text-sm">
              Equity Contribution: 10%
            </p> */}
            <CustomButton link="/loan/apply" type="primary">
              Apply Now
            </CustomButton>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:basis-[45%]">
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src={LoanHeroImage}
                alt="photo Saving Account"
                width={1000}
                height={1000}
                className="object-cover  w-full h-full"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-full p-8 lg:p-14 grid lg:grid-cols-4 gap-8 bg-dark-primary rounded-[32px]">
            {WEEKLY_REPAYMENT_LOAN_PROPERTIES.map((item, i) => (
              <div key={i} className="flex space-x-3">
                <Image
                  src={item.icon}
                  alt="photo Loan Hero"
                  width={1000}
                  height={1000}
                  className="object-cover size-[32px]"
                />

                <div className="flex flex-col space-y-2">
                  <h1 className="text-white font-bold text-sm">{item.title}</h1>
                  <p className="text-xs text-[#CACACA] leading-5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};
