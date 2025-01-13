import { AboutPage } from "./comoponents/about-page";

export const metadata = {
  title: "About us",
  description:
    "Springfield Micro Finance Bank Limited (SMFB), situated at Igando, Lagos State, is a licensed Microfinance Bank dedicated to providing cutting-edge microfinance services/products to underserved communities and MSME through technological innovation.",
};

const Page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default Page;
