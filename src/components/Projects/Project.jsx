import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="Project"
      className="py-12 px-8 flex text-white flex-wrap gap-5 justify-center"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white w-full text-center mb-6">
        Projects
      </h1>

      <ProjectCard
        title="Employee Management System"
        main="Developed with PHP, MySQL, and Bootstrap, this system tracks employee attendance, leave requests, and dispute management."
      />

      <ProjectCard
        title="Portfolio Website"
        main="A modern and responsive personal portfolio built with React and Tailwind CSS to showcase projects and experience."
        link="https://port-folio-pranabtiwaris-projects.vercel.app"
      />
    </div>
  );
};

export default Projects;
