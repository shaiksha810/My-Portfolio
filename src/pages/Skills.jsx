import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPython, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div>
      <section className="bg-[#E3E3FF] text-[#303139] py-16 font-bold" id="skills">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#000000] mb-14">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaHtml5 size={60} className="text-orange-500" />
              <p className="mt-2 text-lg">HTML</p>
            </div>

            <div className="flex flex-col items-center">
              <FaCss3Alt size={60} className="text-blue-500" />
              <p className="mt-2 text-lg">CSS</p>
            </div>

            <div className="flex flex-col items-center">
              <FaJsSquare size={60} className="text-yellow-500" />
              <p className="mt-2 text-lg">JavaScript</p>
            </div>

            <div className="flex flex-col items-center">
              <FaReact size={60} className="text-cyan-500" />
              <p className="mt-2 text-lg">ReactJS</p>
            </div>

            <div className="flex flex-col items-center">
              <FaNodeJs size={60} className="text-green-500" />
              <p className="mt-2 text-lg">NodeJS</p>
            </div>

            <div className="flex flex-col items-center">
              <SiExpress size={60} className="text-green-500" />
              <p className="mt-2 text-lg">ExpressJS</p>
            </div>

            <div className="flex flex-col items-center">
              <SiMongodb size={60} className="text-green-500" />
              <p className="mt-2 text-lg">MongoDB</p>
            </div>

            <div className="flex flex-col items-center">
              <SiPython size={60} className="text-blue-500" />
              <p className="mt-2 text-lg">Python</p>
            </div>

            <div className="flex flex-col items-center">
              <SiTailwindcss size={60} className="text-blue-500" />
              <p className="mt-2 text-lg">Tailwindcss</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills