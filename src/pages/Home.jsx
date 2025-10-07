import React from 'react'

const Home = () => {

  return (
    // <h1 className='text-white text-5xl'>Home</h1>
      <section className=" flex items-center justify-center bg-[#E3E3FF] text-[#303139] px-4 py-12" id="home">
        <div className="mt-32 text-center max-w-xl flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold mb-6 text-[#303139]">Hi👋, I'm a Shaiksha,</h1>
          <div className='mt-6'>
          <h2 className="text-5xl font-bold mb-6 text-[#303139]">
            Full Stack Developer
              (MERN & Python)  
          </h2>
          <h4 className="text-5xl font-bold mb-6 text-[#303139]">
          </h4>          
          </div>
          <p className="text-lg text-[#303139] mb-8 leading-relaxed font-medium mt-2">
            I build dynamic, responsive, and user-friendly web applications using modern technologies like 
            <span className="text-[#303139]"> React.js</span>, 
            <span className="text-[#303139]"> Node.js</span>, and 
            <span className="text-[#303139]"> MongoDB</span>.
          </p>
        </div>
      </section>
  )
}

export default Home