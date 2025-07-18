import { NavLink } from 'react-router-dom';

 function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400  border-yellow-400 transition duration-300"
      : "hover:text-yellow-400 transition duration-300";

  return (
    <header className="bg-[#2a2d3a] text-[#ffffff] p-4 shadow-md">
      <nav className="flex justify-center space-x-8 text-lg font-medium">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/skills" className={linkClass}>Skills</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </header>
  );
}


export default Header;

// import { NavLink, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const tabs = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Skills', path: '/skills' },
//   { name: 'Projects', path: '/projects' },
//   { name: 'Contact', path: '/contact' }
// ];

// export default function Header() {
//   const location = useLocation();

//   return (
//     <header className="bg-[#2a2d3a] text-[#ffffff] p-4 shadow-md">
//       <nav className="relative flex justify-center space-x-4 md:space-x-8 text-lg font-medium px-4 py-2 bg-[#2a2d3a] rounded-xl">

//         {tabs.map((tab) => {
//           const isActive = location.pathname === tab.path;

//           return (
//             <NavLink
//               key={tab.path}
//               to={tab.path}
//               className="relative px-4 py-2 rounded-xl"
//             >
//               {isActive && (
//                 <motion.div
//                   layoutId="activeTab"
//                   className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//               <span className={`relative z-10 ${isActive ? "text-[#ffffff] font-semibold" : "text-[#ffffff] hover:text-yellow-400 transition"}`}>
//                 {tab.name}
//               </span>
//             </NavLink>
//           );
//         })}

//       </nav>
//     </header>
//   );
// }
