"use client";
import NeomorphicTable from "@/app/comps/NeomorphicTable";
import React from "react";

export default function Design2() {
  const size = {
    width: 130,
    height: 130,
    largeWidth: 280,
    largeHeight: 280,
  };
  const rounded = 50;

  // let a = "w-[130px] h-[130px] rounded-[50px] rounded-br-none hover:w-[300px] hover:h-[300px] duration-300"
  // let b = "w-[280px] h-[130px] rounded-[50px] rounded-bl-none hover:w-[300px] hover:h-[300px] duration-300"

  const [selectedId, setSelectedId] = React.useState(null);

  const handleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id); // Toggle selection
  };

  const getClassNames = (id, baseWidth, baseHeight, cornerClasses = "", additionalClass = "") => {
    if (selectedId) {
      // If an element is selected
      return selectedId === id
        ? `w-[90vw] h-[90vh] bg-black duration-300 ${additionalClass}`
        : "hidden"; // Hide non-selected elements
    }

    // Default hover and size behavior for unselected elements
    return `w-[${baseWidth}px] h-[${baseHeight}px] bg-black ${cornerClasses} hover:w-[300px] hover:h-[300px] duration-300 ${additionalClass}`;
  };

  return (
    <div className="w-full h-full relative items-center justify-center flex flex-col gap-5 bg-[#AAB396]/40 overflow-hidden">
      <div className="opacity-50">
        <img src="/1.png" className="absolute top-0 right-1/2 opacity-5 w-[100vh]" />
        <img src="/1.png" className="absolute top-0 left-1/2 opacity-5 w-[100vh] rotate-180" />
      </div>

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
                `rounded-[${rounded}px] rounded-br-none`
              )}
              onClick={() => handleSelect("table1")}
            ></NeomorphicTable>
            <NeomorphicTable
              id="table2"
              className={getClassNames(
                "table2",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-r-none`
              )}
              onClick={() => handleSelect("table2")}
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
            onClick={() => handleSelect("table3")}
          >
            {/* Absolute-positioned element inside */}
            <NeomorphicTable
              id="table4"
              className={`absolute -top-1 ${getClassNames(
                "table4",
                size.width,
                size.height,
                `rounded-[${rounded}px]`
              )}`}
              type={2} // Ensure the prop is passed correctly
              onClick={() => handleSelect("table4")}
            ></NeomorphicTable>
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
              `rounded-[${rounded}px] rounded-bl-none`
            )}
            onClick={() => handleSelect("table5")}
          ></NeomorphicTable>

          {/* part2 */}
          <div className="flex gap-5">
            <NeomorphicTable
              id="table6"
              className={getClassNames(
                "table6",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-br-none rounded-tl-none`
              )}
              onClick={() => handleSelect("table6")}
            ></NeomorphicTable>
            <NeomorphicTable
              id="table7"
              className={getClassNames(
                "table7",
                size.width,
                size.height,
                `rounded-[${rounded}px] rounded-bl-none`
              )}
              onClick={() => handleSelect("table7")}
            ></NeomorphicTable>
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
            `rounded-[${rounded}px] rounded-tr-none`
          )}
          onClick={() => handleSelect("table8")}
        ></NeomorphicTable>

        {/* Center */}
        <NeomorphicTable
          id="table9"
          className={getClassNames(
            "table9",
            size.largeWidth,
            size.height,
            `rounded-[${rounded}px] rounded-t-none`
          )}
          onClick={() => handleSelect("table9")}
        ></NeomorphicTable>

        {/* right */}
        <NeomorphicTable
          id="table10"
          className={getClassNames(
            "table10",
            size.width,
            size.height,
            `rounded-[${rounded}px] rounded-tl-none`
          )}
          onClick={() => handleSelect("table10")}
        ></NeomorphicTable>
      </main>
    </div>
  );
}
