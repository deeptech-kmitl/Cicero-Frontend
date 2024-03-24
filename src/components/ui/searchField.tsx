import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const SearchField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 Jura items-center rounded-full bg-[#D9D9D9]/50 pl-3 text-sm ring-offset-background",
          className
        )}
      >
        {icon}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-full bg-transparent px-3 pr-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SearchField.displayName = "SearchField";

export { SearchField };
