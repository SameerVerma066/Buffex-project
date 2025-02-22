import { useState, useEffect } from "react";
import AOS from "aos";


const accordionGroup1 = [
  {
    id: 1,
    title: "Premium Car Wash",
    content: "A thorough cleaning process that removes dirt and grime from the car’s exterior and interior, leaving it spotless and refreshed.",
  },
  {
    id: 2,
    title: "Detailing",
    content: "A deep cleaning and restoration process for both the interior and exterior, ensuring your vehicle looks and feels like new.",
  },
  {
    id: 3,
    title: "Ceramic Coating",
    content: "A protective layer that bonds with the car’s paint, offering long-lasting shine and protection from scratches, UV rays, and water spots.",
  },
  {
    id: 8,
    title: "Rodent Protection Spray",
    content: "A specially formulated spray that helps protect the car’s wiring and engine bay from rodent damage, keeping your vehicle safe.",
  },
];

const accordionGroup2 = [
  {
    id: 4,
    title: "Graphene Coating",
    content: "A durable, heat-resistant coating that provides superior protection, reduces water spots, and offers enhanced scratch resistance.",
  },
  {
    id: 5,
    title: "Paint Protection Film (PPF)",
    content: "A transparent film applied to the car’s paint that protects against chips, scratches, and fading while maintaining the original shine.",
  },
  {
    id: 6,
    title: "Interior Cleaning",
    content: "A deep cleaning service for the car’s seats, carpets, dashboard, and upholstery, ensuring a fresh and hygienic interior.",
  },
  {
    id: 7,
    title: "Sun Control Film",
    content: "A film applied to car windows to reduce glare, block harmful UV rays, and keep the interior cooler on sunny days.",
  },
];



function AccordionItem({ title, content, isExpanded, onToggle }) {
  return (
    <div
      className={`bg-white  rounded-3xl overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-96" : "max-h-20"
      }`}
    >
      <div
        className="flex justify-between items-start p-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="text-1xl font-bold">{title}</div>
        <i
          className={`bx bx-chevron-right text-4xl transition-all duration-300 ${
            isExpanded ? "rotate-90" : ""
          }`}
        ></i>
      </div>
      <div
        className={`px-4 py-4 overflow-hidden transition-all duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

function AccordionGroup({ data }) {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col space-y-3 max-w-md">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isExpanded={expandedId === item.id}
          onToggle={() => toggleExpand(item.id)}
        />
      ))}
    </div>
  );
}

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animation to occur multiple times
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-black text-black p-4">
      <h1
        className="text-5xl p-8 font-oswald text-white mb-8"
        data-aos="fade-up-right"
      >
        OUR SERVICES
      </h1>
      <div
        className="p-6 flex flex-col lg:flex-row lg:justify-evenly items-center gap-6 font-nunito"
        data-aos="fade-up-right"
      >
        <AccordionGroup data={accordionGroup1} />
        <AccordionGroup data={accordionGroup2} />

      </div>
    </div>
  );
}

export default Services;
