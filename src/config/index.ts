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
import { GiBassetHoundHead, GiWhistle } from "react-icons/gi";

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

// LOAN PROPERTIES
import RateSvg from "@/public/svg/rate-svg.svg";
import CalenderSvg from "@/public/svg/calender-svg.svg";
import FastSvg from "@/public/svg/fast-svg.svg";
import RepaymentSvg from "@/public/svg/payment-svg.svg";

// TEAM MEMBERS
import FakoyeImg from "@/public/images/mr-taiwo Fakayode (COO).jpg";
import FrankImg from "@/public/images/mr-frank Odion. (Head Recovery).jpg";
import PreciousImg from "@/public/images/mrs-precious (Internal Control).jpeg";
import ShonayaImg from "@/public/images/mr-tosin (Company Sec and Legal).jpeg";
import RasaqImg from "@/public/images/mr-rasaq (MD).jpg";
import IsrealImg from "@/public/images/mr-ogundeyi Israel.jpg";

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
        iconColor: "#00C860",
        href: "/board-of-director",
        color: "#E6FFF2",
        title: "Board Of Directors",
        desc:
          "Our management team is committed to leading by example, fostering a culture of innovation, and driving excellence in everything we do. ",
      },

      {
        icon: FaUserLarge,
        iconColor: "#D500C3",
        href: "/management-team",
        color: "#FFE8FD",
        title: "Management Team",
        desc:
          "Our management team is committed to leading by example, fostering a culture of innovation, and driving excellence in everything we do. ",
      },

      {
        icon: FaBriefcase,
        iconColor: "#EE5A02",
        href: "/careers",
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
        href: "/saving-account",
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
        href: "/micro-loan",
        color: "#E6FBFF",
        title: "Springfield Micro Loan",
        desc:
          "Specialized loan product thoughtfully designed to provide financial support and empower small and micro business owners to grow and sustain their ventures.",
      },

      {
        icon: IoSchool,
        iconColor: "#03C15E",
        href: "/sme-loan",
        color: "#E6FFF2",
        title: "Springfield SME Loan",
        desc:
          "School owners, parents/guardian and tertiary students who seek financial empowerment to achieve their educational goals.",
      },

      {
        icon: GiBassetHoundHead,
        iconColor: "#D500C3",
        href: "/asset-acquisition-loan",
        color: "#FFE8FD",
        title: "Springfield Asset Aquisation Loan (SAAL)",
        desc:
          "This is a product designed to give our customers access to funding asset acquisition like Home appliances, electronics and phones etc.",
      },

      {
        icon: FaPersonShelter,
        iconColor: "#D80A12",
        href: "/shelter-loan",
        color: "#FFE6E7",
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
        href: "/loan-calculator",
        color: "#FFE8FD",
        title: "Loan Calculator",
        desc:
          "Make smart financial decisions with our advanced loan calculator, offering a comprehensive breakdown of your monthly loan repayments.",
      },

      {
        icon: PiHandDepositFill,
        iconColor: "#4E4EFE",
        href: "/deposit-calculator",
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
        href: "/contact-us",
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
        href: "/faq",
        color: "#FFE6E7",
        title: "FAQ’s",
        desc:
          "Get instant clarity on our products, services, and policies with our detailed and regularly updated FAQ section.",
      },

      {
        icon: GiWhistle,
        iconColor: "#4E4EFE",
        href: "/whistle-blowing",
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

export const BENEFITS = [
  {
    title: "Earn Interest",
    description:
      "Savings accounts earn interest, allowing your money to grow over time.",
    image: BankingImg, // Replace with actual image paths
  },
  {
    title: "Liquidity",
    description:
      "Savings accounts provide easy access to your money when needed.",
    image: LoansImg,
  },
  {
    title: "Low Risk ",
    description:
      "Savings accounts are typically low-risk, providing a safe place to store your money.",
    image: InsuranceImg,
  },
  {
    title: "Earn Interest",
    description:
      "Savings accounts earn interest, allowing your money to grow over time.",
    image: BankingImg, // Replace with actual image paths
  },
  {
    title: "Liquidity",
    description:
      "Savings accounts provide easy access to your money when needed.",
    image: LoansImg,
  },
  {
    title: "Low Risk ",
    description:
      "Savings accounts are typically low-risk, providing a safe place to store your money.",
    image: InsuranceImg,
  },
];

export const LOAN_PROPERTIES = [
  {
    icon: RateSvg,
    title: "Competitive Interest Rate",
    desc:
      "Apply for a loan today and take advantage of our competitive interest rate",
  },
  {
    icon: CalenderSvg,
    title: "3-6 Months Tenor",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Between N100 to N1,000,000",
  },
  {
    icon: RepaymentSvg,
    title: "Weekly Repayment",
    desc: "Make manageable repayments that fit your schedule:",
  },
];

export const ASSETS_ACQUISITION_LOAN_PROPERTIES = [
  {
    icon: RateSvg,
    title: "Competitive Interest Rate",
    desc:
      "Apply for a loan today and take advantage of our competitive interest rate",
  },
  {
    icon: CalenderSvg,
    title: "3-6 Months Tenor",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Get up to 3,000,000.00",
  },
  {
    icon: RepaymentSvg,
    title: "Weekly Repayment",
    desc: "Make manageable repayments that fit your schedule:",
  },
];

export const SHELTER_LOAN_PROPERTIES = [
  {
    icon: RateSvg,
    title: "Competitive Interest Rate",
    desc:
      "Apply for a loan today and take advantage of our competitive interest rate",
  },
  {
    icon: CalenderSvg,
    title: "3-6 Months Tenor",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Get up to 3,000,000.00",
  },
  {
    icon: RepaymentSvg,
    title: "Weekly Repayment",
    desc: "Make manageable repayments that fit your schedule:",
  },
];

export const SME_LOAN_PROPERTIES = [
  {
    icon: RateSvg,
    title: "Competitive Interest Rate",
    desc:
      "Apply for a loan today and take advantage of our competitive interest rate",
  },
  {
    icon: CalenderSvg,
    title: "3-6 Months Tenor",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc:
      "Get quick access to the funds you need with our streamlined loan application process. ",
  },
  {
    icon: RepaymentSvg,
    title: "Weekly Repayment",
    desc: "Make manageable repayments that fit your schedule:",
  },
];

export const LOAN_BENEFITS = [
  {
    title: "Quick Access to Funds",
    description:
      "Experience the ease of quick access to funds, providing immediate financial solutions at your fingertips. Whether it's an unexpected expense or an exciting opportunity.",
  },
  {
    title: "No Collateral Required",
    description:
      "Unlock financial opportunities hassle-free with our no-collateral-required solutions. Enjoy the freedom to secure funds without pledging assets.",
  },
  {
    title: "Short-Term Solution",
    description:
      "Address immediate financial needs with our short-term solution, offering quick relief without long-term commitments.",
  },
  {
    title: "Credit History Not Always a Decisive Factor",
    description:
      "Some lenders may consider the borrower’s income and employment status more heavily than their credit history when approving a salary loan. This can make salary loans accessible to individuals with a less-than-perfect credit history.",
  },
  {
    title: "Predictable Repayments",
    description:
      "The fixed installment structure of salary loans makes it easier for borrowers to budget and plan for repayments since they know the exact amount that will be deducted from their salary each month.",
  },
  {
    title: "Convenience",
    description:
      "The repayment of a salary loan is typically structured to be convenient for the borrower. The installments are deducted directly from the salary, reducing the hassle of manual payments.",
  },
];

export const TEAM_MEMEBERS = [
  {
    name: "Mr Fakayode Taiwo Olusola",
    role: "Chief Operating Officer",
    image: FakoyeImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks.  Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
  {
    name: "Mr. Frank Odion",
    role: "(Head Recovery)",
    image: FrankImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks.  Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
  {
    name: "PRECIOUS NKEMJIKA R.",
    role: " HEAD, INTERNAL CONTROL/AUDIT",
    image: PreciousImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks.  Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
  {
    name: "A. T. Shonaya Esq.",
    role: "Company Secretary / Head Legal",
    image: ShonayaImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks.  Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
  {
    name: "ADETUNJI RASAQ ADESHINA",
    role: "MD/CEO",
    image: RasaqImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks.  Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
  {
    name: "ISRAEL ADEOYE OGUNDEYI",
    role: "HEAD, CREDICT & RISK",
    image: IsrealImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks.  Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
];

export const FAQ_DATA = [
  {
    question: "How do I open an account?",
    answer:
      "Click on open account on our website, talk to our account officers or visit our office at Igando.",
  },
  {
    question: "Can I open an account on my phone?",
    answer: "Yes you can open an account on your phone.",
  },
  {
    question: "Is ATM card free?",
    answer: "No, this is coming soon",
  },
];
