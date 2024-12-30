import { Openings } from "./openings";
import { CareerHero } from "./career-hero";
import { ApplyJobForm } from "./apply-job-form";

function CareerPage() {
  return (
    <>
      <div className="relative py-16">
        {/* Hero div */}
        <CareerHero />

        <div className="bg-[#2B2B2B] absolute inset-0 -z-20" />
      </div>

      {/* Openings */}
      <Openings />

      {/* SUBMIT CV */}
      <ApplyJobForm />
    </>
  );
}

export default CareerPage;
