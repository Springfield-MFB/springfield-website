export const metadata = {
  title: "Deposit Calculator",
  description:
    "Quickly estimate your monthly payments and total interest for any loan. Make informed decisions and take control of your finances today!",
};

import { DepositCalculator } from "./deposit-calculator";

const Page = () => {
  return (
    <div className="pt-16 pb-40">
      <DepositCalculator mode="light" />
    </div>
  );
};

export default Page;
