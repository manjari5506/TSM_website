import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import "./Testimonial.scss";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, avatar, content } = review;
  
  return (
    <div className="testimonial-card rounded-sm bg-white p-9 pt-7.5 shadow-custom client-section font-kodchasan">
      <div className="flex mb-4">
        <Image width={70} height={100} className="company-logo" src={image} alt={name} />
      </div>

      <p className="text-navy mb-6">{content}</p>

      <div className="flex items-center mt-auto">
        <Image 
          width={50} 
          height={50} 
          className="rounded-full mr-4 avatar-image" 
          src={avatar} 
          alt={name} 
        />
        <div className="flex flex-col">
          <h3 className="text-metatitle3 text-navy font-semibold">{name}</h3>
          <p className="text-navy">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
