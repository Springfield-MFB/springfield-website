import { cn } from "@/lib/utils";

import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export const CoreValues = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <Heading className="text-center lg:text-left">
          Our Core <span className="text-brand-primary">Values</span>
        </Heading>

        <p className="px-4 lg:px-0 text-[#424242] lg:w-[55%] text-xs font-normal leading-6 mt-4">
          We're redefining the way you learn, grow, and succeed. Join us on a
          groundbreaking journey that brings innovation, accessibility, and
          excellence to your career pursuits.
        </p>

        <div className="mt-10 px-3 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[700px]">
            {/* 1 */}
            <div className={cn("rounded-lg flex-1 flex flex-col gap-y-4")}>
              {/* row -1 */}
              <div className="flex-1 gap-2 pb-40 lg:pb-0 p-6 bg-[#DFE3FF] rounded-[10px] ">
                <h3 className="text-xl font-bold mb-2">Integrity:</h3>
                <ul className="space-y-2 list-disc pl-5">
                  {[
                    "We operate with transparency and honesty in all our interactions",
                    "We maintain the highest ethical standards in our business practices",
                    "We uphold the trust placed in us by our customers, employees, and stakeholders",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="text-[#353E4D] text-[13px] leading-5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* row - 2 */}
              <div className="flex-1 pb-40 lg:pb-0  p-6 bg-[#FFF5DB] rounded-[10px] ">
                <h3 className="text-xl font-bold mb-2">Leadership: </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {[
                    "We lead by example and set high standards for ourselves and others",
                    "We empower our employees to take ownership and make decision",
                    "We innovate and strive for excellence in everything we do.",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="text-[#353E4D] text-[13px] leading-5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className={cn("rounded-lg flex-1  flex flex-col gap-y-4")}>
              {/* row - 1 */}

              <div className="lg:h-[60%] bg-[#DBF8FF] rounded-[10px] pb-40 lg:pb-0  p-6">
                <h3 className="text-xl font-bold mb-2">Customer Services: </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {[
                    "We prioritize our customers' needs and strive to exceed their expectations.",
                    "We provide personalized and respectful service to every customer, every time.",
                    "We continuously seek feedback to improve our services and products.",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="text-[#353E4D] text-[13px] leading-5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* row - 2 */}

              <div className="lg:h-[50%] bg-[#FFDBDB] rounded-[10px] pb-40 lg:pb-0  p-6">
                <h3 className="text-xl font-bold mb-2">Loyalty: </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {[
                    "We are committed to building long term relationships with our customers and employees ",
                    "We prioritize their growth and well-being",
                    "We demonstrate our loyalty through our actions and decisions",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="text-[#353E4D] text-[13px] leading-5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className={cn("rounded-lg basis-1/3  flex flex-col gap-y-4")}>
              {/* row - 1 */}

              <div className="flex-1 bg-[#DCFFEC] rounded-[10px] pb-40 lg:pb-0  p-6 ">
                <h3 className="text-xl font-bold mb-2">Accountability: </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {[
                    "We take responsibility for our actions and decisions ",
                    "We own up to our mistakes and learn from them",
                    "We are answerable to our customers, employees, and stakeholders",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="text-[#353E4D] text-[13px] leading-5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* row - 2 */}

              <div className="flex-1 bg-[#FFF5DB] rounded-[10px] pb-40 lg:pb-0  p-6">
                <h3 className="text-xl font-bold mb-2">Team Work: </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {[
                    "We collaborate and support each other to achieve our goals ",
                    "We celebrate our diversity and individual strengths",
                    "We work together to create a positive and inclusive work environment",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="text-[#353E4D] text-[13px] leading-5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
