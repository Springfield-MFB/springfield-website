import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { useGetJobsQuery } from "@/services/queries/job";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Openings = () => {
  const { data: jobs, isPending, isError } = useGetJobsQuery();

  return (
    <div id="openings">
      <MaxWidthWrapper>
        <div className="flex flex-col py-16">
          <Heading className="text-center">
            Current Job Opening at Springfield Microfinance Bank
          </Heading>
          <p className="mt-4 text-sm text-center">
            Here are some of our available openings
          </p>

          {jobs && jobs?.responseData?.records?.length > 0 ? (
            <div className="flex flex-col space-y-4 lg:w-[75%] lg:mx-auto mt-16">
              {isPending ? (
                <div>
                  <Loader className="animate-spin text-brand-primary" />{" "}
                </div>
              ) : null}

              {jobs?.responseData.records.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-[8px] border-[.75px] border-[#D6D6D6] shadow-sm py-2 text-xs text-center"
                >
                  <span className="w-[30%] border-r py-1 font-bold">
                    {item.title}
                  </span>
                  <span className="w-[40%] flex justify-center items-center space-x-2 border-r py-1">
                    <Image
                      src="/svg/flag.svg"
                      alt="photo flag"
                      width={20}
                      height={20}
                      className="rounded-full "
                    />
                    <p>{item.location}</p>
                  </span>
                  <span className="w-[30%] py-1">{item.type}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-6 text-sm text-gray-600">
              No jobs found!.
            </p>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
