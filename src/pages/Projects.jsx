import React from 'react';
import taskmanager from '../assets/taskmanagerai.jpg';
import jsroadmap from '../assets/jsroadmap.png';

const projects = [
  {
    id: 1,
    title: 'Javascript Learning Roadmap',
    image: jsroadmap,
    demoLink: 'https://java-script-learning-roadmap.vercel.app/',
    githubLink: 'https://github.com/shaiksha810/JavaScript-Learning-Roadmap',
  },
  {
    id: 2,
    title: 'TaskManager-AI',
    description: 'Real-time chat app using Socket.io with multiple rooms and private chats.',
    image: taskmanager,
    demoLink: 'https://taskmanagerai.vercel.app/',
    githubLink: 'https://github.com/shaiksha810/TaskMaster-AI',
    Techstack: ['html', 'css', 'js'],
  },
];

export default function Projects() {
  return (
    <section className="bg-[#ffffff] text-[#000000] py-8 px-3" id="projects">
      <div className="max-w-6xl mx-auto text-center mt-8">
        <h2 className="text-4xl font-bold text-[#000000] mb-8">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[#0077b6]/40 transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-contain"
              />

              <div className="p-4 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#ffffff]">
                    {project.title}
                  </h3>
                  <p className="text-[#d1d1d1] text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between mt-3">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0077b6] text-white px-3 py-1.5 rounded hover:bg-[#005f8c] transition text-sm"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#0077b6] px-3 py-1.5 rounded text-[#ffffff] hover:bg-[#0077b6] hover:text-white transition text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
