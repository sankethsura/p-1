import { useThemeStore } from "@/Zustand/themeStore";
import React from "react";
import { twMerge } from "tailwind-merge";

const NeomorphicTable = ({ children, type = 1, className, ...props }) => {
  let classNeeded;

  const { theme, setTheme } = useThemeStore();

  if (type == 1)
    classNeeded =
      "bg-gradient-to-br from-[#AAB396] to-[#D5DFC4] shadow-[-10px_-10px_20px_#98A085,10px_10px_20px_#BCCAAA,-5px_-5px_10px_#98A085_inset,5px_5px_10px_#BCCAAA_inset] border-4 border-[#AAB396]";

  if (type == 2)
    classNeeded =
      "bg-gradient-to-br from-[#E85C0D] to-[#FF9874] shadow-[-10px_-10px_20px_#E85C0D,10px_10px_20px_#BCCAAA,-5px_-5px_10px_#E85C0D_inset,5px_5px_10px_#E85C0D_inset] border-4 border-[#E85C0D]";

  //create another type here

  if (type == 3)
    classNeeded =
      "bg-gradient-to-br from-[#cacaca] to-[#f0f0f0] shadow-[-10px_-10px_20px_#cacaca,10px_10px_20px_#cacaca,-5px_-5px_10px_#cacaca_inset,5px_5px_10px_#cacaca_inset] border-4 border-[#cacaca]";

  if (type == 4)
    classNeeded =
      "bg-gradient-to-br from-[#AAB396] to-[#D5DFC4] shadow-[-10px_-10px_20px_#98A085,10px_10px_20px_#BCCAAA,-5px_-5px_10px_#BCCAAA_inset,5px_5px_10px_#98A085_inset] border-0";

  if (theme == "neomorphic") {
    classNeeded = "border border-white bg-gradient-to-br from-[#AAB396] to-[#D5DFC4]";
    if(type == 2) classNeeded = "bg-gradient-to-br from-[#E85C0D] to-[#FF9874]";
  }

  return (
    <div
      className={twMerge(
        // "bg-gradient-to-br from-[#cacaca] to-[#f0f0f0]",
        classNeeded,
        "w-full h-full rounded-2xl flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default NeomorphicTable;
