// import React, { useEffect, useState } from "react";

// const Contact = () => {
//   const [bgColor, setBgColor] = useState("bg-white text-black");
//   const [inputColor, setInputColor] = useState("border-gray-300 text-black bg-white");

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("contact");
//       if (!section) return;

//       const { top, bottom } = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (top < windowHeight / 2 && bottom > windowHeight / 2) {
//         setBgColor("bg-white text-black");
//         setInputColor("border-gray-300 text-black bg-white"); // Light theme
//       } else {
//         setBgColor("bg-black text-white");
//         setInputColor("border-gray-600 text-white bg-gray-800"); // Dark theme
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section id="contact" className={`py-16 px-6 transition-colors duration-500 ${bgColor}`}>
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>

//         {/* Contact Form */}
//         <form className="space-y-4 max-w-3xl mx-auto">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-500 ${inputColor}`}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-500 ${inputColor}`}
//           />
//           <textarea
//             rows="4"
//             placeholder="Your Message"
//             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-500 ${inputColor}`}
//           ></textarea>
//           <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
