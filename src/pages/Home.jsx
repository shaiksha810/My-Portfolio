import React from 'react'

const Home = () => {

  return (
    // <h1 className='text-white text-5xl'>Home</h1>
      <section className=" flex items-center justify-center bg-[#2a2d3a] text-[#ffffff] px-4" id="home">
        <div className="mt-32 text-center max-w-xl flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold mb-6 text-[#ffffff]">Hi, I'm a Shaiksha,</h1>
          <div className='mt-6'>
          <h2 className="text-5xl font-bold mb-6 text-[#ffffff]">
            Full Stack Developer
              (MERN & Python)  
          </h2>
          <h4 className="text-5xl font-bold mb-6 text-[#ffffff]">
          </h4>          
          </div>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I build dynamic, responsive, and user-friendly web applications using modern technologies like 
            <span className="text-[#ffffff]"> React.js</span>, 
            <span className="text-[#ffffff]"> Node.js</span>, and 
            <span className="text-[#ffffff]"> MongoDB</span>.
          </p>
        </div>
      </section>
  )
}

export default Home