import Image from "next/image";
import { GoDotFill } from "react-icons/go";

import { motion } from "framer-motion";

import { Heading, SmallHeading } from "../heading";
import { Button } from "../ui/button";
import DepositImage from "@/public/images/deposit-product.png";
import LoanProductImage from "@/public/images/loan-product.png";
import OtherServicesImage from "@/public/images/other-services.png";
import BoxReveal from "../ui/box-reveal";

export const OurServices = () => {
  return (
    <div className="">
      {/* Heading */}
      <div className="lg:w-[50%]">
        <BoxReveal boxColor={"#F0B929"} duration={1}>
          <Heading className="">Our Products & Services</Heading>
        </BoxReveal>
        <BoxReveal boxColor={"#F0B929"} duration={1.2}>
          <p className="text-black text-xs lg:text-sm font-normal lg:w-[80%] leading-[24px] lg:leading-[30px]">
            Our products and services empower businesses and individuals to
            achieve financial goals with competitive, affordable rates.
          </p>
        </BoxReveal>
      </div>

      {/* Services Cards */}

      {/* Deposit Products */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="mt-12 bg-brand-primary p-6 lg:p-12 rounded-[12px] grid lg:grid-cols-3 gap-x-8">
          <div className="relative lg:col-span-2 lg:w-[90%]">
            <SmallHeading>Deposit Products</SmallHeading>
            <p className="text-xs lg:text-sm text-center lg:text-left  font-normal mt-3 leading-[20px] lg:leading-[25px] ">
              As an individual, you can enjoy a range of financial services,
              including operating a current account, applying for loans to meet
              your needs, and starting a savings plan to secure your future.
            </p>

            <div className="flex gap-6 flex-wrap mt-6">
              {[
                "Springfield Daily Contribution",
                "Springfield Saving Account",
                "Springfield Personal Current Account",
                "Springfield Corporate Current Account",
                "Springfield Target Account",
                "Annual Contribution Account",
                "Fixed Deposit Account",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-1.5">
                  <GoDotFill />
                  <p className="text-xs lg:text-sm font-normal">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" lg:col-span-1 flex justify-center items-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-[250px]">
              <Image
                src={DepositImage}
                alt="Deposit Image"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Loan Product and Other Services */}
      <div className="mt-4 lg:mt-10 grid lg:grid-cols-2 gap-4 lg:gap-10">
        {/* Loan Product */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Animates both on scroll up and down
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative p-4 lg:px-10 lg:py-12 rounded-[12px] bg-[#D9D9D9]">
            <SmallHeading>Loan Product</SmallHeading>
            <p className="text-xs lg:text-sm text-center lg:text-left  font-normal mt-3 leading-[20px] lg:leading-[25px]">
              Flexible loan solutions designed to meet your financial needs,
              whether for business, personal growth, or unexpected expenses
            </p>

            <div className="flex flex-col space-y-4 mt-6">
              {[
                "Weekly Repayment Facility",
                "Micro Loan",
                "Small & Medium Loan",
                "Daily Saving Scheme",
                "School Supports",
                "Asset Acquisization",
                "Shelter Loan",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-1.5">
                  <GoDotFill />
                  <p className="text-xs lg:text-sm font-normal">{item}</p>
                </div>
              ))}
            </div>

            <Button className="mt-8">Use Calculator</Button>

            <div className="absolute right-0 bottom-4 lg:right-8">
              <Image
                src={LoanProductImage}
                alt="Deposit Image"
                width={1000}
                height={1000}
                className="object-cover w-[150px] lg:w-[250px] h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Other Services */}

        <div className="relative p-4 pb-28 lg:px-10 lg:py-12 rounded-[12px] bg-[#D9D9D9]">
          <SmallHeading>Other Services</SmallHeading>
          <p className="text-xs lg:text-sm text-center lg:text-left  font-normal mt-3 leading-[20px] lg:leading-[25px]">
            these include product other than deposit and credit products
          </p>

          <div className="flex flex-col space-y-4 mt-6">
            {[
              "Micro-insurance,",
              "financial advisory,",
              "Bill Payments,",
              "Funds Transfer,",
              "ATM Card for Transaction",
              "POS",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-x-1.5">
                <GoDotFill />
                <p className="text-xs lg:text-sm font-normal">{item}</p>
              </div>
            ))}
          </div>

          <div className="absolute  right-0   bottom-4 lg:right-8">
            <Image
              src={OtherServicesImage}
              alt="Deposit Image"
              width={1000}
              height={1000}
              className="object-cover w-[200px]  lg:w-[350px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
