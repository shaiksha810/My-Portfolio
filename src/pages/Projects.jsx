// import React from 'react';
// import taskmanager from '../assets/taskmanagerai.jpg';
// import jsroadmap from '../assets/jsroadmap.png';

// const projects = [
//   {
//     id: 1,
//     title: 'Javascript Learning Roadmap',
//     image: jsroadmap,
//     demoLink: 'https://java-script-learning-roadmap.vercel.app/',
//     githubLink: 'https://github.com/shaiksha810/JavaScript-Learning-Roadmap',
//   },
//   {
//     id: 2,
//     title: 'TaskManager-AI',
//     description: 'Real-time chat app using Socket.io with multiple rooms and private chats.',
//     image: taskmanager,
//     demoLink: 'https://taskmanagerai.vercel.app/',
//     githubLink: 'https://github.com/shaiksha810/TaskMaster-AI',
//     Techstack: ['html', 'css', 'js'],
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="bg-[#ffffff] text-[#000000] py-8 px-3" id="projects">
//       <div className="max-w-6xl mx-auto text-center mt-8">
//         <h2 className="text-4xl font-bold text-[#000000] mb-8">My Projects</h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[#0077b6]/40 transition-transform transform hover:scale-105 duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-44 object-contain"
//               />

//               <div className="p-4 flex flex-col justify-between h-48">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1 text-[#ffffff]">
//                     {project.title}
//                   </h3>
//                   <p className="text-[#d1d1d1] text-sm">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div className="flex justify-between mt-3">
//                   {project.demoLink && (
//                     <a
//                       href={project.demoLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-[#0077b6] text-white px-3 py-1.5 rounded hover:bg-[#005f8c] transition text-sm"
//                     >
//                       Live Demo
//                     </a>
//                   )}

//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="border-2 border-[#0077b6] px-3 py-1.5 rounded text-[#ffffff] hover:bg-[#0077b6] hover:text-white transition text-sm"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react"

import taskmanager from '../assets/taskmanagerai.jpg';
import jsroadmap from '../assets/jsroadmap.png';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Javascript Learning Roadmap",
    description:
      "An interactive roadmap for mastering JavaScript — includes topics, tips, and structured learning flow for beginners to pros.",
    image: jsroadmap,
    demoLink: 'https://java-script-learning-roadmap.vercel.app/',
    githubLink: "https://github.com/shaiksha810/JavaScript-Learning-Roadmap",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    title: "TaskManager-AI",
    description:
      "An AI-powered task management app that helps you organize, prioritize, and track your daily goals seamlessly.",
    image: taskmanager,
    demoLink: "https://taskmanagerai.vercel.app/",
    githubLink: "https://github.com/shaiksha810/TaskMaster-AI",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
];

export default function Projects() {
  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-16 px-4 md:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-md hover:shadow-[#0077b6]/40 transition-all duration-300`}
            >
              {/* ---- Image ---- */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[80vw] h-56 md:h-[60vh] object-cover"
                />
              </div>

              {/* ---- Content ---- */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold mb-12">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* ---- Tech Stack ---- */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#0077b6] text-white px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ---- Buttons ---- */}
                <div className="flex gap-4 mt-2 justify-center items-center">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0077b6] text-white px-4 py-2 rounded hover:bg-[#005f8c] transition text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  <div className="flex flex-row">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-[#0077b6] text-[#0077b6] px-4 py-2 rounded hover:bg-[#0077b6] hover:text-white transition text-sm"
                    >
                      <FaGithub size={20} className="text-black" />
                      <span>Source Code</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
