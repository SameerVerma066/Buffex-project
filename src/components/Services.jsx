import { useState, useEffect } from "react";
import AOS from "aos";

const accordionGroup1 = [
  {
    id: 1,
    title: "Premium Car Wash",
    content:
      "Our premium car wash includes a multi-step process to remove dirt, grime, and contaminants from every inch of your vehicle. We use high-quality, pH-balanced shampoos that ensure your car’s paint remains unharmed while delivering a spotless shine. Our experts focus on both the exterior and interior, vacuuming seats, cleaning dashboards, and ensuring every crevice is dirt-free. This service is ideal for maintaining your vehicle’s cleanliness and preventing buildup that could damage the paint over time.",
  },
  {
    id: 2,
    title: "Detailing",
    content:
      "Our detailing service goes beyond a regular wash. It’s a deep-cleaning and restoration process that enhances your car’s overall look and feel. We meticulously clean every surface, including door panels, vents, and upholstery, using specialized tools and eco-friendly products. The exterior is polished and treated to restore the paint’s shine, while the interior receives a deep-clean treatment to remove stains, odors, and bacteria. If you want your car to feel brand new again, this service is for you.",
  },
  {
    id: 3,
    title: "Ceramic Coating",
    content:
      "Ceramic coating is a revolutionary protective layer applied to your car’s paint. It forms a strong, chemical-resistant bond that offers superior protection against UV rays, scratches, dirt accumulation, and water spots. This hydrophobic coating repels water, making cleaning much easier while maintaining a glossy, showroom-like finish for years. Unlike wax, which lasts a few months, ceramic coating provides long-term durability and enhances the car’s resistance to environmental damage.",
  },
  {
    id: 8,
    title: "Rodent Protection Spray",
    content:
      "Rodents can cause severe damage to your car’s engine bay and wiring by chewing through essential components. Our rodent protection spray is a specially formulated, non-toxic solution designed to repel rodents and prevent costly repairs. It forms a protective barrier with a scent and taste that rodents find unpleasant, keeping them away from your vehicle. This service is especially beneficial for vehicles parked in areas prone to rodent activity, ensuring your car’s electrical system remains intact and functional.",
  },
];


const accordionGroup2 = [
  {
    id: 4,
    title: "Graphene Coating",
    content:
      "Graphene coating is the latest advancement in automotive paint protection. Stronger and more flexible than traditional ceramic coatings, graphene creates a super-slick, hydrophobic surface that repels water, dirt, and contaminants. Its heat-resistant properties help reduce water spots caused by hard water drying on the paint, and its anti-static nature minimizes dust buildup. This ultra-durable protection lasts longer than traditional coatings, ensuring your car maintains its deep, glossy shine while being resistant to swirl marks and oxidation.",
  },
  {
    id: 5,
    title: "Paint Protection Film (PPF)",
    content:
      "Paint Protection Film (PPF) is an invisible, high-strength layer applied to your vehicle’s exterior to safeguard against rock chips, scratches, road debris, and UV exposure. It self-heals minor scratches and swirl marks with heat, keeping your car’s paint in pristine condition. This is an excellent investment for luxury and high-performance vehicles, or for anyone who wants to preserve their car’s resale value by maintaining a flawless exterior.",
  },
  {
    id: 6,
    title: "Interior Cleaning",
    content:
      "A car’s interior accumulates dust, dirt, food particles, and bacteria over time. Our deep interior cleaning service includes vacuuming, steam-cleaning, and sanitizing every surface, from carpets to seat upholstery. Leather seats are treated with conditioners to prevent cracking, while dashboards and door panels are polished for a fresh, like-new finish. This service not only improves aesthetics but also enhances the air quality inside your vehicle, ensuring a hygienic and comfortable driving experience.",
  },
  {
    id: 7,
    title: "Sun Control Film",
    content:
      "Sun control film is a specialized window tint that reduces heat buildup, blocks harmful UV rays, and minimizes glare inside your vehicle. This film protects passengers from sun exposure while keeping the car’s interior cool, improving fuel efficiency by reducing the need for air conditioning. Additionally, it helps prevent fading and cracking of leather or fabric seats. Our high-quality sun films come in varying tint levels, allowing you to customize the look and functionality based on your needs.",
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
