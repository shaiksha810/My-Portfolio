import React from 'react'

const About = () => {
  return (
    <>
      <section
        className="min-h-[90vh] flex flex-col items-center justify-center bg-[#FFFFFF] text-[#303139] px-6 py-16"
        id="about"
      >
        {/* ---- Title ---- */}
        <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>

        {/* ---- Content ---- */}
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10">

          {/* --- Left (on desktop): Text --- */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg leading-relaxed mb-8 text-[#303139] font-semibold text-center mt-1.5">
              I'm a Full Stack Developer
              with a passion for building dynamic and responsive web applications.
              <br /><br />
              I specialize in <span className="font-bold">React.js</span> and
              <span className="font-bold"> Node.js</span>, creating seamless user experiences
              and efficient backend systems.
              <br /><br />
              I love solving real-world problems with code and constantly learning
              new technologies to improve my skills.
            </p>

            {/* Resume Button - Always Centered */}
            <div className="flex justify-center md:justify-center">
              <a
                href="/shaiksha_fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-yellow-400 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                View My Resume
              </a>
            </div>
          </div>

          {/* --- Right (on desktop): Image --- */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/about-1.jpg"
              alt="About"
              className="rounded-2xl shadow-lg w-[280px] h-[350px] md:w-[400px] lg:w-[450px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
