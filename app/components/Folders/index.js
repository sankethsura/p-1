"use client";

import React, { useContext, useState } from "react";
import Draggable from "react-draggable";
import FoldersIcon from "./foldersIcon";
import NameTheFolder from "./nameTheFolder";
import { PopupHandlerContext } from "@/app/context/popups/popup-context";

export default function Index() {
  const [positions, setPositions] = useState({
    folder1: { x: 50, y: 50 },
  });

  const gridSize = 50; //add calculations later

  const handleStop = (e, data, id) => {
    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: Math.round(data.x / gridSize) * gridSize,
        y: Math.round(data.y / gridSize) * gridSize,
      },
    }));
  };

  const {dispatch} = useContext(PopupHandlerContext);

  return (
    <div>
      {" "}
      <Draggable
        defaultPosition={positions.folder1}
        position={positions.folder1}
        onStop={(e, data) => handleStop(e, data, "folder1")}
      >
        <div
          className="absolute cursor-pointer flex flex-col items-center"
          onClick={() => {
            dispatch({ type: "SHOW_POPUP_1" });
          }}
          // compose the folder icons and name structure later
        >
          <FoldersIcon />
          <NameTheFolder />
        </div>
      </Draggable>
    </div>
  );
}
