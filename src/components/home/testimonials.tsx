import { Heading } from "../heading";
import BoxReveal from "../ui/box-reveal";
import { TestimonialCarousel } from "./testimonial-carousel";

export const Testimonials = () => {
  return (
    <div>
      <div className="w-[53%]">
        <BoxReveal boxColor={"#F0B929"} duration={1}>
          <Heading>
            What are <span className="text-brand-primary">customers</span>{" "}
            saying?
          </Heading>
        </BoxReveal>
      </div>

      <div className="w-full mt-8">
        <TestimonialCarousel />
      </div>
    </div>
  );
};
