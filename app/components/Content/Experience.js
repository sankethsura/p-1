import { Briefcase } from "@phosphor-icons/react";
import React from "react";

export default function Experience({ selectedId, hoveredId }) {
  const isSelected = selectedId === "table9";
  const isHovered = hoveredId === "table9";

  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-brownPrimary">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Briefcase size={28} />

          <div
            className={`text-xl font-medium duration-300 ${
              isSelected || isHovered ? "w-[107px]" : "w-[0px]"
            } overflow-hidden whitespace-nowrap`}
          >
            Experience
          </div>
        </div>
      </div>
    </div>
  );
}
