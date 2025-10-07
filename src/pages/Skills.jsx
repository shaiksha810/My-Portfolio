import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPython } from 'react-icons/si';

const Skills = () => {
  return (
    <div>
      <section className="bg-[#E3E3FF] text-[#303139] py-24 font-bold" id="skills">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#000000] mb-14">My Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaHtml5 size={60} className="text-orange-500" />
              <p className="mt-2 text-lg">HTML5</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaCss3Alt size={60} className="text-blue-500" />
              <p className="mt-2 text-lg">CSS3</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaJsSquare size={60} className="text-yellow-300" />
              <p className="mt-2 text-lg">JavaScript</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaReact size={60} className="text-cyan-400" />
              <p className="mt-2 text-lg">ReactJS</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaNodeJs size={60} className="text-green-500" />
              <p className="mt-2 text-lg">NodeJS</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiExpress size={60} className="text-gray-300" />
              <p className="mt-2 text-lg">ExpressJS</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiMongodb size={60} className="text-green-400" />
              <p className="mt-2 text-lg">MongoDB</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiPython size={60} className="text-blue-400" />
              <p className="mt-2 text-lg">Python</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills