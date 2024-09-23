import React from "react";
import { motion } from "framer-motion";
import { X } from "@phosphor-icons/react";

export default function CommonContent({ icon, title, content, state, close }) {
  return (
    <div
      className="flex flex-col w-full h-full items-center justify-center p-4 rounded-lg overflow-hidden relative" // Removed background color
      initial="normal"
      animate={state}
    >
      {state == "selected" && (
        <div
          className="absolute top-5 right-5"
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
        >
          <X size={26} />
        </div>
      )}
      {/* Icon with a smoother and more subtle scale effect */}
      <div className="mb-2">{icon}</div>

      {/* Title (visible in hovered and selected states) */}
      {state !== "normal" && <h3 className="text-lg font-semibold">{title}</h3>}

      {/* Content (visible only in selected state) */}
      {state === "selected" && <p className="text-sm mt-2">{content}</p>}
    </div>
  );
}
