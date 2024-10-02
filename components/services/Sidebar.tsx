import { useState } from "react";

const services = [
  { id: "section1", name: "App Development" },
  { id: "section2", name: "Data Science" },
  { id: "section3", name: "Cloud & DevOps" },
  { id: "section4", name: "Iot & Automation" },
  { id: "section5", name: "Wordpress Development" },
  { id: "section6", name: "Big Data" },
  { id: "section7", name: "UI/UX" },
  { id: "section8", name: "Cyber Security" },
  { id: "section9", name: "System Design" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveId(id); // Set the active ID
    }
  };

  return (
    <ul className="border-r-1 sticky top-20 h-screen list-none self-start border-r-2 bg-white py-[3rem]">
      {services.map((service, ind) => (
        <li
          key={ind}
          id={`menu-${service.id}`}
          className={`w-[19rem] cursor-pointer px-13 py-5 hover:bg-gradient-to-r hover:from-white hover:to-[#1352fd47] hover:text-navy ${
            activeId === service.id ? "bg-gray-200 text-navy" : ""
          }`}
          onClick={() => handleClick(service.id)}
        >
          <span className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text text-xl">
            {service.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
