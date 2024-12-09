import Image from "next/image";

import { CustomButton } from "@/components/custom-button";
import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import SavingAccountImage from "@/public/images/saving-hero-image.png";

export const SavingHero = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-16 flex flex-col lg:flex-row px-2 space-y-10 md:space-y-0 md:space-x-6 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center flex flex-col items-center lg:items-start md:w-[55%] md:text-left">
            <Heading className="lg:w-[90%]">
              Springfield <span className="text-brand-primary">Saving</span>{" "}
              Account
            </Heading>

            <p className="my-6 lg:w-[90%] text-dark-text lg:leading-7 text-sm">
              This is normal savings account with attractive interest for
              individuals, business owners, students and traders. Up to 3 times
              withdrawals allowed with interest.
            </p>

            <CustomButton type="primary">Get Started</CustomButton>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:basis-[45%]">
            <Image
              src={SavingAccountImage}
              alt="Saving Account"
              width={1000}
              height={1000}
              className="object-cover  w-full h-full"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
