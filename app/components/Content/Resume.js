import { ChatTeardropText, Scroll } from "@phosphor-icons/react";
import React from "react";

export default function Resume({ selectedId, hoveredId }) {
  const isSelected = selectedId === "table1";
  const isHovered = hoveredId === "table1";

  const URL = 'https://turquoise-gennie-80.tiiny.site/'

  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-brownPrimary">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2" onClick={()=>{
          window.open(URL)
        }}>
          <Scroll size={28} />

          <div
            className={`text-xl font-medium duration-300 ${
              isSelected || isHovered ? "w-[76px]" : "w-[0px]"
            } overflow-hidden whitespace-nowrap`}
          >
            Resume
          </div>
        </div>
      </div>
    </div>
  );
}
