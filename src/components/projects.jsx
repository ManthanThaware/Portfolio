import React from "react";
import { projectData } from "./projectData";

export default function Projects() {
  return (
    <>
      {projectData.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20"
        >
          <h4 className="text-xl font-semibold mb-2">
            {project.title}
          </h4>
          <p className="text-gray-400 mb-4">
            {project.desc}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub →
          </a>
        </div>
      ))}
    </>
  );
}