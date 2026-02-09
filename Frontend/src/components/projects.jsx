// import React from "react";
// import { projectData } from "./projectData";

// export default function Projects() {
//   return (
//     <>
//       {projectData.map((project, index) => (
//         <div
//           key={index}
//           className="group bg-gray-900/80 backdrop-blur rounded-2xl p-6 
// shadow-lg border border-gray-800 
// hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
//         >
//           <h4 className="text-xl font-semibold mb-2">
//             {project.title}
//           </h4>
//           <p className="text-gray-400 mb-4">
//             {project.desc}
//           </p>
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             GitHub →
//           </a>
//         </div>
//       ))}
//     </>
//   );
// }

import { projectData } from "./projectData";

export default function Projects() {
  return (
    <>
      {projectData.map((project) => (
        <div
          key={project.title}
          className="group bg-gray-900/80 backdrop-blur rounded-2xl p-6 
          shadow-lg border border-gray-800 
          hover:border-blue-500/40 hover:-translate-y-1 transition-all"
        >
          <h4 className="text-xl font-semibold mb-2">
            {project.title}
          </h4>

          <p className="text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub →
          </a>
        </div>
      ))}
    </>
  );
}
