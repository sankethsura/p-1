"use client";
import NeomorphicTable from "@/app/comps/NeomorphicTable";
import React, { useEffect } from "react";
import EducationContent from "../Content/EducationContent";
import ContactMe from "../Content/ContactMe";
import Resume from "../Content/Resume";
import useMoveableHelper from "../CustomHooks.js/useMoveableHelper";
import Skills from "../Content/Skills";
import Experience from "../Content/Experience";

export default function Design2() {
  const size = {
    width: 130,
    height: 130,
    largeWidth: 280,
    largeHeight: 280,
  };
  const rounded = 50;

  let a =
    "w-[130px] h-[130px] rounded-[50px] rounded-br-none hover:w-[280px] hover:h-[280px] duration-300";
  let b =
    "w-[280px] h-[280px] rounded-[50px] rounded-bl-none hover:w-[280px] hover:h-[280px] duration-300";

  const [selectedId, setSelectedId] = React.useState(null);
  const [hoveredId, setHoveredId] = React.useState(null);

  const [animationStep, setAnimationStep] = React.useState(0);

  useEffect(() => {
    setAnimationStep(1);
  }, []);

  const handleSelect = (id) => {
    // setSelectedId(id);
    setSelectedId(selectedId === id ? null : id); // Toggle selection
  };

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const getClassNames = (id, baseWidth, baseHeight, cornerClasses = "", additionalClass = "", roundedClasses) => {
    if (selectedId) {
      // If an element is selected
      return selectedId === id
        ? `w-[90vw] h-[90vh] bg-black duration-300 ${additionalClass} ${roundedClasses}` // Enlarge selected element
        : "hidden"; // Hide non-selected elements
    }

    // Default hover and size behavior based on state
    const isHovered = hoveredId === id;
    const width = isHovered ? 280 : baseWidth;
    const height = isHovered ? 130 : baseHeight;

    return `w-[${width}px] h-[${height}px] bg-black ${cornerClasses} duration-300 ${additionalClass} ${
      hoveredId ? "delay-0" : ""
    }`;
  };

  const state = selectedId ? "selected" : hoveredId ? "hovered" : "normal";

  const { stepCss } = useMoveableHelper();

  return (
    <div className="w-full h-full relative items-center justify-center flex flex-col gap-5 bg-[#D5DFC4]/70 overflow-hidden">
      <div className="opacity-50">
        <img src="/1.png" className="absolute top-0 right-1/2 opacity-5 w-[100vh]" />
        <img src="/1.png" className="absolute top-0 left-1/2 opacity-5 w-[100vh] rotate-180" />
      </div>

      <main
        className={`flex flex-col gap-2 items-center justify-center mb-3 ${
          selectedId ? "hidden" : ""
        }`}
      >
        <p className="text-4xl text-brownPrimary">I'm Sanketh</p>
        <p className="text-lg font-semibold text-brownPrimary">Full stack developer</p>
      </main>

      <main className="flex gap-5 items-end z-[10]">
        {/* Left */}
        <section className="flex gap-5">
          {/* part1 */}
          <div className="flex flex-col gap-5 items-end">
            <NeomorphicTable
              id="table1"
              className={getClassNames(
                "table1",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-br-none cursor-pointer ${
                  animationStep ? "" : "-translate-x-12 opacity-0 ease-in-out"
                }`
              )}
              // onClick={() => handleSelect("table1")}
              onMouseEnter={() => handleMouseEnter("table1")}
              onMouseLeave={handleMouseLeave}
            >
              <Resume selectedId={selectedId} hoveredId={hoveredId} />
            </NeomorphicTable>
            <NeomorphicTable
              id="table2"
              className={getClassNames(
                "table2",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-tr-none ${
                  animationStep ? "delay-[200ms]" : " translate-y-12 opacity-0 ease-in-out"
                }`
              )}
              onClick={() => handleSelect("table2")}
              onMouseEnter={() => handleMouseEnter("table2")}
              onMouseLeave={handleMouseLeave}
            ></NeomorphicTable>
          </div>

          {/* part2 */}
          <NeomorphicTable
            id="table3"
            className={getClassNames(
              "table3",
              size.width,
              size.largeHeight,
              `rounded-[${rounded}px]`,
              "relative"
            )}
            // onClick={() => handleSelect("table3")}
            // onMouseEnter={() => handleMouseEnter("table3")}
            // onMouseLeave={handleMouseLeave}
          >
            {/* Absolute-positioned element inside */}
            <NeomorphicTable
              id="table4"
              className={`absolute top-0 ${getClassNames(
                "table4",
                size.width,
                size.height,
                `rounded-[${rounded}px] cursor-pointer ${stepCss}`
              )}`}
              type={2} // Ensure the prop is passed correctly
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/");
                // handleSelect("table4");
              }}
              onMouseEnter={() => handleMouseEnter("table4")}
              onMouseLeave={handleMouseLeave}
            >
              <ContactMe selectedId={selectedId} hoveredId={hoveredId} />
            </NeomorphicTable>
          </NeomorphicTable>
        </section>

        {/* Right */}
        <section className="flex flex-col gap-5">
          {/* part1 */}
          <NeomorphicTable
            id="table5"
            className={getClassNames(
              "table5",
              size.largeWidth,
              size.height,
              `rounded-[${rounded}px] rounded-bl-none cursor-pointer ${
                animationStep ? "delay-100" : " -translate-y-12 opacity-0 ease-in-out"
              }`,
              ``,
              `rounded-r-[80px]`
            )}
            onClick={() => handleSelect("table5")}
            onMouseEnter={() => handleMouseEnter("table5")}
            onMouseLeave={handleMouseLeave}
          >
            <EducationContent selectedId={selectedId} hoveredId={hoveredId} />
          </NeomorphicTable>

          {/* part2 */}
          <div className="flex gap-5">
            <NeomorphicTable
              id="table6"
              className={getClassNames(
                "table6",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-br-none rounded-tl-none ${
                  animationStep ? "delay-[300ms]" : " translate-x-12 opacity-0 ease-in-out"
                }`
              )}
              onClick={() => handleSelect("table6")}
              onMouseEnter={() => handleMouseEnter("table6")}
              onMouseLeave={handleMouseLeave}
            ></NeomorphicTable>
            <NeomorphicTable
              id="table7"
              className={getClassNames(
                "table7",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-bl-none cursor-pointer ${
                  animationStep ? "delay-[200ms]" : " translate-x-12 opacity-0 ease-in-out"
                }`,
                ``,
                `rounded-tr-[160px]`
              )}
              onClick={() => handleSelect("table7")}
              onMouseEnter={() => handleMouseEnter("table7")}
              onMouseLeave={handleMouseLeave}
            >
              <Skills selectedId={selectedId} hoveredId={hoveredId} />
            </NeomorphicTable>
          </div>
        </section>
      </main>

      <main className="flex gap-5 z-[10]">
        {/* left */}
        <NeomorphicTable
          id="table8"
          className={getClassNames(
            "table8",
            size.width,
            size.height,
            `rounded-[${rounded}px] rounded-tr-none ${
              animationStep ? "delay-[100ms]" : " translate-y-12 opacity-0 ease-in-out"
            }`
          )}
          onClick={() => handleSelect("table8")}
          onMouseEnter={() => handleMouseEnter("table8")}
          onMouseLeave={handleMouseLeave}
        ></NeomorphicTable>

        {/* Center */}
        <NeomorphicTable
          id="table9"
          className={getClassNames(
            "table9",
            size.largeWidth,
            size.height,
            `rounded-[${rounded}px] rounded-tr-none cursor-pointer ${
              animationStep ? "delay-[200ms]" : " translate-y-12 opacity-0 ease-in-out"
            }`
          )}
          onClick={() => handleSelect("table9")}
          onMouseEnter={() => handleMouseEnter("table9")}
          onMouseLeave={handleMouseLeave}
        >
          <Experience selectedId={selectedId} hoveredId={hoveredId} />
        </NeomorphicTable>

        {/* right */}
        <NeomorphicTable
          id="table10"
          className={getClassNames(
            "table10",
            size.width,
            size.height,
            `rounded-[${rounded}px] rounded-tl-none ${
              animationStep ? "delay-[400ms]" : " translate-x-12 opacity-0 ease-in-out"
            }`
          )}
          onClick={() => handleSelect("table10")}
          onMouseEnter={() => handleMouseEnter("table10")}
          onMouseLeave={handleMouseLeave}
        ></NeomorphicTable>
      </main>
    </div>
  );
}
