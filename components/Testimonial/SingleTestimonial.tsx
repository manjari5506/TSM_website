import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import "./Testimonial.scss";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="client-section rounded-sm bg-white p-9 pt-7.5 font-kodchasan shadow-solid-9">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className=" kodchasan py-1 text-xl font-bold   text-navy">
            {name}
          </h3>
          <p className="text-navy">{designation}</p>
        </div>
        <Image width={80} height={50} className="" src={image} alt={name} />
      </div>

      <p className="text-navy">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
