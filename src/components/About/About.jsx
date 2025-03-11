import React from "react";
import AboutImg from "../../assets/About.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
      id="About"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            className="md:h-80 rounded-lg shadow-lg"
            src={AboutImg}
            alt="About Me"
          />

          <ul className="md:ml-8">
            {[
              {
                title: "Front-End",
                description:
                  "Specialized in React, Tailwind CSS, and modern UI/UX development for creating dynamic and user-friendly web interfaces.",
              },
              {
                title: "Back-End",
                description:
                  "Experienced in Node.js, Express, and PostgreSQL, building efficient and scalable server-side applications.",
              },
              {
                title: "Blockchain",
                description:
                  "Exploring decentralized applications, smart contracts, and blockchain security to create transparent digital solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1 text-[#465697]" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-md leading-tight text-gray-600">
                    {item.description}
                  </p>
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
