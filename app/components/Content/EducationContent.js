import NeomorphicTable from "@/app/comps/NeomorphicTable";
import { GraduationCap } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import useAnimationSteps from "../CustomHooks.js/useAnimationSteps";

export default function EducationContent({ selectedId, hoveredId }) {
  const isSelected = selectedId === "table5";
  const isHovered = hoveredId === "table5";

const {animationStep } = useAnimationSteps(
  {
    isSelected,
    duration: 1000,
  }
)
 
  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-brownPrimary relative overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap size={28} />

          <div
            className={`text-xl font-medium duration-300 ${
              isSelected || isHovered ? "w-[96px]" : "w-[0px]"
            } overflow-hidden`}
          >
            Education
          </div>
        </div>
        {isSelected && (
          <>
            <NeomorphicTable
            // type={3}
              className={`absolute opacity-50 blur-sm rounded-full ease-linear duration-[60000ms] ${
                animationStep === 0
                  ? "w-[220px] h-[220px] -top-12 right-24"
                  : "-top-36 w-[180px] h-[180px] right-96"
              } `}
            />
            <NeomorphicTable
              className={`absolute opacity-50 blur-sm rounded-full ease-linear duration-[50000ms] ${
                animationStep === 0
                  ? "w-[20vw] h-[20vw] -bottom-12 left-6"
                  : "-bottom-36 w-[15vw] h-[15vw] left-56"
              } `}
            >
              {/* <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                <img src='/yt.png' className="w-8" />
                <div className="text-xs">YouTube</div>
              </div> */}
            </NeomorphicTable>
            <ul className="list-disc space-y-2 text-start mt-4">
              <li>JNNCE | Bachelor of Civil Engineering | 2014-2018</li>
              <li>Relevel by Unacademy | Frontend Development | 2022</li>
              <li>Arena Animation | Visualization Artist | 2018</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
