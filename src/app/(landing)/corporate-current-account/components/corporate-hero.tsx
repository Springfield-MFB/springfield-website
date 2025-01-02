import Image from "next/image";

import { motion } from "framer-motion";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import BoxReveal from "@/components/ui/box-reveal";

import SavingAccountImage from "@/public/images/corporate-hero.jpeg";

export const Hero = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-16 flex flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left">
            <BoxReveal boxColor={"#F0B929"} duration={1}>
              <Heading className="lg:w-[90%]">
                Springfield{" "}
                <span className="text-brand-primary">Corporate Current</span>{" "}
                Account
              </Heading>
            </BoxReveal>

            <BoxReveal boxColor={"#F0B929"} duration={1.3}>
              <p className="my-6 lg:w-[90%] text-dark-text lg:leading-7 text-sm">
                Springfield’s corporate current account is a product designed to
                satisfy our customer’s dynamic business needs.
              </p>
            </BoxReveal>

            <CustomButton link="/open-account" type="primary">
              Open Account
            </CustomButton>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:basis-[45%]">
            <motion.div
              initial={{
                scale: 1.2, // Start small (centered)
                opacity: 1, // Initially invisible
                x: 150, // Center horizontally
                y: 0, // Center vertically
              }}
              animate={{
                scale: 1, // Full size
                opacity: 1, // Fully visible
                x: 0, // Move to its main X position
                y: 0, // Move to its main Y position
              }}
              viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
              transition={{
                duration: 1.5, // Animation duration
                ease: "easeInOut", // Smooth easing
              }}
            >
              <Image
                src={SavingAccountImage}
                alt="photo Saving Account"
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
