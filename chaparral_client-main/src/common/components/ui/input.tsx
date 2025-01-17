"use client"

import * as React from "react"

import { cn } from "@/common/misc/utils"
import { isEmpty } from "lodash";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {

    const [isFocused, setIsFocused] = React.useState(false);
    const [value, setValue] = React.useState("");
    // Determine if the label should float
    const shouldLabelFloat = false;
    return (
      <div className="relative">
        <label
          htmlFor="phone"
          className={`absolute left-0 px-1 text-xs ${shouldLabelFloat ? 'transition-all  -top-3 visible' : 'top-2 invisible'
            }`}
        >
          {placeholder}
        </label>
        <input
          type={type}
          id="phone"
          className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className)}
          placeholder={shouldLabelFloat ? '' : placeholder}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          ref={ref}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
      // <input
      //   type={type}
      //   className={cn(
      //     "flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      //     className
      //   )}
      //   ref={ref}
      //   {...props}
      // />
    )
  }
)
Input.displayName = "Input"

export { Input }
