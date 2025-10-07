import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#1f2029] text-white scroll-smooth text-sm">
      <Header />
      <main >
        <section id="home"><Home /></section>
        <hr className="h-0.5"/>
        <section id="about"><About /></section>
        <hr className="h-0.5"/>
        <section id="skills"><Skills /></section>
        <hr className="h-0.5"/>
        <section id="projects"><Projects /></section>
        <hr className="h-0.5"/>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
