import NeomorphicTable from "@/app/comps/NeomorphicTable";
import React from "react";

export default function RightBottom() {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <NeomorphicTable
        type={1}
        className={`rounded-br-[300px] hover:rounded-br-2xl duration-700 ease-out`}
      >
        <p className="-translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-[#3C3D37]">
          {/* Enter */}
        </p>
      </NeomorphicTable>
    </div>
  );
}
