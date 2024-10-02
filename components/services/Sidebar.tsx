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

  // Add more services here...
];
export default function Sidebar() {
  return (
    <ul className="border-r-1 sticky top-20 h-screen w-[50rem] list-none self-start border-r-2 bg-white">
      {services.map((service, ind) => (
        <li
          key={ind}
          id={`menu-${service.id}`}
          className="text-md  my-3.5 cursor-pointer border-navy px-[3rem] py-4 text-center font-bold text-navy hover:bg-gradient-to-l hover:from-navy hover:to-gray-300 hover:text-white"
        >
          {service.name}
        </li>
      ))}
    </ul>
  );
}
