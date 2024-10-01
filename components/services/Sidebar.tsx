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
    <ul className="border-r-1 sticky top-20 h-screen w-[50rem] list-none self-start border-r-2 bg-white py-[7rem]">
      {services.map((service, ind) => (
        <li
          key={ind}
          id={`menu-${service.id}`}
          className="my-4  cursor-pointer border-navy px-[5rem] py-3 text-center text-lg font-bold text-navy hover:bg-gradient-to-l hover:from-navy hover:to-gray-300 hover:text-white"
        >
          {service.name}
        </li>
      ))}
    </ul>
  );
}
