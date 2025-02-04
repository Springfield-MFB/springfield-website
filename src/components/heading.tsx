import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import BoxReveal from "./ui/box-reveal";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-6xl leading-[45px] lg:leading-[70px] font-millik text-dark-primary",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const SmallHeading = ({
  children,
  className,
  ...props
}: HeadingProps) => {
  return (
    <BoxReveal boxColor={"#F0B929"} duration={0.8}>
      <h1
        className={cn(
          "text-2xl md:text-4xl  text-center lg:text-left font-millik text-dark-primary",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    </BoxReveal>
  );
};
