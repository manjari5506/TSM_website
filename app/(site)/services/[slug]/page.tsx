import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "../page";
import Service from "@/components/services/Service";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="   ">
      <div className="relative  mb-[5rem]">
        <div className="relative z-1 w-[50rem] px-[10rem] pt-[15rem] ">
          <h1 className=" py-3 font-playfair text-5xl font-bold   text-navy">
            App Development
          </h1>
          <p className="py-3 text-lg ">
            Crafting innovative, scalable applications tailored to your business
            needs
          </p>
          <button className="mt-5 rounded-3xl bg-navy px-9 py-3 hover:opacity-80">
            Contact Us
          </button>
        </div>
        <img
          src="/images/app-development.jpg"
          className=" absolute top-0 h-[40rem] w-full bg-cover"
        />
      </div>
      <Service />
    </section>

    // <div className="mx-auto max-w-4xl p-4">
    //   <h1 className="mb-4 text-3xl font-bold">{service.name}</h1>
    //   <p className="mb-6 text-lg">{service.description}</p>
    //   <h2 className="mb-4 text-2xl font-semibold">Key Features:</h2>
    //   <ul className="mb-6 list-disc pl-6">
    //     {service.features.map((feature, index) => (
    //       <li key={index} className="mb-2">
    //         {feature}
    //       </li>
    //     ))}
    //   </ul>
    //   <Link href="/services" className="text-blue-600 hover:underline">
    //     ← Back to all services
    //   </Link>
    // </div>
  );
}
