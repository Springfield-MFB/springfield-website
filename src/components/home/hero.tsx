import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion
import { CustomButton } from "../custom-button";
import Image from "next/image";

import HeroImage from "@/public/images/home-hero.png";
import HeroImage2 from "@/public/images/hero-image2.png";
import HeroImage3 from "@/public/images/hero-image3.png";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import BoxReveal from "../ui/box-reveal";

export const Hero = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroContent = [
    {
      title: "Your Spring to ",
      highlight: "Success",
      description:
        "Springfield Micro Finance Bank Limited (SMFB), situated in Igando, Lagos State, is a licensed Microfinance Bank dedicated to providing cutting-edge microfinance services/products to underserved communities and MSME through technological innovation.",
      image: HeroImage,
    },
    {
      title: "Guiding you toward ",
      highlight: "financial achievement",
      description:
        "Discover the power to unlock your full potential through our automated and secure savings, strategic investment opportunities, agency banking solutions, and a wide array of value-added services tailored to meet your financial goals and beyond.",
      image: HeroImage2,
    },
    {
      title: "Steering you towards",
      highlight: "financial success",
      description:
        "We are dedicated to steering you towards financial success. Our team of experts provides personalized strategies and insights, ensuring that every decision you make is informed and aligned with your long-term goals.",
      image: HeroImage3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroContent]);

  return (
    <div className="relative h-[90vh] lg:h-[40vh]">
      {heroContent.map((item, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute inset-0 mx-auto flex flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-12",
            index === currentIndex
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          )}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={index === currentIndex ? { opacity: 1, scale: 1 } : {}}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* LEFT CONTENT */}
          <div className="basis-2/3 md:text-left">
            <BoxReveal
              key={`${index}-title`}
              boxColor={"#F0B929"}
              duration={0.8}
            >
              <h1 className="text-4xl md:text-6xl leading-[45px] lg:leading-[70px] font-millik">
                {item.title}{" "}
                <span className="text-brand-primary">{item.highlight}</span>
              </h1>
            </BoxReveal>

            <BoxReveal
              key={`${index}-description`}
              boxColor={"#F0B929"}
              duration={0.8}
            >
              <p className="mt-4 lg:leading-6 text-[#383838] text-sm lg:text-sm">
                {item.description}
              </p>
            </BoxReveal>

            {/* Buttons */}

            <div className="mt-8 flex  flex-col md:flex-row gap-4">
              <CustomButton
                className=""
                onClick={() => router.push("/micro-loan/apply")}
                type="primary"
              >
                Apply For Loan
              </CustomButton>
              <CustomButton className="" type="ghost">
                Open An Account
              </CustomButton>
            </div>
          </div>

          <div className="basis-1/2">
            {/* Grid Effect */}
            <motion.div
              className="relative flex lg:justify-end"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={index === currentIndex ? { scale: 1, opacity: 1 } : {}}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="col-span-3 w-[95%] row-span-3">
                <Image
                  src={item.image} // Replace with actual path
                  alt="Building"
                  width={1000}
                  height={1000}
                  className="h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
