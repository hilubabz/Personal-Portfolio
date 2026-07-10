"use client";

import { projectsList } from "@/constants/project-list";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";

export const ProjectsComponent = () => {
  const [hover, setHover] = useState(-1);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="mt-25 px-7 flex gap-5 flex-wrap">
      {projectsList.map((val, index) => (
        <Link
          href={`/video/${index}`}
          key={index}
          className={`h-105 w-77.5 bg-[#1A1A1A] rounded-xl space-y-3 relative ease-in-out duration-1000 opacity-0 ${visible ? "opacity-100 -translate-y-10" : ""}`}
          style={{ transitionDelay: `${index * 100}ms` }}
          onMouseOver={() => setHover(index)}
          onMouseLeave={() => setHover(-1)}
        >
          <Image
            src={`/${val.image}`}
            alt={val.alt}
            width={310}
            height={210}
            className={`w-full h-[50%] object-contain rounded-t-xl`}
            style={{ backgroundColor: val.color }}
          />
          {hover == index && (
            <div className="absolute top-1/2 h-0.5 z-20 bg-red-700 animate-border"></div>
          )}
          <div className="px-4 text-lg text-red-700 font-semibold">
            {val.name}
          </div>
          <div className=" px-4 line-clamp-3 text-justify text-sm">
            {val.description}
          </div>
          <div className="flex pl-4 text-sm gap-2 flex-wrap">
            {val.language.map((value, ind) => {
              return (
                <div
                  key={ind}
                  className="bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 px-2 py-1 rounded-lg flex gap-2 items-center hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-red-500 text-lg group-hover:scale-110 transition-transform">
                    {value === "React.js" && <FaReact />}
                    {value === "Python" && <FaPython />}
                    {value === "HTML" && <FaHtml5 />}
                    {value === "CSS" && <FaCss3Alt />}
                    {value === "Next.js" && <RiNextjsFill />}
                    {value === "MongoDB" && <DiMongodb />}
                    {value === "JavaScript" && <FaJs />}
                    {value === "PHP" && <FaPhp />}
                    {value === "Express.js" && <SiExpress />}
                    {value === "MySQL" && <SiMysql />}
                    {value === "TypeScript" && <SiTypescript />}
                  </span>
                  <span className="text-sm font-medium text-gray-300">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </Link>
      ))}
    </div>
  );
};
