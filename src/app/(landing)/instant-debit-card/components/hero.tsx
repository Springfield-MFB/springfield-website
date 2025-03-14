import Image from "next/image";
import { motion } from "framer-motion";

import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import BoxReveal from "@/components/ui/box-reveal";

import DebitCardHeroImage from "@/public/images/debit-card.png";

export default function DebitCardHero() {
  return (
    <div className="py-24 bg-[#2B2B2B] flex justify-center items-center relative">
      <MaxWidthWrapper className="z-20">
        <div className=" flex flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left h-full">
            <BoxReveal boxColor={"#F0B929"} duration={1}>
              <Heading className=" mx-auto w-[100%] md:mx-0 text-white">
                Explore Our <span className="text-brand-primary">Debit</span>{" "}
                <span className="text-brand-primary">Card</span> Solution
              </Heading>
            </BoxReveal>
            <BoxReveal boxColor={"#F0B929"} duration={1.2}>
              <p className="lg:w-[90%] text-white mt-3 lg:leading-7 text-xs">
                our debit cards empower you to manage your money with ease.
                Whether you're shopping online, dining out, or traveling abroad,
                our debit card is your reliable companion for a hassle-free
                experience.
              </p>
            </BoxReveal>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:basis-[45%] relative">
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }} // Animates both on scroll up and down
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src={DebitCardHeroImage}
                alt="photo Saving Account"
                width={1000}
                height={1000}
                className="object-cover  w-full h-full"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
