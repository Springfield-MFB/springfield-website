import { CurrentAccountPage } from "./components/savings-page";

export const metadata = {
  title: "Current Account",
  description:
    "Saving Account with attractive interest for individuals, business owners, students and traders. Up to 3 times withdrawals allowed with interest.",
};

const Page = () => {
  return (
    <div>
      <CurrentAccountPage />
    </div>
  );
};

export default Page;