import { SmallHeading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

import catImg1 from "@/public/svg/ctgy1.svg";
import catImg2 from "@/public/svg/ctgy2.svg";
import catImg3 from "@/public/svg/ctgy3.svg";
import catImg4 from "@/public/svg/ctgy4.svg";

const categories = [
  {
    title: "News",
    image: catImg1,
  },
  {
    title: "Press Releases",
    image: catImg2,
  },
  {
    title: "Photo & Video",
    image: catImg3,
  },
  {
    title: "Speech & Presentation",
    image: catImg4,
  },
];

type CategoryProps = (typeof categories)[number];

const CategoryCard = ({ image, title }: CategoryProps) => {
  return (
    <div className="bg-white border-[2px] border-[#F2F2F2] rounded-[6px] w-[20%] size-[120px] flex flex-col gap-y-4 items-center justify-center ">
      <Image
        src={image}
        width={150}
        height={150}
        alt="cards"
        className="w-[40px]"
      />

      <p className="font-medium text-[10px] font-satoshi">{title}</p>
    </div>
  );
};

export const Category = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper className="">
        <div className="border-[1.5px] border-brand-primary rounded-[16px]">
          <div className="flex pt-8 pb-40 px-4 md:px-14 md:py-12 items-center relative">
            <div className="flex flex-col gap-y-4 w-[40%] ">
              <SmallHeading>Categories</SmallHeading>
              <p className="text-[13px] text-[#494848] leading-5 md:leading-6 w-full font-satoshi">
                Stay informed, stay ahead of the financial curve, and bank
                smarter with us!"
              </p>
            </div>

            <div className="flex gap-4 justify-end items-center w-[60%]">
              {categories.map((cat, idx) => (
                <CategoryCard key={idx} {...cat} />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
