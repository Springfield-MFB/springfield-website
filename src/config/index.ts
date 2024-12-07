import { MdInfo } from "react-icons/md";
import { HiCreditCard, HiUsers } from "react-icons/hi2";
import {
  FaBriefcase,
  FaCalendarDays,
  FaPersonShelter,
  FaUserLarge,
} from "react-icons/fa6";
import { RiFolderVideoFill, RiUserStarFill } from "react-icons/ri";
import { PiBankFill, PiHandDepositFill, PiHashFill } from "react-icons/pi";
import { BsCloudSunFill } from "react-icons/bs";
import {
  TbCalculatorFilled,
  TbPasswordMobilePhone,
  TbTargetArrow,
} from "react-icons/tb";
import { IoHelpCircleSharp, IoSchool } from "react-icons/io5";
import {
  BiSolidChat,
  BiSolidCreditCardAlt,
  BiSolidMobileVibration,
} from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { GiWhistle } from "react-icons/gi";

// SERVICES
import BankingImg from "@/public/images/banking.png";
import LoansImg from "@/public/images/loans.png";
import InsuranceImg from "@/public/images/insurance.png";

// WHY CHOOSE SPRINGFIELD
import Money from "@/public/svg/money.svg";
import Business from "@/public/svg/business.svg";
import Analysis from "@/public/svg/analysis.svg";

// TESTIMONIALS
import Testimonial1Img from "@/public/images/avatar-1.svg";
import Testimonial2Img from "@/public/images/avatar-2.png";
import Testimonial3Img from "@/public/images/avatar-3.png";
import Testimonial4Img from "@/public/images/avatar-4.png";

