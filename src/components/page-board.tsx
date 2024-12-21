import { Heading } from "./heading";
import { MaxWidthWrapper } from "./max-width-wrapper";

interface PageBoardProps {
  backgroundImage: string;
  desc: string;
  heading: string;
}

export const PageBoard: React.FC<PageBoardProps> = ({
  backgroundImage,
  desc,
  heading,
}) => {
  return (
    <div
      className="relative flex justify-center items-center lg:h-[450px] bg-black bg-cover text-white py-16"
      style={{
        backgroundImage: `${backgroundImage}`, // Replace with the actual image path
        backgroundPosition: "top 40% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <MaxWidthWrapper className="relative text-center lg:w-[80%] mx-auto">
        <Heading className="text-white">{heading}</Heading>
        <p className="text-xs mt-3 leading-6">{desc}</p>
      </MaxWidthWrapper>
    </div>
  );
};
