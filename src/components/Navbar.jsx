import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo/logonew.png"; // Import the logo image

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [active, setActive] = useState(null);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300);

    const handleScroll = () => {
      if (window.scrollY < 200) {
        if (location.pathname === "/our-services") {
          setBgColor("bg-white");
          setTextColor("text-black");
        } else {
          setBgColor("bg-transparent");
          setTextColor("text-white");
        }
      } else {
        setBgColor("bg-black");
        setTextColor("text-white");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
    setMenuOpen(false);
  };

  const scrollToSection = (section) => {
    scroll.scrollTo(document.getElementById(section).offsetTop, {
      duration: 1500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full ${bgColor} shadow-md z-50 transition-all duration-700`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : -50 }}
      transition={{ duration: 0 }}
    >
      <div className="max-w-[85rem] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="w-24 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <nav
          onMouseLeave={() => setActive(null)}
          className="hidden md:flex space-x-6 items-center"
        >
          <HoveredLink
            className={textColor}
            onClick={() => handleNavClick("home")}
          >
            Home
          </HoveredLink>
          <HoveredLink
            className={textColor}
            onClick={() => handleNavClick("about")}
          >
            About
          </HoveredLink>

          {/* Services Dropdown */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setActive("Services")}
            onMouseLeave={() => setActive(null)}
          >
            <motion.p
              className={`cursor-pointer px-2 py-2 rounded-md transition-all hover:text-yellow-500 ${textColor}`}
              onClick={() => navigate("/our-services")}
            >
              Services
            </motion.p>

            {active === "Services" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={transition}
                className="absolute top-full left-0 pt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg"
              >
                <motion.div className="p-4 space-y-2">
                  <ProductItem
                    title="Our Services"
                    description="Different types of Services we provide for your car"
                    href="/our-services"
                  />
                  <ProductItem
                    title="Works"
                    description="See our work in action"
                    href="/our-services"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>

          <HoveredLink
            className={textColor}
            onClick={() => handleNavClick("testimonials")}
          >
            Testimonials
          </HoveredLink>

          {/* Smooth scroll to the footer */}
          <ScrollLink
            to="footer" // Footer section ID
            smooth={true}
            duration={1500} // Duration of the scroll
            offset={-50} // Adjust for navbar height
            className={`cursor-pointer transition-all hover:text-yellow-500 ${textColor}`}
          >
            Contact Us
          </ScrollLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-500 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-0 w-full bg-black p-6 text-white"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <HoveredLink onClick={() => handleNavClick("home")}>
                  Home
                </HoveredLink>
              </li>
              <li>
                <HoveredLink onClick={() => handleNavClick("about")}>
                  About
                </HoveredLink>
              </li>
              <li>
                <HoveredLink onClick={() => navigate("/our-services")}>
                  Services
                </HoveredLink>
              </li>
              <li>
                <HoveredLink onClick={() => handleNavClick("testimonials")}>
                  Testimonials
                </HoveredLink>
              </li>
              <li>
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={1500}
                  offset={-50}
                  className="cursor-pointer hover:text-yellow-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export const HoveredLink = ({ children, className, ...rest }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      {...rest}
      className={`cursor-pointer transition-all hover:text-yellow-500 ${className}`}
    >
      {children}
    </motion.span>
  );
};

export const ProductItem = ({ title, description, href }) => {
  return (
    <div
      onClick={() => (window.location.href = href)}
      className="flex space-x-2 p-2 hover:bg-gray-200 cursor-pointer rounded-md"
    >
      <div>
        <h4 className="text-md font-bold mb-1 text-black">{title}</h4>
        <p className="text-gray-600 text-sm max-w-[10rem]">{description}</p>
      </div>
    </div>
  );
};

export default Navbar;
