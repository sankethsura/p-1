"use client"

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { twMerge } from "tailwind-merge";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Trigger
    ref={ref}
    className={twMerge("cursor-pointer", className)}
    {...props}
  />
));
ContextMenuTrigger.displayName = ContextMenuPrimitive.Trigger.displayName;

const ContextMenuPortal = ({ className, ...props }) => (
  <ContextMenuPrimitive.Portal {...props} className={className} />
);
ContextMenuPortal.displayName = ContextMenuPrimitive.Portal.displayName;

const ContextMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <ContextMenuPortal>
    <ContextMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={twMerge(
        "bg-white border border-purpleBorder rounded mt-2 shadow-lg p-2 w-48 z-50",
        className
      )}
      {...props}
    />
  </ContextMenuPortal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={twMerge(
      "px-4 py-2 cursor-pointer rounded text-sm text-gray-800 hover:bg-violet-50 hover:text-black",
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={twMerge("my-1 h-px bg-gray-200", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
};
