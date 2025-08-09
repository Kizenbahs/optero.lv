"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    borderRadius?: string;
    children: React.ReactNode;
    as?: React.ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: string;
  }
>(({ borderRadius = "1.75rem", children, as: Component = "button", containerClassName, borderClassName, duration, className, ...otherProps }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <div
          className={cn(
            "absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3B82F6_50%,#10B981_100%)]",
            borderClassName
          )}
          style={{
            animationDuration: duration || "2s",
          }}
        />
      </div>

      <div
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
});

Button.displayName = "MovingBorder";
