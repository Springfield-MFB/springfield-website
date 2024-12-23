import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageBoard } from "@/components/page-board";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { ContactForm } from "./contact-form";
import BoxReveal from "@/components/ui/box-reveal";

export const ContactUsPage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <PageBoard
        backgroundImage="url('/images/help-bg.jpeg')"
        heading="We Would Love To Hear From you"
        desc="Looking for the solution that best fits your business needs? Fill out the contact form and our Sales team will be in touch."
      />

      <MaxWidthWrapper className="py-16 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
          {/* CONTACT INFO */}

          <div className="col-span-1">
            <div className="lg:w-[80%] px-4 lg:px-0">
              <BoxReveal boxColor={"#F0B929"} duration={1}>
                <Heading>Contact Us </Heading>
              </BoxReveal>

              <BoxReveal boxColor={"#F0B929"} duration={1.2}>
                <p className="text-sm text-[#4A4949] leading-6 mt-4">
                  Need assistance with a specific transaction or issue? Our
                  customer support team is available to help you resolve them.
                </p>
              </BoxReveal>

              <div className="flex flex-col space-y-10 mt-10">
                <div className="flex space-x-3 items-center">
                  <span className="size-[40px] rounded-full bg-[#EDC55D] flex justify-center items-center">
                    <MapPin size={18} color="white" />
                  </span>
                  <div className="flex flex-col space-y-1 text-[#373737] w-[70%]">
                    <BoxReveal boxColor={"#F0B929"} duration={1}>
                      <h1 className="text-sm font-bold ">
                        Corporate Head Office:
                      </h1>
                    </BoxReveal>
                    <BoxReveal boxColor={"#F0B929"} duration={1}>
                      <p className="text-sm">
                        Multi-Purpose Market, Behind BRT Bus Stop, Igando,
                        Lagos, Nigeria
                      </p>
                    </BoxReveal>
                  </div>
                </div>

                <div className="flex space-x-3 items-center">
                  <span className="size-[40px] rounded-full bg-[#EDC55D] flex justify-center items-center">
                    <Mail size={18} color="white" />
                  </span>
                  <div className="flex flex-col space-y-1 text-[#373737] w-[70%]">
                    <BoxReveal boxColor="#F0B929" duration={1}>
                      <h1 className="text-sm font-bold ">Email</h1>
                    </BoxReveal>
                    <BoxReveal boxColor="#F0B929" duration={1}>
                      <p className="text-sm">Info@springfieldmfb.com</p>
                    </BoxReveal>
                  </div>
                </div>

                <div className="flex space-x-3 items-center">
                  <span className="size-[40px] rounded-full bg-[#EDC55D] flex justify-center items-center">
                    <Phone size={18} color="white" />
                  </span>
                  <div className="flex flex-col space-y-1 text-[#373737] w-[70%]">
                    <BoxReveal boxColor="#F0B929" duration={1}>
                      <h1 className="text-sm font-bold ">Phone</h1>
                    </BoxReveal>
                    <BoxReveal boxColor="#F0B929" duration={1}>
                      <p className="text-sm">08134736720, 07037152272</p>
                    </BoxReveal>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm">Follow Us On Social Media</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    aria-label="X"
                    className="border-[1.5px] border-black hover:border-brand-primary rounded-full size-[40px]  flex justify-center items-center text-black hover:scale-[1.2]  transition-all duration-300 hover:text-brand-primary"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="border-[1.5px] border-black hover:border-brand-primary rounded-full size-[40px]  flex justify-center items-center text-black hover:scale-[1.2]  transition-all duration-300 hover:text-brand-primary"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="border-[1.5px] border-black hover:border-brand-primary rounded-full size-[40px]  flex justify-center items-center text-black hover:scale-[1.2]  transition-all duration-300 hover:text-brand-primary"
                  >
                    <PiInstagramLogoFill size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="Phone"
                    className="border-[1.5px] border-black hover:border-brand-primary rounded-full size-[40px]  flex justify-center items-center text-black hover:scale-[1.2]  transition-all duration-300 hover:text-brand-primary"
                  >
                    <IoCall size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div className="col-span-1">
            <ContactForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
