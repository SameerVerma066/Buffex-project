import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import owner from "../assets/photos/OwnerBuffx.png";

const About = () => {
  const [bgColor, setBgColor] = useState("bg-white text-black");

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000, // Set the duration for AOS animations
      once: false, // Ensure the animation happens once
    });

    // Handle scroll to change background color of section
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`py-16 px-6 transition-colors duration-2000 ${bgColor}`}
      data-aos="fade-right" // AOS animation effect
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-3xl md:text-5xl font-oswald">About Us</h2>
          <p className="font-nunito text-lg text-gray-600">
            Founded in 2023 by Ahmad Ali, BuffX is a premium car detailing shop
            specializing in Ceramic Coatings and Paint Protection Film (PPF) to
            shield your car from rock chips, bird droppings, and daily wear. Our
            high-quality, nearly invisible PPF keeps your car looking
            showroom-ready for up to 8-10 years. We offer a full range of
            services, including exterior polishing, interior cleaning, and
            paint correction, using top-tier products and state-of-the-art
            equipment. Whether it’s a luxury car, daily driver, or classic,
            BuffX ensures your vehicle stays stunning and retains its value. We
            are currently offering a special discount on PPF for new customers.
            Protect your car and save on future repairs with BuffX’s expert
            care!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 w-full">
          <img
            src={owner}
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
