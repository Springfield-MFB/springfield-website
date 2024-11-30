import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div>
      <div
        className={cn(
          "h-full mx-auto w-full max-w-screen-2xl px-2.5 md:px-20",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
