import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    // <h1 className='text-white text-5xl'>Home</h1>
      <section className="min-h-screen flex items-center justify-center bg-[#2a2d3a] text-[#ffffff] px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-5xl font-bold mb-6 text-[#ffffff]">Hi, I'm a Full Stack Developer</h1>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I build dynamic, responsive, and user-friendly web applications using modern technologies like 
            <span className="text-[#ffffff]"> React.js</span>, 
            <span className="text-[#ffffff]"> Node.js</span>, and 
            <span className="text-[#ffffff]"> MongoDB</span>.
          </p>
  
          <div className="flex justify-center space-x-6">
            <NavLink 
              to="/projects"
              className="text-white px-6 py-3 rounded-md font-medium border-2 hover:bg-gray-600 transition"
            >
              View Projects
            </NavLink>
            <NavLink 
              to="/contact"
              className="border-2 border-yellow-400 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </section>
  )
}

export default Home