"use client";

import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import SmallModal from "../Modal/PopupStructre-1";
import FoldersIcon from "./foldersIcon";
import NameTheFolder from "./nameTheFolder";
import { usePopupStore } from "@/Zustand/popupStore";

export default function Index() {
  const [allFolderItems, setAllFolderItems] = useState([
    {
      id: 1,
      name: "Resume",
      position: { x: 0, y: 0 },
      open: false,
    },
    {
      id: 2,
      name: "Education",
      position: { x: 0, y: 100 },
      open: false,
    },
    {
      id: 3,
      name: "Projects",
      position: { x: 0, y: 200 },
      open: false,
    },
    {
      id: 3,
      name: "Experience",
      position: { x: 0, y: 300 },
      open: false,
    },
  ]);

  const { openedPopups, addPopup, removePopup, closeAllPopups } = usePopupStore();

  const gridSize = 100; //add calculations later

  const handleStop = (e, data, id) => {
    const updatedItems = allFolderItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          position: {
            x: Math.round(data.x / gridSize) * gridSize,
            y: Math.round(data.y / gridSize) * gridSize,
          },
        };
      }
      return item;
    });
    setAllFolderItems(updatedItems);
  };

  useEffect(() => {
    setAllFolderItems((prev) => {
      return prev.map((item) => {
        if (openedPopups.includes(item.id)) {
          return { ...item, open: true };
        }
        return { ...item, open: false };
      });
    });
  }, [openedPopups]);

  return (
    <div>
      {allFolderItems.map((item) => (
        <div key={item.id}>
          <SmallModal
            isOpen={item.open}
            folderName={item.name}
            close={() => {
              removePopup(item.id);
            }}
          />
          <Draggable
            key={item.id}
            defaultPosition={item.position}
            position={item.position}
            onStop={(e, data) => handleStop(e, data, item.id)}
          >
            <div
              onClick={() => {
                addPopup(item.id);
              }}
              className="absolute cursor-pointer flex flex-col items-center"
            >
              <FoldersIcon />
              <NameTheFolder folderName={item.name} />
            </div>
          </Draggable>
        </div>
      ))}
    </div>
  );
}
