import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-lg"
          : "bg-[#FFFFFF]"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-5 py-[10px]">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#000000] tracking-wide">
          My Portfolio
        </h1>

        {/* Center Menu */}
        <div className="hidden lg:flex space-x-8 text-lg font-medium">
          {links.map((link) => (
            <HashLink
              key={link.id}
              smooth
              to={`#${link.id}`}
              className={`transition duration-300 ${
                activeSection === link.id
                  ? "text-[#0077b6] font-semibold"
                  : "text-[#000000] hover:text-[#0077b6]"
              }`}
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="hidden pr-4 lg:flex items-center space-x-5 text-2xl">
          <a
            href="https://github.com/shaiksha810"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] hover:text-[#0077b6] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shaiksha810"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] hover:text-[#0077b6] transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#000000]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={28} /> : <LuMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 w-full bg-[#FFFFFF]
          text-center space-y-4 py-5 shadow-md z-[9999] lg:hidden"
        >
          {links.map((link) => (
            <HashLink
              key={link.id}
              smooth
              to={`#${link.id}`}
              className={`block transition duration-300 ${
                activeSection === link.id
                  ? "text-[#0077b6] font-semibold"
                  : "text-[#000000] hover:text-[#0077b6]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </HashLink>
          ))}

          {/* Social Icons in Mobile Menu */}
          <div className="flex justify-center space-x-6 pt-4 text-2xl">
            <a
              href="https://github.com/shaiksha810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-[#0077b6] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shaiksha810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-[#0077b6] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