export const NAVBART_ITEMS = [
  // COMPANY
  {
    label: "Company",
    value: "Company" as const,
    content: [
      {
        icon: MdInfo,
        iconColor: "#D500C3",
        href: "/about",
        color: "#FFE8FD",
        title: "Who we are",
        desc:
          "we are a team of passionate and dedicated individuals committed to providing financial services to underserved communities.",
      },

      {
        icon: HiUsers,
        iconColor: "#D40912",
        href: "#",
        color: "#FFE6E7",
        title: "Management Team",
        desc:
          "Our management team is committed to leading by example, fostering a culture of innovation, and driving excellence in everything we do. ",
      },

      {
        icon: FaUserLarge,
        iconColor: "#D500C3",
        href: "#",
        color: "#FFE8FD",
        title: "Management Team",
        desc:
          "Our management team is committed to leading by example, fostering a culture of innovation, and driving excellence in everything we do. ",
      },

      {
        icon: FaBriefcase,
        iconColor: "#EE5A02",
        href: "#",
        color: "#FFE9DC",
        title: "Careers",
        desc:
          "Join our team and be part of a dynamic and innovative organization that is committed to making a difference.",
      },

      {
        icon: RiFolderVideoFill,
        iconColor: "#54606E",
        href: "#",
        color: "#E2EBF7",
        title: "Media",
        desc:
          "Get the latest insights, news, and updates on our products, services, and community initiatives from Springfield Microfinance Bank.",
      },
      {
        icon: PiBankFill,
        iconColor: "#EFAD00",
        href: "#",
        color: "#FFF7E2",
        title: "ESG",
        desc:
          "At Springfield Microfinance Bank, we are committed to operating in a responsible and sustainable manner. ",
      },

      {
        icon: RiUserStarFill,
        iconColor: "#1818D9",
        href: "#",
        color: "#E8E8FF",
        title: "CSR",
        desc:
          " Our CSR initiatives are designed to make a positive impact on the lives of our customers, employees, and the wider community.",
      },
    ],
  },

  // SAVINGS & DEPOSIT
  {
    label: "Savings & Deposit",
    value: "savings_&_deposit" as const,
    content: [
      {
        icon: BsCloudSunFill,
        iconColor: "#B900AA",
        href: "#",
        color: "#FFE8FD",
        title: "Springfield Daily Contribution (SDC)",
        desc:
          "daily contribution account to encourage goal oriented savings of our customers. No Monthly charge and sms. Opportunity for loan.",
      },

      {
        icon: TbTargetArrow,
        iconColor: "#1818D9",
        href: "#",
        color: "#E8E8FF",
        title: "Springfield Target Account (STA)",
        desc:
          "Special savings account crafted for customers to save for their financial goals. This is built on encouraging financial discipline.",
      },

      {
        icon: PiBankFill,
        iconColor: "#54606E",
        href: "#",
        color: "#E2EBF7",
        title: "Springfield Target Account (STA)",
        desc:
          "Fixed and tenured investment account with a goal to maximize financial returns on short, medium or long term bases.",
      },
    ],
  },

  // LOANS

  {
    label: "Loans",
    value: "loans" as const,
    content: [
      {
        icon: BiSolidCreditCardAlt,
        iconColor: "#0087A2",
        href: "#",
        color: "#E6FBFF",
        title: "Springfield Micro Loan",
        desc:
          "Specialized loan product thoughtfully designed to provide financial support and empower small and micro business owners to grow and sustain their ventures.",
      },

      {
        icon: IoSchool,
        iconColor: "#03C15E",
        href: "#",
        color: "#E6FFF2",
        title: "School Support Product (3SP)",
        desc:
          "School owners, parents/guardian and tertiary students who seek financial empowerment to achieve their educational goals.",
      },

      {
        icon: FaPersonShelter,
        iconColor: "#D80A12",
        href: "#",
        color: "FaPersonShelter",
        title: "Springfield Shelter Loan",
        desc:
          "Loan designed to help you build, renovate, or own your dream home with flexible repayment options tailored to your needs.",
      },
    ],
  },

  // DIGITAL SERVICES

  {
    label: "Digital Services",
    value: "digital_services" as const,
    content: [
      {
        icon: HiCreditCard,
        iconColor: "#0099B7",
        href: "#",
        color: "#E6FBFF",
        title: "Instant Debit Card",
        desc:
          "Get your debit card immediately after opening an account. Make purchases, withdraw cash, and check your balance anywhere, anytime.",
      },

      {
        icon: BiSolidMobileVibration,
        iconColor: "#00B457",
        href: "#",
        color: "#E6FFF2",
        title: "Mobile Banking",
        desc:
          "Banking just got easier! Download our Mobile Banking app and enjoy convenient, secure, and hassle-free banking on the go.",
      },

      {
        icon: TbPasswordMobilePhone,
        iconColor: "#CB06B3",
        href: "#",
        color: "#FFE6FC",
        title: "Agency Banking",
        desc:
          "Bringing banking services closer to customers, reducing the need to travel long distances to access banking services.",
      },

      {
        icon: FaCalendarDays,
        iconColor: "#3333F5",
        href: "#",
        color: "#E8E8FF",
        title: "Buy Now Pay Later",
        desc:
          "Take advantage of our Buy Now Pay Later option, offering flexible payment plans that let you shop with confidence and pay on your own terms.",
      },

      {
        icon: PiHashFill,
        iconColor: "#CE6401",
        href: "#",
        color: "#FFF3E8",
        title: "USSD",
        desc:
          "Experience the freedom to bank anywhere, anytime with our convenient and secure USSD banking service, designed to make your life easier.",
      },
    ],
  },

  // CALCULATOR

  {
    label: "Calculator",
    value: "calculator" as const,
    content: [
      {
        icon: TbCalculatorFilled,
        iconColor: "#DF18CE",
        href: "#",
        color: "#FFE8FD",
        title: "Loan Calculator",
        desc:
          "Make smart financial decisions with our advanced loan calculator, offering a comprehensive breakdown of your monthly loan repayments.",
      },

      {
        icon: PiHandDepositFill,
        iconColor: "#4E4EFE",
        href: "#",
        color: "#E8E8FF",
        title: "Fixed & Deposit Calculator",
        desc:
          "Make informed investment decisions and maximize your returns with our intuitive Fixed Deposit Calculator.",
      },
    ],
  },

  // CONTACT US

  {
    label: "Contact Us",
    value: "contact_us" as const,
    content: [
      {
        icon: IoHelpCircleSharp,
        iconColor: "#00ADD0",
        href: "#",
        color: "#E6FBFF",
        title: "Help Center",
        desc:
          "Get instant support and find detailed answers to your questions, with our extensive knowledge base and dedicated customer support team",
      },

      {
        icon: TiLocation,
        iconColor: "#D202C1",
        href: "#",
        color: "#FFE8FD",
        title: "Branch Locator",
        desc:
          "Locate your nearest branch and navigate to it with ease using our intuitive branch locator tool, providing you with accurate directions and details.",
      },

      {
        icon: BiSolidChat,
        iconColor: "#E00710",
        href: "#",
        color: "#FFE6E7",
        title: "FAQ’s",
        desc:
          "Get instant clarity on our products, services, and policies with our detailed and regularly updated FAQ section.",
      },

      {
        icon: GiWhistle,
        iconColor: "#4E4EFE",
        href: "#",
        color: "#E8E8FF",
        title: "Whistle Blower",
        desc:
          "We are committed to maintaining the highest standards of ethics, integrity, and transparency in our business practices.",
      },
    ],
  },
];

