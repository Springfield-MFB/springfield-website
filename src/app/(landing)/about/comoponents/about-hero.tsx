import Image from "next/image";

import { motion } from "framer-motion";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import AboutHeroImage from "@/public/images/about-hero.png";
import BoxReveal from "@/components/ui/box-reveal";

export const AboutHero = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col px-4 items-center">
        <BoxReveal boxColor={"#F0B929"} duration={0.8}>
          <Heading className="text-center w-[90%] lg:w-[70%] mx-auto">
            Guiding you toward{" "}
            <span className="text-brand-primary">financial</span> achievement
          </Heading>
        </BoxReveal>

        <BoxReveal boxColor={"#F0B929"} duration={1}>
          <p className="text-center text-[#383838] text-[13px] lg:w-[70%] mx-auto mt-4 mb-6 leading-6">
            Springfield Micro Finance Bank Limited (SMFB), situated in Igando,
            Lagos State, is a licensed Microfinance Bank (MFB) by the Central
            Bank of Nigeria (CBN) and (NDIC). SMFB is dedicated to providing
            cutting-edge micro finance services/products to underserved
            communities and MSME through technological innovation.
          </p>
        </BoxReveal>

        <CustomButton link="#aim" type="ghost">
          Learn More
        </CustomButton>

        <div className="lg:w-[90%] mt-8">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={AboutHeroImage}
              alt="photo About Hero"
              width={1000}
              height={1000}
              className="object-cover w-[100%] h-full"
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
