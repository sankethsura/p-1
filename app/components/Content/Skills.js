import NeomorphicTable from "@/app/comps/NeomorphicTable";
import { Circuitry } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import useAnimationSteps from "../CustomHooks.js/useAnimationSteps";

export default function Skills({ selectedId, hoveredId }) {
  const isSelected = selectedId === "table7";
  const isHovered = hoveredId === "table7";

  const [hoveredItem, setHoveredItem] = React.useState();

  const { animationStep } = useAnimationSteps({
    isSelected,
    duration: 1000,
  });

  const frontEndSkills = [
    {
      title: "Next JS",
      icon: <img src="/nextjs.png" alt="Next JS" className="w-8 h-8 bg-white rounded-full" />,
      score: 85,
      description: "Skilled in server-side rendering (SSR) and static site generation (SSG) with Next.js, improving SEO and performance for production-grade applications."
    },
    {
      title: "React JS",
      icon: <img src="/reactjs.webp" alt="React JS" className="w-8 h-8 bg-white rounded-full" />,
      score: 75,
      description: "Experienced in building dynamic, component-based UIs, leveraging hooks for state management, and optimizing performance for highly interactive web applications."
    },
    {
      title: "Tailwind CSS",
      icon: (
        <img src="/tailwindcss.png" alt="Tailwind CSS" className="w-8 h-8 bg-white rounded-full" />
      ),
      score: 80,
      description: "Expert in responsive design with utility-first CSS, creating scalable, maintainable, and minimalistic user interfaces quickly."
    },
    {
      title: "JavaScript",
      icon: <img src="/js1.webp" alt="JavaScript" className="w-8 h-8 bg-white rounded-full" />,
      score: 80,
      description: "Proficient in ES6+ syntax, asynchronous programming, and DOM manipulation, ensuring cross-browser compatibility and performance optimization."
    },
    {
      title: "HTML5 & CSS3",
      icon: <img src="/html5.png" alt="HTML5" className="w-8 h-8 bg-white rounded-full" />,
      score: 90,
    },
    {
      title: "TypeScript",
      icon: <img src="/ts.png" alt="TypeScript" className="w-8 h-8 bg-white rounded-full" />,
      score: 60,
    },
  ];

  const backEndSkills = [
    {
      title: "Node JS",
      icon: <img src="/nodejs.png" alt="Node JS" className="w-8 h-8" />,
      score: 70,
      description: "Developed scalable back-end services and RESTful APIs, focusing on microservices architecture and event-driven systems using Node.js."
    },
    {
      title: "Express JS",
      icon: <img src="/ex.webp" alt="Express JS" className="w-8 h-8" />,
      score: 72,
    },
    {
      title: "MongoDB",
      icon: <img src="/mongodb.webp" alt="MongoDB" className="w-8 h-8" />,
      score: 60,
      description: "Experienced with schema design, indexing, and aggregation in MongoDB for creating efficient and flexible data models."
    },
  ];

  useEffect(() => {
    setHoveredItem(frontEndSkills[0]);
  }, []);

  const renderSkills = (skills) => {
    return (
      <div className="flex flex-col gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer duration-300 ${
              hoveredItem?.title === skill?.title ? "scale-125" : ""
            }`}
            onMouseOver={() => setHoveredItem(skill)}
          >
            {skill.icon}
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    );
  };

  const colorMatch = (score) => {
    if (score >= 90) {
      return "text-green-500";
    } else if (score >= 80) {
      return "text-blue-500";
    } else if (score >= 70) {
      return "text-yellow-500";
    } else if (score >= 60) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  };

  if (isSelected) {
    return (
      <div className="w-full h-full flex items-center justify-start p-8 gap-5 overflow-auto text-brownPrimary ">
        <div className="w-1/2 h-full">
          <div
            className={`flex gap-5 items-center w-full h-full justify-center relative overflow-hidden`}
          >
            <div
              className={`absolute w-[280px] h-[280px] bottom-[30px] ease-linear duration-[15000ms] bg-gradient-to-r from-[#557C56] via-[#FF885B] to-[#FF885B] blur-[30px] rounded-full opacity-60 ${
                animationStep
                  ? "-translate-x-12 translate-y-0 rotate-[100deg]"
                  : "translate-x-12 -translate-y-12 rotate-[-100deg]"
              }`}
            />
            <div className="flex gap-5 items-center w-full h-full justify-center z-[1]">
              {renderSkills(frontEndSkills)}
              <div className="w-[1px] h-[300px] bg-white/50"></div>
              {renderSkills(backEndSkills)}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex gap-5 h-[180px]">
              <NeomorphicTable className={`flex gap-2 `}>
                {hoveredItem?.icon}
                {hoveredItem?.title}
              </NeomorphicTable>
              <NeomorphicTable
                className={`rounded-2xl rounded-tr-[180px] text-4xl font-semibold text-brownPrimary `}
              >
                <CountUp end={hoveredItem?.score} duration={1} />
              </NeomorphicTable>
            </div>
            <NeomorphicTable>
              <div className="w-full h-full p-8 flex items-center justify-center text-xl">

              {hoveredItem?.description || "I am a full stack developer with 3 years of experience"}
              </div>
            </NeomorphicTable>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-brownPrimary">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Circuitry size={28} />
          <div
            className={`text-xl font-medium duration-300 ${
              isSelected || isHovered ? "w-[50px]" : "w-[0px]"
            } overflow-hidden whitespace-nowrap`}
          >
            Skills
          </div>
        </div>
      </div>
    </div>
  );
}
