import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-5xl sm:text-8xl font-millik text-dark-primary",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
