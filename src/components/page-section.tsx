import Image, { StaticImageData } from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { cn } from "@/lib/utils";
import { ESGSections as sections } from "@/config/index";
import { SmallHeading } from "./heading";

type SectionProps = {
  title: string;
  description: string;
  items: Array<{
    title: string;
    text: string;
  }>;
  image: StaticImageData;
  reverse: boolean;
};

export const Section = ({
  title,
  description,
  items,
  image,
  reverse,
}: SectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 py-16",
        reverse && "md:flex-row-reverse "
      )}
    >
      <div className={cn("md:w-1/2  flex", reverse && "justify-end")}>
        <div className="md:w-[90%] font-satoshi flex flex-col ">
          <SmallHeading className="text-4xl text-left md:text-5xl  mb-4 leading-[50px] font-light">
            {title}
          </SmallHeading>
          <p className=" text-sm mb-6 text-[#494848] leading-6 ">
            {description}
          </p>
          <ul className="space-y-8 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-x-3 md:gap-x-6">
                <IoMdCheckmarkCircleOutline className="text-yellow-500  size-7 md:size-10" />
                <div className="text-[#5C5571] w-[90%] leading-6">
                  <span className="font-bold text-black">
                    {item.title}
                    {item.text && ":"}
                  </span>{" "}
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={title}
          className="w-full rounded-lg"
          placeholder="blur"
        />
      </div>
    </div>
  );
};
