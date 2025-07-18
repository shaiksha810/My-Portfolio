import React from 'react';
import taskmanager from '../assets/taskmanagerai.jpg'
import jsroadmap from '../assets/jsroadmap.png'

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
    githubLink: 'https://github.com/shaiksha810/TaskMaster-AI',
    Techstack:['html','css','js']
  },
];

export default function Projects() {
  return (
    <section className="bg-[#2a2d3a] text-[#ffffff] py-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-10">My Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/40 transition">
              <img src={project.image} alt={project.title} className="w-full h-64 object-fit" />

              <div className="p-6 flex flex-col justify-between h-64">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>

                <div className="mt-6 flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 transition text-sm"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition text-sm"
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
