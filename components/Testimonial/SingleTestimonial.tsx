import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import "./Testimonial.scss";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, avatar, content } = review;

  return (
    <div className="testimonial-card client-section rounded-sm bg-white p-9 pt-7.5 font-kodchasan shadow-custom">
      <div className="mb-4 flex">
        <Image
          width={70}
          height={100}
          className="company-logo"
          src={image}
          alt={name}
        />
      </div>
      <p className="mb-6 text-navy">{content}</p>
      <div className="mt-auto flex items-center">
        <Image
          width={50}
          height={50}
          className="avatar-image mr-4 rounded-full"
          src={avatar}
          alt={name}
        />
        <div className="flex flex-col">
          <h3 className="text-metatitle3 font-semibold text-navy">{name}</h3>
          <p className="text-navy">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
