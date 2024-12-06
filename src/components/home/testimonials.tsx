import { Heading } from "../heading";
import { TestimonialCarousel } from "./testimonial-carousel";

export const Testimonials = () => {
  return (
    <div>
      <div className="w-[53%]">
        <Heading>
          What are <span className="text-brand-primary">customers</span> saying?
        </Heading>
      </div>

      <div className="w-full mt-8">
        <TestimonialCarousel />
      </div>
    </div>
  );
};
