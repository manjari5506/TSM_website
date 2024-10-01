import Link from "next/link";

const services = [
  { id: "app-development", name: "App Development" },
  { id: "cloud-devops", name: "Cloud & DevOps" },
  { id: "data-science", name: "Data Science" },
  { id: "iot-automation", name: "IoT & Automation" },
  // Add other services as needed
];

export default function ServicesPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
