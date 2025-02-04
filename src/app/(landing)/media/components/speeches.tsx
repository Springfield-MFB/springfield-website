import { Heading } from "@/components/heading";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import SpeechImg1 from "@/public/images/speech-img1.png";
import SpeechImg2 from "@/public/images/speech-img2.png";
import SpeechImg3 from "@/public/images/speech-img3.png";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Benefit of Investment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et eleifend nibh felis feugiat faucibus id.",
    date: "24 May, 2024",
    image: SpeechImg1,
  },
  {
    title: "Money Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et eleifend nibh felis feugiat faucibus id.",
    date: "24 May, 2024",
    image: SpeechImg2,
  },
  {
    title: "Benefit of Investment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et eleifend nibh felis feugiat faucibus id.",
    date: "24 May, 2024",
    image: SpeechImg3,
  },
];

type CardProps = (typeof cards)[number];

const Card = ({ date, description, image, title }: CardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-[#D6D6D6]">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-80" />
      </div>
      <div className="p-4 mb-4">
        <h3 className="text-sm font-bold text-[#181818]">{title}</h3>
        <p className="text-[#747474] text-xs mt-2">{description}</p>
      </div>
      <div className="border-t border-[#D6D6D6]">
        <p className="text-[#827F7F] font-semibold  text-xs p-4">{date}</p>
      </div>
    </div>
  );
};

export const Speeches = () => {
  return (
    <div className="py-4">
      <MaxWidthWrapper>
        <Heading className="md:text-5xl">Speeches & Presentation</Heading>
        <p className="text-xs text-[#494848] lg:w-[50%] leading-5">
          Access keynote addresses, conference presentations, and other public
          talks from Springfield microfinance bank thought leaders and experts.
        </p>

        <div className="mt-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>

        <Button
          variant="brand"
          className="px-6 py-3 text-[#2B2B2B] rounded-md transition-all duration-300 mt-8 "
        >
          Load More
        </Button>
      </MaxWidthWrapper>
    </div>
  );
};
