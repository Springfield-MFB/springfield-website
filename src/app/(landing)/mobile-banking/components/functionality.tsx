import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

import FunctionalityImg from "@/public/images/functionality-app.png";
import { Heading } from "@/components/heading";
import MobileBankingDropdown from "./drop-down";

export default function FunctionalityApp() {
  return (
    <section className="relative py-12 lg:py-24">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="basis-1/2">
            <Image
              src={FunctionalityImg}
              alt="Functionality App"
              width={1000}
              height={1000}
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <div className="basis-1/2">
            <Heading className="lg:text-4xl">A Dual Functionality App</Heading>
            <p className="my-6 text-xs leading-6">
              A quick download of our mobile banking app can transform your
              smartphone into a powerful banking tool.
            </p>

            <MobileBankingDropdown />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
