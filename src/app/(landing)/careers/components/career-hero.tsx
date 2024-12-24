import Image from "next/image";

import { motion } from "framer-motion";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import CareerHeroImage from "@/public/images/career-hero-img.png";
import BoxReveal from "@/components/ui/box-reveal";

export const CareerHero = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-8 lg:py-16">
        <div className=" flex pb-16 flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left">
            <BoxReveal boxColor={"#F0B929"} duration={1}>
              <Heading className="w-[90%] lg:w-full text-white">
                Be on the Frontier of Banking
              </Heading>
            </BoxReveal>
            <BoxReveal boxColor={"#F0B929"} duration={1.4}>
              <p className="lg:w-[90%] text-white lg:leading-7 text-sm">
                Joining Springfield Microfinance Bank means joining a family
                with ambition. Ambition that pave the way for many years.
              </p>
            </BoxReveal>

            <div className="flex space-y-4 lg:space-y-0 lg:space-x-4 mt-4 flex-col lg:flex-row ">
              <CustomButton
                type="ghost"
                className="bg-[#373737] text-white w-full"
              >
                Search our jobs
              </CustomButton>
              <CustomButton type="primary" className="bg-[#191919] w-full">
                Join our talent network
              </CustomButton>
            </div>
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
                src={CareerHeroImage}
                alt="Saving Account"
                width={1000}
                height={1000}
                className="object-cover  w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
