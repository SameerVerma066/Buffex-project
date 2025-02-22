import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/scrolltotop";
import loader from "../assets/loader/loader.gif"; // Import the logo

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // State to control loading screen

  // Simulate loading with setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
    }, 1500);
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  // Loader screen
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <img src={loader} alt="Loading Logo" className="w-32 h-32 animate-spin" />
      </div>
    );
  }

  // Main content
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default Home;
