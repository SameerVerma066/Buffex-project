import React, { useEffect } from "react";
import AOS from "aos";


const testimonials = [
  { name: "Aryan Singhania", review: "I recently got the Premium Car Wash and Interior Cleaning services, and I couldn't be happier! My car looks brand new, inside and out. The attention to detail and quality service were top-notch." },
  { name: "Gaurav singh", review: "I opted for Ceramic Coating and Paint Protection Film (PPF) to preserve my car’s shine, and the results are stunning. The team was professional, and my car now has an incredible gloss with long-lasting protection." },
  { name: "Jay Dixit", review: "I had Graphene Coating and Rodent Protection Spray applied to my car, and I’m thrilled with the outcome. The finish is sleek and water-repellent, and I no longer worry about rodent damage. Fantastic service!" },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animation to occur multiple times
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black py-16"
      data-aos="fade-left"
    >
      <h2 className="text-3xl md:text-4xl font-oswald text-center mb-10">
        TESTIMONIALS
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4"
        data-aos="fade-left"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg bg-gray-100 text-black w-full"
          >
            <h3 className="text-xl font-nunito font-semibold">
              {testimonial.name}
            </h3>
            <p className="mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
