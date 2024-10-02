const services = [
  { id: "section1", name: "App Development" },
  { id: "section2", name: "Data Science" },
  { id: "section3", name: "Cloud & DevOps" },
  { id: "section4", name: "Iot & Automation" },
  { id: "section5", name: "System Design" },
  { id: "section6", name: "Ui/Ux" },
  { id: "section7", name: "Cyber Security" },

  // Add more services here...
];
export default function Sidebar() {
  return (
    <ul className="border-r-1 sticky top-20 h-screen   list-none self-start border-r-2 bg-white py-[3rem]">
      {services.map((service, ind) => (
        <li
          key={ind}
          id={`menu-${service.id}`}
          className="  w-[19rem] px-13 py-5  hover:bg-gradient-to-r hover:from-white hover:to-[#1352fd47]  hover:text-navy "
          // className="my-4  cursor-pointer border-navy px-[5rem] py-3 text-center text-[1rem] font-bold text-navy hover:text-white focus:bg-gradient-to-l focus:from-navy focus:to-gray-300"
        >
          <a
            className="   inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text text-xl   "
            href={`#${service.id}`}
          >
            {service.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
