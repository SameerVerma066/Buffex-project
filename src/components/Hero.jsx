import React from "react";
import {Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { TextEffect } from "../components/text-effect";
import white from "../assets/photos/interior.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative w-full h-screen flex items-center px-8 md:px-20 bg-gray-900"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }} // Reduced duration for faster section animation
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={white}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white max-w-2xl text-left space-y-6">
        {/* Hero Title with Animated Text */}
        <h1 className="text-4xl md:text-6xl font-bold">
          <TextEffect
            per="char"
            delay={0.4} // Reduced delay before animation starts
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }, // Faster stagger effect
                },
              },
              item: {
                hidden: { opacity: 0, rotateX: 90, y: 10 },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: { duration: 0.3 }, // Faster duration for each item
                },
              },
            }}
          >
            <span className="text-yellow-400 font-oswald">
              Detailing <span className="text-white">Your</span> <br/><span className="text-yellow-400">Car</span><span className="text-white"> Has Never <br/>Been Easier</span>
            </span>
          </TextEffect>
        </h1>

        {/* Hero Subtitle */}
        <motion.p
          className="text-lg md:text-xl font-nunito"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }} // Faster duration and reduced delay
        >
          We provide high-quality car detailing services to keep your ride
          looking spotless.
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex justify-start space-x-4">
        <Link to="/our-services" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-gold rounded-full shadow-md group">
         <span classname="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gold group-hover:translate-x-0 ease">
         <svg classname="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
         </span>
         <span classname="absolute flex items-center justify-center w-full h-full font-nunito text-white transition-all duration-300 transform group-hover:translate-x-full ease">Our Services</span>
         <span classname="relative invisible">Our Services</span>
          </Link>
          <ScrollLink 
         to="footer" 
         smooth={true} 
        duration={1500} 
        offset={-50} 
         className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-gold rounded-full shadow-md group cursor-pointer"
>
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gold group-hover:translate-x-0 ease">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full font-nunito text-white transition-all duration-300 transform group-hover:translate-x-full ease">
      Contact Us
    </span>
    <span className="relative invisible">Contact Us</span>
  </ScrollLink>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
