import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center bg-[#FFFFFF] text-[#303139] p-2">About Me</h1>
      <section
        className="min-h-[90vh] flex items-center justify-center bg-[#FFFFFF] text-[#303139] px-6"
        id="about"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-end gap-10">

          {/* ---- Left: Text ---- */}
          <div className="flex-1 text-center  md:text-left">

            <p className="text-lg leading-relaxed mb-8 text-[#303139] font-bold">
              I'm a Full Stack Developer
              with a passion for building dynamic and responsive web applications.
              <br /><br />
              I specialize in <span className="text-[#303139]">React.js</span> and
              <span className="text-[#303139]"> Node.js</span>, creating seamless user experiences
              and efficient backend systems.
              <br /><br />
              I love solving real-world problems with code and constantly learning
              new technologies to improve my skills.
            </p>

            <a
              href="/Shaiksha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-yellow-400 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              View My Resume
            </a>
          </div>

          {/* ---- Right: Image ---- */}
          <div className="flex-1 flex justify-center">
            <img
              src="/graphic-designer.png"
              alt="About"
              className="rounded-2xl shadow-lg w-[300px] h-[400px] object-fit md:w-[400px] lg:w-[450px] object-cover"
            />
          </div>

        </div>
      </section>

    </>
  )
}

export default About