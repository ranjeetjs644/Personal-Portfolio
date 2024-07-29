import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { RxCross2 } from "react-icons/rx";
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-2 md:w-100%] h-auto mx-auto fixed top-0 left-0 right-0 z-40 transition-all duration-300
      ${
        scrollPosition > 50
          ? " bg-opacity-80 backdrop-blur-sm"
          : "bg-transparent"
      }
      `}
    >
      <nav
        className={`w-[85%] sm:w-[69%] py-4 pr-2 pl-1 md:py-0 md:mt-3 md:px-4 flex items-center justify-between my-2 mt-0  mx-auto transition-all duration-300 
        `}
      >
        <a
          href="/"
          className="md:pl-0 flex items-center w-full  py-2 relative "
        >
          <Logo width={50} />
        </a>

        {/* Navigation links */}
        <ul
          className={`p-6 px-8 py-6 bg-gray-950 opacity-90 font-semibold text-gray-100 font-inter text-sm absolute -top-2 -left-0 w-full flex flex-col items-start gap-y-6 transition-transform transform duration-500 ${
            isMenuOpen ? "translate-y-20" : "-translate-y-full"
          } md:top-0 md:relative md:flex-row md:gap-x-2 md:transform-none md:bg-transparent md:text-gray-200 md:py-3`}
        >
          {["Home", "About", "Skills", "Projects"].map((section) => (
            <li
              className={`md:py-2 md:px-4 cursor-pointer relative hover:font-bold  group`}
              key={section}
            >
              <Link
                to={`${section.toLowerCase()}`} // Link to the section id
                className="flex items-center justify-center gap-1 font-Inter uppercase tracking-wide text-xs text-[#5eead4] hover:text-gray-400   "
                smooth={true} // Enable smooth scrolling
                duration={500} // Scroll duration in milliseconds
                offset={-110} // Offset for fixed header
                onClick={closeMenu}
              >
                {section}
              </Link>
              {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-2/3"></div> */}
            </li>
          ))}
        </ul>

        {/* Menu Toggle Button */}
        <div
          className="relative md:hidden transition-all duration-500 mr-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <RxCross2 className="text-2xl text-white" />
          ) : (
            <FaBarsProgress className="text-2xl text-white" />
          )}
        </div>

        {/* Contact Button */}
        <div>
          <Link
            to="contact" // Link to the contact section
            smooth={true} // Enable smooth scrolling
            duration={50} // Scroll duration in milliseconds
            offset={-70} // Offset for fixed header
            className={`hidden md:block border border-gray-600 shadow-sm text-[#5eead4] text-[12px] px-3 py-1 rounded-md font-semibold font-Inter duration-200 transition-all hover:custom-glow cursor-pointer`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
