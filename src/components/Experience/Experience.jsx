import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPhp,
  FaGoogle,
  FaAmazon,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">Experience</h1>
      
      <div className="flex flex-wrap items-center justify-around">
        {/* Skill Icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {[{ icon: <FaHtml5 color="#E34F26" size={50} /> },
            { icon: <FaCss3 color="#1572b6" size={50} /> },
            { icon: <FaReact color="#61DAFB" size={50} /> },
            { icon: <FaJs color="#F7DF1E" size={50} /> },
            { icon: <FaPhp color="#777BB4" size={50} /> },
            { icon: <SiPostgresql color="#336791" size={50} /> }
          ].map((item, index) => (
            <span key={index} className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              {item.icon}
            </span>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <MdWork color="#FFD700" size={50} />
            <span>
              <h2 className="text-white text-lg font-semibold">Intern - Umid Infotech</h2>
              <p className="text-sm text-gray-300 leading-tight font-thin">
                Currently working as a Web Development Intern, contributing to real-world projects.
              </p>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <GiAchievement color="#FF5733" size={50} />
            <span>
              <h2 className="text-white text-lg font-semibold">Hackathon - BML Munjal University</h2>
              <p className="text-sm text-gray-300 leading-tight font-thin">
                Participated in a competitive hackathon, solving real-world problems through innovative tech solutions.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
