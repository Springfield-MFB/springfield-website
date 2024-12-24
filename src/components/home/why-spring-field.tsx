import Image from "next/image";

import { motion } from "framer-motion";

import Why from "@/public/images/why.png";
import { WHY_CHOOSE_SPRINGFIELD } from "@/config";
import { Heading } from "../heading";
import BoxReveal from "../ui/box-reveal";

export const WhySpringfield = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-x-20 items-stretch">
      <div className="col-span-1 h-full">
        <BoxReveal boxColor={"#F0B929"} duration={1}>
          <Heading className="text-white lg:leading-[90px]">
            Why Choose <span className="text-brand-primary">Springfield?</span>
          </Heading>
        </BoxReveal>

        <div className="w-full mt-10">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={Why}
              alt="photo Why Springfield"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-12 lg:mt-0 h-full">
        {WHY_CHOOSE_SPRINGFIELD.map((item, index) => (
          <div
            key={index}
            className="bg-dark-secondary w-full rounded-[12px] p-4 md:p-8 flex gap-x-4 items-center"
          >
            <div className="size-[64px]">
              <Image
                src={item.image}
                alt="photo Why Springfield"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-balance font-bold text-white">{item.name}</h1>
              <p className="text-[10px] md:text-xs font-light leading-[20px] text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
