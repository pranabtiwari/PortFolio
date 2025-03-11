import React from "react";
import avatar from "../../assets/sit.png";
import TextChange from "../../TestChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="open-sans-pampon text-sm md:text-2xl tracking-tight font-serif ">
          Full-stack developer skilled in React, Node.js, PHP, and PostgreSQL,
          passionate about building dynamic and efficient web applications. I
          enjoy problem-solving, optimizing databases, and creating seamless
          user experiences.
        </p>

        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
    duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() =>
            document
              .getElementById("Footer")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>
      <div>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Home;
