import Image from "next/image";

export const LoanProcessCard = () => {
  return (
    <div className="relative lg:w-[40%]  overflow-hidden bg-[#5F5F5F] px-10 py-20 rounded-[10px] shadow-lg mt-8 max-w-lg  text-white">
      <Image
        src="/svg/spring-svg.svg"
        alt="photo Loan Calculator Process"
        width={1000}
        height={1000}
        className="absolute size-[200px] bottom-0 right-0 z-10 opacity-70"
      />

      <Image
        src="/svg/spring-svg.svg"
        alt="photo Loan Calculator Process"
        width={1000}
        height={1000}
        className="absolute size-[300px] -top-10 left-0 z-10 opacity-70"
      />

      <h3 className="text-brand-primary text-base font-bold mb-4">
        Loan Application Process
      </h3>
      <p className="text-sm font-bold mb-10">
        Follow our easy steps to getting a loan.
      </p>
      <ul className="space-y-10 font-satoshi">
        <li className="flex items-center space-x-4 text-[#E7E7E7]">
          <span className="size-[50px] text-sm flex justify-center items-center text-black bg-brand-primary rounded-full  border-[8px] border-gray-300 font-bold">
            01
          </span>
          <div className="flex flex-col">
            <h1 className=" font-bold">OPEN AN ACCOUNT</h1>
            <p className="basis-11/12 text-xs">
              Open an account and deposit 20% of the proposed loan facility.
            </p>
          </div>
        </li>

        <li className="flex items-center space-x-4 text-[#E7E7E7]">
          <span className="size-[50px] text-sm flex justify-center items-center text-black bg-brand-primary rounded-full  border-[8px] border-gray-300 font-bold">
            02
          </span>
          <div className="flex flex-col">
            <h1 className=" font-bold">APPLY FOR LOAN</h1>
            <p className="basis-11/12 text-xs">
              Fill the loan application form and meet all requirement
            </p>
          </div>
        </li>

        <li className="flex items-center space-x-4 text-[#E7E7E7]">
          <span className="size-[50px] text-sm flex justify-center items-center text-black bg-brand-primary rounded-full  border-[8px] border-gray-300 font-bold">
            03
          </span>
          <div className="flex flex-col">
            <h1 className=" font-bold">LOAN DISBURSED</h1>
            <p className="basis-11/12 text-xs">
              Your loan request is taken for approval and then disbursed.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
