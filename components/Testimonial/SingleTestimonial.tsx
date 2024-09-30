import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import "./Testimonial.scss";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-sm bg-white p-9 pt-7.5 shadow-solid-9 client-section font-kodchasan">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-2.5 text-metatitle3 text-navy font-semibold font-kodchasan">
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
