'use client';
import { useParams } from "next/navigation";

const serviceData = {
  "app-development": {
    title: "App Development",
    description:
      "We provide end-to-end app development services across platforms.",
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    description:
      "Optimize your infrastructure with cloud solutions and DevOps strategies.",
  },
  "data-science": {
    title: "Data Science",
    description:
      "Unlock insights and drive decisions with our data science expertise.",
  },
  // "iot-automation": {
  //   title: "IoT & Automation",
  //   description:
  //     "Integrating smart IoT solutions for automation and optimization.",
  // },
  // Add other services as needed
};

export default function ServiceDetail() {
  const params = useParams();
  const { serviceId } = params;
  console.log(serviceId); // Get the dynamic serviceId from the route

  const service = serviceData;

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
}
