import NeomorphicTable from "@/app/comps/NeomorphicTable";
import React from "react";

export default function RightTop() {
  return (
    <div className="w-[200px] h-full flex items-center justify-center">
      <NeomorphicTable type={1} className={``}></NeomorphicTable>
    </div>
  );
}
