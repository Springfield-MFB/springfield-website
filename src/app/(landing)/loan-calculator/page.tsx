import { LoanCalculator } from "./loan-calculator";

export const metadata = {
  title: "Loan Calculator",
  description:
    "Quickly estimate your monthly payments and total interest for any loan. Make informed decisions and take control of your finances today!",
};

const Page = () => {
  return (
    <div className="pt-16 pb-40">
      <LoanCalculator mode="light" />
    </div>
  );
};

export default Page;
