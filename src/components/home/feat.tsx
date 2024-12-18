import { SmallHeading } from "../heading";
import { MaxWidthWrapper } from "../max-width-wrapper";

const Feat = () => {
  return (
    <div className="mt-20 z-20 lg:mt-0">
      <MaxWidthWrapper>
        <div className="px-8 lg:px-20 py-12 bg-brand-primary rounded-[24px]">
          <div className="grid lg:grid-cols-5 gap-x-8">
            {/* Our feat */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-dark-primary font-[900] text-3xl">
                Our Feat
              </h1>
              <p className="text-xs leading-[20px] lg:leading-[28px] lg:text-sm mt-2">
                Our existence over the years has proven that we have contributed
                immensely to the growths and successes of businesses and
                individuals in various across Nigeria
              </p>
            </div>

            {/* Counts */}
            <div className="lg:col-span-3 flex flex-col lg:flex-row gap-8 lg:gap-0 mt-6 lg:mt-0  justify-between items-center">
              <p className="text-black text-2xl md:text-3xl text-center lg:text-left font-millik ">
                Access up to N3m in less than 4hrs
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Feat;
