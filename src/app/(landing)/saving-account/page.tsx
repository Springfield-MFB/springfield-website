import { SavingPage } from "./components/savings-page";

export const metadata = {
  title: "Saving Account",
  description:
    "Saving Account with attractive interest for individuals, business owners, students and traders. Up to 3 times withdrawals allowed with interest.",
};

const Page = () => {
  return (
    <div>
      <SavingPage />
    </div>
  );
};

export default Page;
