import NeomorphicTable from "@/app/comps/NeomorphicTable";
import React from "react";

export default function LeftNav() {
  const list = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/about",
    },
    {
      label: "Projects",
      route: "/projects",
    },
    {
      label: "Skills",
      route: "/skills",
    },
    {
      label: "Education",
      route: "/education",
    },
    {
      label: "Resume",
      route: "/resume",
    },
    {
      label: "Contact",
      route: "/contact",
    },
  ];
  return (
    <div className="w-[200px] h-full">
      <NeomorphicTable type={1} className={``}>
        {/* <ul className="flex flex-col justify-center items-center gap-5">
          {list.map((item, index) => (
            <div type={4} key={index} className="w-full h-10 px-4 flex items-center justify-center">
              <a href={item.route} className="text-lg font-semibold text-[#3C3D37]">
                {item.label}
              </a>
            </div>
          ))}
        </ul> */}
      </NeomorphicTable>
    </div>
  );
}