export const SERVICES = [
  {
    title: "Corporate Banking",
    description:
      "Discover tailored corporate banking solutions to manage your business finances, including treasury management and foreign exchange services.",
    image: BankingImg, // Replace with actual image paths
  },
  {
    title: "Loans",
    description:
      "Whether you need working capital or financing for expansion projects, we offer a variety of business loan options to support your growth.",
    image: LoansImg,
  },
  {
    title: "Micro-Insurance",
    description:
      "Explore our investment products designed to help your business grow and thrive, including asset management and retirement planning.",
    image: InsuranceImg,
  },

  {
    title: "Micro-Insurance",
    description:
      "Explore our investment products designed to help your business grow and thrive, including asset management and retirement planning.",
    image: BankingImg,
  },

  {
    title: "Micro-Insurance",
    description:
      "Explore our investment products designed to help your business grow and thrive, including asset management and retirement planning.",
    image: LoansImg,
  },
];

export const WHY_CHOOSE_SPRINGFIELD = [
  {
    image: Money,
    name: "Convenience:",
    description:
      "Future Banking lets you manage finances anytime, anywhere—no queues, no paperwork.",
  },

  {
    image: Business,
    name: "Personalized",
    description:
      "We provide personalized financial solutions tailored to your unique needs",
  },

  {
    image: Analysis,
    name: "Security:",
    description:
      "Springfield ensures your financial security with advanced encryption and biometric authentication.",
  },
];

export const TESTIMONIALS = [
  {
    testimony:
      "Switching to [Bank Name] has been the best decision for managing my finances. The mobile app is intuitive and allows me to track my savings, investments, and transactions effortlessly. Their customer service is exceptional—always responsive and helpful. With competitive rates and tailored solutions, I feel confident in achieving my financial goals. [Bank Name] truly puts its customers first!",
    image: Testimonial1Img,
    name: "Daniel Samuel",
    role: "Current Account",
  },

  {
    testimony:
      "Switching to [Bank Name] has been the best decision for managing my finances. The mobile app is intuitive and allows me to track my savings, investments, and transactions effortlessly. Their customer service is exceptional—always responsive and helpful. With competitive rates and tailored solutions, I feel confident in achieving my financial goals. [Bank Name] truly puts its customers first!",
    image: Testimonial2Img,
    name: "John Doe",
    role: "Saving Account",
  },

  {
    testimony:
      "Switching to [Bank Name] has been the best decision for managing my finances. The mobile app is intuitive and allows me to track my savings, investments, and transactions effortlessly. Their customer service is exceptional—always responsive and helpful. With competitive rates and tailored solutions, I feel confident in achieving my financial goals. [Bank Name] truly puts its customers first!",
    image: Testimonial3Img,
    name: "Michael Smith",
    role: "Saving Account",
  },

  {
    testimony:
      "Switching to [Bank Name] has been the best decision for managing my finances. The mobile app is intuitive and allows me to track my savings, investments, and transactions effortlessly. Their customer service is exceptional—always responsive and helpful. With competitive rates and tailored solutions, I feel confident in achieving my financial goals. [Bank Name] truly puts its customers first!",
    image: Testimonial3Img,
    name: "Evans Smith",
    role: "Current Account",
  },

  {
    testimony:
      "Switching to [Bank Name] has been the best decision for managing my finances. The mobile app is intuitive and allows me to track my savings, investments, and transactions effortlessly. Their customer service is exceptional—always responsive and helpful. With competitive rates and tailored solutions, I feel confident in achieving my financial goals. [Bank Name] truly puts its customers first!",
    image: Testimonial4Img,
    name: "Jasmine Jane",
    role: "Saving Account",
  },
];
