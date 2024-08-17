"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";
import FoldersIcon from "./foldersIcon";
import NameTheFolder from "./nameTheFolder";

export default function Index() {
  const [positions, setPositions] = useState({
    folder1: { x: 50, y: 50 }
  });

  const gridSize = 70; //add calculations later

  const handleStop = (e, data, id) => {
    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: Math.round(data.x / gridSize) * gridSize,
        y: Math.round(data.y / gridSize) * gridSize,
      },
    }));
  };
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
          // compose the folder icons and name structure later
        >
          <FoldersIcon />
          <NameTheFolder />
        </div>
      </Draggable>
    </div>
  );
}
