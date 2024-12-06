import Link from "next/link";
import Image from "next/image";

import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";

import { MaxWidthWrapper } from "./max-width-wrapper";

import FooterLogo from "@/public/svg/footer-logo.svg";
import PartnerLogo from "@/public/svg/partner-logo.svg";
import CbnLogo from "@/public/svg/cbn-logo.svg";
import NdicLogo from "@/public/svg/ndic-logo.svg";

export const Footer = () => {
  return (
    <>
      {/* Footer Image */}

      <div
        className="relative bg-black bg-cover text-white py-16"
        style={{
          backgroundImage: `url('/images/foot-img.jpg')`, // Replace with the actual image path
          backgroundPosition: "top 40% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <MaxWidthWrapper>
          <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Text Section */}
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-4xl font-millik leading-[60px]">
                Stay Close, We Are Always Here
              </h2>
              <p className="text-gray-300 text-sm">
                Still have questions? Please get in touch with our friendly
                team.
              </p>
            </div>

            {/* Right Button Section */}
            <div>
              <Link
                href=""
                className="group bg-brand-primary text-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 font-satoshi transition duration-300"
              >
                <span>Get In Touch</span>
                <span className="ml-2 text-lg group-hover:opacity-0 ">→</span>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <footer className="bg-dark-primary text-white py-12">
        <MaxWidthWrapper>
          {/* Footer - Top */}

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-4">
            {/* Logo and Description Section */}
            <div className="col-span-2">
              <div className="flex items-center mb-2 lg:mb-8">
                <Image
                  src={FooterLogo}
                  alt="Springfield Microfinance Bank"
                  width={1000}
                  height={1000}
                  className="w-[150px]"
                />
              </div>
              <p className="text-white font-light text-xs leading-normal lg:leading-[30px] mb-8">
                Springfield microfinance bank is a licensed microfinance bank
                dedicated to serving the financial needs of marginalized
                communities.
              </p>
              <div className="mt-4 text-xs text-white space-y-2 lg:space-y-4">
                <p className="font-light ">
                  <span className="font-bold text-brand-primary">Address:</span>{" "}
                  Multi-Purpose Market, Behind BRT B/stop, Igando Lagos.
                </p>
                <p className="font-light ">
                  <span className="font-bold text-brand-primary">Tel:</span>{" "}
                  08134736720, 07037152272
                </p>
                <p className="font-light ">
                  <span className="font-bold text-brand-primary">Email:</span>{" "}
                  Info@springfieldmfb.com
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-4 lg:mt-8">
                <a
                  href="#"
                  aria-label="X"
                  className="border-[1.5px] border-white rounded-full size-[40px]  flex justify-center items-center text-white hover:scale-[1.2]  transition-all duration-300 hover:text-white"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="border-[1.5px] border-white rounded-full size-[40px]  flex justify-center items-center text-white hover:scale-[1.2]  transition-all duration-300 hover:text-white"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="border-[1.5px] border-white rounded-full size-[40px]  flex justify-center items-center text-white hover:scale-[1.2]  transition-all duration-300 hover:text-white"
                >
                  <PiInstagramLogoFill size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Phone"
                  className="border-[1.5px] border-white rounded-full size-[40px]  flex justify-center items-center text-white hover:scale-[1.2]  transition-all duration-300 hover:text-white"
                >
                  <IoCall size={18} />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-white text-sm">DEPOSIT</h3>
              <ul className="space-y-3 lg:space-y-6 text-white text-xs font-light">
                <li>Springfield Saving Account</li>
                <li>Daily Contribution (SDC)</li>
                <li>Personal Current Account</li>
                <li>Corporate Current Account</li>
                <li>Springfield Target Account</li>
                <li>Annual Contribution Account</li>
                <li>Fixed Deposit Account</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-white text-sm">LOANS</h3>
              <ul className="space-y-3 lg:space-y-6 text-white text-xs font-light">
                <li>Weekly Repay Facility (SWR)</li>
                <li>Shelter Loan</li>
                <li>Micro Loan</li>
                <li>Small & Medium Loan</li>
                <li>School Support Product (3SP)</li>
                <li>Asset Acquisition Loan (SAAL)</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-white text-sm">SERVICES</h3>
              <ul className="space-y-3 lg:space-y-6 text-white text-xs font-light">
                <li>Micro-Insurance</li>
                <li>Financial Advisory</li>
                <li>Bill Payments</li>
                <li>Funds Transfer</li>
                <li>ATM</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-white text-sm">MORE</h3>
              <ul className="space-y-3 lg:space-y-6 text-white text-xs font-light">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-[#4A4A4A] my-8 lg:my-16 " />

          {/* Footer - Bottom */}

          <div className="container mx-auto flex flex-col lg:flex-row  gap-x-20 justify-between ">
            <div className="flex-1">
              {/* Partner Information */}
              <div className="mb-20">
                <div className="flex items-center gap-x-2 mb-4">
                  <Image
                    src={PartnerLogo}
                    alt="Partner Logo"
                    width={1000}
                    height={1000}
                    className="size-[50px] object-cover border border-white rounded-full"
                  />

                  <div>
                    <p className="text-[#919191] text-[8px]">Partners with</p>
                    <p className="text-base font-bold text-white">
                      Premier Poverty Allegation Initiative (PPAI)
                    </p>
                  </div>
                </div>

                <p className="text-center lg:text-left text-xs text-white font-light">
                  Springfield microfinance bank is a licensed microfinance bank
                  dedicated to serving the financial needs of marginalized
                  communities.
                </p>
              </div>

              {/* Licensing Info */}
              <div className="text-center lg:text-left mb-8 flex justify-center lg:justify-start">
                <div className="text-sm font-normal flex gap-x-2 items-center">
                  <span className="">Licensed by CBN</span>
                  <Image
                    src={CbnLogo}
                    alt="CBN Logo"
                    width={1000}
                    height={1000}
                    className="size-[30px]"
                  />
                  <span className="">Insured by NDIC</span>
                  <Image
                    src={NdicLogo}
                    alt="CBN Logo"
                    width={1000}
                    height={1000}
                    className="size-[40px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1  lg:flex lg:flex-col lg:items-end">
              {/* Newsletter Subscription */}
              <div className="text-center lg:text-left">
                <h4 className="text-base font-semibold mb-3">
                  Join Our Newsletter
                </h4>
                <form className="flex flex-col sm:flex-row items-center w-full gap-3">
                  <div className="border border[#D7D7D7] bg-white rounded-[32px] p-1 flex justify-between items-center overflow-hidden w-full">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full sm:w-80 p-2  focus:outline-none text-black text-xs"
                    />
                    <button
                      type="submit"
                      className="bg-brand-primary text-[#2B2B2B] text-xs font-bold px-6 py-3 rounded-[32px]  hover:bg-yellow-500 transition"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="text-xs text-opacity-70 text-white mt-4">
                  * Will send you weekly updates for your better engagement.
                </p>
              </div>

              {/* Footer Copyright */}
              <div className="mt-10 text-center text-sm text-[#969696]">
                &copy; {new Date().getFullYear()} Springfield MFB
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
};
