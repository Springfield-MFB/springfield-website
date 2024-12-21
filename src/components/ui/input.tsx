import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError; // Add error prop to handle error messages
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-[#FAFAFA] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500 focus-visible:ring-red-500" : "", // Apply red border if there's an error
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red-500 text-xs">{error.message}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
