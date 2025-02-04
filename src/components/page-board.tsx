import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { MaxWidthWrapper } from "./max-width-wrapper";
import BoxReveal from "./ui/box-reveal";

interface PageBoardProps {
  backgroundImage: string;
  desc: string;
  heading: string;
  className?: string;
  containerClassName?: string;
}

export const PageBoard: React.FC<PageBoardProps> = ({
  backgroundImage,
  desc,
  heading,
  className = "lg:h-[450px]",
  containerClassName = "lg:w-[70%]",
}) => {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center  bg-black bg-cover text-white py-16",
        className
      )}
      style={{
        backgroundImage: `${backgroundImage}`, // Replace with the actual image path
        backgroundPosition: "top 40% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <MaxWidthWrapper
        className={cn(
          "relative flex flex-col items-center text-center  mx-auto w-full",
          containerClassName
        )}
      >
        <Heading className="text-white lg:leading-[80px]">{heading}</Heading>
        <BoxReveal boxColor={"#F0B929"} duration={1.2}>
          <p className="text-sm mt-3 leading-6 text-center">{desc}</p>
        </BoxReveal>
      </MaxWidthWrapper>
    </div>
  );
};
