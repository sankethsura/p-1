import { ChatTeardropText } from "@phosphor-icons/react";
import React from "react";

export default function ContactMe({ selectedId, hoveredId }) {
  const isSelected = selectedId === "table4";
  const isHovered = hoveredId === "table4";

  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-white">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <ChatTeardropText size={28} />

          <div
            className={`text-xl font-medium duration-300 ${
              isSelected || isHovered ? "w-[116px]" : "w-[0px]"
            } overflow-hidden whitespace-nowrap`}
          >
            Get in touch
          </div>
        </div>
      </div>
    </div>
  );
}
