import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

export const Openings = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col  py-16">
        <Heading>All Job Opening at Springfield</Heading>
        <p className="mt-4 text-sm">Here are some of our available openings</p>

        <div className="flex flex-col space-y-4 lg:w-[75%] lg:mx-auto mt-16">
          {["Manager", "Accountant", "Human Resource", "Security"].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center rounded-[8px] border-[.75px] border-[#D6D6D6] shadow-sm py-2 text-xs text-center"
              >
                <span className="w-[30%] border-r py-1 font-bold">{item}</span>
                <span className="w-[40%] flex justify-center items-center space-x-2 border-r py-1">
                  <Image
                    src="/svg/flag.svg"
                    alt="flag"
                    width={20}
                    height={20}
                    className="rounded-full "
                  />
                  <p>Lagos - Nigeria</p>
                </span>
                <span className="w-[30%] py-1">Full-time</span>
              </div>
            )
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};