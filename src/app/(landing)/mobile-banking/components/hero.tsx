import Image from "next/image";
import { motion } from "framer-motion";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import BoxReveal from "@/components/ui/box-reveal";

import LoanHeroImage from "@/public/images/mobile-banking-heroImg.png";

export default function MobileBankingHero() {
  return (
    <div className="pt-16 md:pt-0 bg-[#2B2B2B] border-white lg:h-[70vh] flex justify-center items-center relative">
      <MaxWidthWrapper className="z-20">
        <div className=" flex flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left h-full">
            <BoxReveal boxColor={"#F0B929"} duration={1}>
              <Heading className=" mx-auto w-[100%] md:mx-0 text-white">
                Get
                <p>
                  your <span className="text-brand-primary">Springfield</span>{" "}
                </p>
                Mobile app
              </Heading>
            </BoxReveal>
            <BoxReveal boxColor={"#F0B929"} duration={1.2}>
              <p className="lg:w-[70%] text-white mt-3 lg:leading-7 text-xs">
                Embark on an exciting journey to unlock limitless opportunities
                for financial growth and success.
              </p>
            </BoxReveal>

            <div className="flex  items-center gap-3 mt-6 z-20">
              <div className="rounded-[45px] bg-[#565555] px-8 md:px-10 py-3 flex space-x-2 items-center ">
                <IoLogoGooglePlaystore className="text-white size-6" />
                <div className="flex flex-col text-white">
                  <p className="text-[8px]  font-light">GET IT ON</p>
                  <p className="text-xs font-semibold">Google Play</p>
                </div>
              </div>

              <div className="rounded-[45px] bg-[#565555] px-8 md:px-10 py-3 flex space-x-2 items-center ">
                <FaApple className="text-white size-6" />
                <div className="flex flex-col text-white">
                  <p className="text-[8px]  font-light">Download on the</p>
                  <p className="text-xs font-semibold">App Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:basis-[45%] relative lg:h-[70vh]">
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }} // Animates both on scroll up and down
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src={LoanHeroImage}
                alt="photo Saving Account"
                width={1000}
                height={1000}
                className="object-cover  w-full lg:h-[70vh]"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
