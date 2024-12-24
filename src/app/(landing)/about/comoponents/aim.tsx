import Image from "next/image";

import { motion } from "framer-motion";

import { BsBullseye } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SmallHeading } from "@/components/heading";

import AimImage from "@/public/images/aim-image.png";
import BoxReveal from "@/components/ui/box-reveal";

export const Aim = () => {
  return (
    <div id="aim" className="py-10 lg:py-36">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 px-4 lg:px-16">
          <div className="basis-1/2">
            {/* Our Mission */}
            <div className="">
              <BoxReveal boxColor={"#F0B929"} duration={1}>
                <div className="flex items-center gap-x-2">
                  <TbTargetArrow className="size-[48px] text-brand-primary" />
                  <SmallHeading>Our Mission</SmallHeading>
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#F0B929"} duration={1}>
                <p className="mt-6 text-xs font-normal text-[#54606E] leading-6">
                  Our mission at SMFB is to leverage advanced technology and a
                  motivated team to deliver innovative microfinance solutions,
                  empowering individuals and communities, and generating high
                  returns for our stakeholders while enhancing financial
                  well-being of our teeming customers.
                </p>
              </BoxReveal>
            </div>

            {/* Our Vision */}
            <div className="mt-12">
              <BoxReveal boxColor={"#F0B929"} duration={1}>
                <div className="flex items-center gap-x-2">
                  <BsBullseye className="size-[48px] text-brand-primary" />
                  <SmallHeading>Our Vision</SmallHeading>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#F0B929"} duration={1}>
                <p className="mt-6 text-xs font-normal text-[#54606E] leading-6">
                  To be a trailblazer in Nigeria's microfinance sector,
                  unlocking the financial potential of individuals and MSMEs
                  through cutting-edge, inclusive, and tailored solutions that
                  drive sustainable economic growth and social impact.
                </p>
              </BoxReveal>
            </div>
          </div>

          <div className="basis-1/2">
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src={AimImage}
                alt="About Hero"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
