"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/utils/classname";

const contentVariants = cva(
  "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1"
);

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooptipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(contentVariants({ className }))}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface TooptipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };