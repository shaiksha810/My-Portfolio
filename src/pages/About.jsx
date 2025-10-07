import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    // <h1 className='text-white text-5xl'>About</h1>

    <section className="min-h-[90vh] flex items-center justify-center bg-[#2a2d3a] text-white px-4" id="about">
      <div className=" text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#ffffff]">About Me</h1>

        <p className="text-lg leading-relaxed text-[#ffffff]">
          Hello! I'm a <span className="text-[#ffffff]">Full Stack Developer</span> with a passion for building dynamic and responsive web applications.
          <br /><br />
          I specialize in <span className="text-[#ffffff]">React.js</span> and <span className="text-[#ffffff]">Node.js</span>, creating seamless user experiences and efficient backend systems.
          <br /><br />
          I love solving real-world problems with code and constantly learning new technologies to improve my skills.
        </p>

        <div className="mt-8">
          <a
            href="/Shaiksha_Resume.pdf"   // public folder mein file ka path
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            View My Resume
          </a>

        </div>
      </div>
    </section>
  )
}

export default About