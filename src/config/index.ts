import {
  MdCalendarMonth,
  MdEnergySavingsLeaf,
  MdGpsNotFixed,
  MdInfo,
  MdPayment,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
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
import { IoHelpCircleSharp, IoSchool, IoSchoolSharp } from "react-icons/io5";
import {
  BiCurrentLocation,
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
import TailorImg from "@/public/images/tailor-1.jpeg";

// WHY CHOOSE SPRINGFIELD
import Money from "@/public/svg/money.svg";
import Business from "@/public/svg/business.svg";
import Analysis from "@/public/svg/analysis.svg";

// TESTIMONIALS
import Testimonial1Img from "@/public/images/avatar-1.svg";
import Testimonial2Img from "@/public/images/avatar-2.png";
import Testimonial3Img from "@/public/images/avatar-3.png";

// LOAN PROPERTIES
import RateSvg from "@/public/svg/rate-svg.svg";
import CalenderSvg from "@/public/svg/calender-svg.svg";
import FastSvg from "@/public/svg/fast-svg.svg";
import RepaymentSvg from "@/public/svg/payment-svg.svg";

// TEAM MEMBERS
import FakoyeImg from "@/public/images/mr-taiwo Fakayode (COO).jpg";
import FrankImg from "@/public/images/mr-frank Odion. (Head Recovery).jpg";
import PreciousImg from "@/public/images/mrs-precious (Internal Control).jpeg";
import ShonayaImg from "@/public/images/tosin.jpeg";
import RasaqImg from "@/public/images/mr-rasaq (MD).jpg";
import IsrealImg from "@/public/images/mr-ogundeyi Israel.jpg";
import AyodejiImg from "@/public/images/ayodeji.jpeg";
import UdohImg from "@/public/images/uduh.jpeg";
import NoImg from "@/public/images/no-image.png";
import DiranImg from "@/public/images/diran.jpeg";
import OlamideImg from "@/public/images/olamide.jpeg";
import JohnsonImg from "@/public/images/Mr Johnson.jpeg";
import SegunImg from "@/public/images/Mr. Segun.jpeg";

//  ESG Images
import ESGImage1 from "@/public/images/esg-img1.png";
import ESGImage2 from "@/public/images/esg-img2.png";
import ESGImage3 from "@/public/images/esg-img3.png";

//  CSR Images
import CSRImage1 from "@/public/images/csr-img1.png";
import CSRImage2 from "@/public/images/csr-img2.png";

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
          "Our board of seasoned leaders drives sustained growth and excellence, ensuring alignment with our mission and core values.",
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
        href: "/media",
        color: "#E2EBF7",
        title: "Media",
        desc:
          "Get the latest insights, news, and updates on our products, services, and community initiatives from Springfield Microfinance Bank.",
      },
      {
        icon: PiBankFill,
        iconColor: "#EFAD00",
        href: "/esg",
        color: "#FFF7E2",
        title: "ESG",
        desc:
          "At Springfield Microfinance Bank, we are committed to operating in a responsible and sustainable manner. ",
      },

      {
        icon: RiUserStarFill,
        iconColor: "#1818D9",
        href: "/csr",
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
        icon: MdEnergySavingsLeaf,
        iconColor: "#03C15E",
        href: "/savings-account",
        color: "#E6FFF2",
        title: "Springfield Savings Account (SSA)",
        desc:
          "This is normal savings account with attractive interest for individuals, business owners, students and traders",
      },

      {
        icon: TbTargetArrow,
        iconColor: "#1818D9",
        href: "/current-account",
        color: "#E8E8FF",
        title: "Springfield Personal Current Account (SCA)",
        desc:
          "current account product designed to satisfy our customer’s dynamic business needs",
      },

      {
        icon: BiCurrentLocation,
        iconColor: "#CE6401",
        href: "/corporate-current-account",
        color: "#FFF3E8",
        title: "Springfield Corporate Current Account (SCCA)",
        desc:
          "a product designed to satisfy our customer’s dynamic business needs.",
      },

      {
        icon: BsCloudSunFill,
        iconColor: "#B900AA",
        href: "",
        color: "#FFE8FD",
        title: "Springfield Daily Contribution (SDC)",
        desc:
          "daily contribution account to encourage goal oriented savings of our customers. No Monthly charge and sms. Opportunity for loan.",
      },

      {
        icon: PiBankFill,
        iconColor: "#54606E",
        href: "",
        color: "#E2EBF7",
        title: "Springfield Target Account (STA)",
        desc:
          "This a special savings account crafted for customers to save for their financial goals. ",
      },

      {
        icon: MdGpsNotFixed,
        iconColor: "#EE5A02",
        href: "",
        color: "#FFE9DC",
        title: "Springfield Fixed Deposit Account (SPDA)",
        desc:
          "This is a fixed and tenured investment account with a goal to maximize financial returns on short, medium or long term bases.  ",
      },

      {
        icon: MdCalendarMonth,
        iconColor: "#4E4EFE",
        href: "",
        color: "#E8E8FF",
        title: "Springfield Annual Contribution Account (SACA):",
        desc:
          "This is a contribution account built to meet financial goals set for year-end achievements. ",
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
        title: "Springfield Asset Acquisation Loan (SAAL)",
        desc:
          "This is a product designed to give our customers access to funding asset acquisition like Home appliances, electronics, cars and phones etc.",
      },

      {
        icon: FaPersonShelter,
        iconColor: "#D80A12",
        href: "/shelter-loan",
        color: "#FFE6E7",
        title: "Springfield Micro Shelter Loan",
        desc:
          "Loan designed to help you build, renovate, or own your dream home with flexible repayment options tailored to your needs.",
      },

      {
        icon: IoSchoolSharp,
        iconColor: "#4E4EFE",
        href: "/school-support-product",
        color: "#E8E8FF",
        title: "Springfield School Support Product (3SP)",
        desc:
          "Designed for school owners, parents/guardian and tertiary students who seek financial empowerment toachieve their educational goals.",
      },

      {
        icon: MdPayment,
        iconColor: "#CE6401",
        href: "/weekly-repayment-facility",
        color: "#FFF3E8",
        title: "Springfield Weekly Repayment Facility (SWR) Features ",
        desc: "This is a weekly repayment loan for small businesses. ",
      },

      {
        icon: SlCalender,
        iconColor: "#1818D9",
        href: "",
        color: "#E8E8FF",
        title: "Springfield Annual Contribution Account (SACA)",
        desc:
          "This is a contribution account built to meet financial goals set for year-end achievements. ",
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
        href: "/instant-debit-card",
        color: "#E6FBFF",
        title: "Instant Debit Card",
        desc:
          "Get your debit card immediately after opening an account. Make purchases, withdraw cash, and check your balance anywhere, anytime.",
      },

      {
        icon: BiSolidMobileVibration,
        iconColor: "#00B457",
        href: "/mobile-banking",
        color: "#E6FFF2",
        title: "Mobile Banking",
        desc:
          "Banking just got easier! Download our Mobile Banking app and enjoy convenient, secure, and hassle-free banking on the go.",
      },

      {
        icon: TbPasswordMobilePhone,
        iconColor: "#CB06B3",
        href: "/agency-banking",
        color: "#FFE6FC",
        title: "Agency Banking",
        desc:
          "Bringing banking services closer to customers, reducing the need to travel long distances to access banking services.",
      },

      {
        icon: FaCalendarDays,
        iconColor: "#3333F5",
        href: "",
        color: "#E8E8FF",
        title: "Buy Now Pay Later",
        desc:
          "Take advantage of our Buy Now Pay Later option, offering flexible payment plans that let you shop with confidence and pay on your own terms.",
      },

      {
        icon: PiHashFill,
        iconColor: "#CE6401",
        href: "/ussd",
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
        href: "",
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
    title: "Fixed Deposit",
    description:
      "Explore our investment products designed to help your business grow and thrive, including asset management and retirement planning.",
    image: InsuranceImg,
  },

  {
    title: "SME Financing",
    description:
      "Boost your small or medium-sized enterprise with our specialized SME financing solutions. Springfield MfB supports entrepreneurs with customized financial packages to drive sustainable business growth.",
    image: TailorImg,
  },
];

export const WHY_CHOOSE_SPRINGFIELD = [
  {
    image: Money,
    name: "Convenience:",
    description:
      "- The loan repayment is typically structured to be convenient for the borrower. The Instalment are deducted directly from accounts, reducing the hassle of manual payments. ",
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
      '"Springfield MfB has been a lifeline for my business. The loan application process was quick, and the team ensured I understood every step. I was able to purchase more inventory and increase my sales significantly. Thank you, Springfield!"',
    image: Testimonial1Img,
    name: "Mary A.",
    role: "Igando, Lagos.",
  },

  {
    testimony:
      '"As a small business owner, accessing funds has always been a challenge. Springfield MfB changed that for me. Their team was supportive, professional, and genuinely interested in helping my business succeed. Today, my shop has grown beyond my expectations."',
    image: Testimonial2Img,
    name: "Adewale O.",
    role: "Iyana-Ipaja",
  },

  {
    testimony:
      '"Springfield MfB offers one of the most flexible loan repayment plans I’ve ever encountered. They worked with me to create a schedule that fit my income flow, making it easy to manage my finances without stress. I recommend them to anyone seeking financial support."',
    image: Testimonial3Img,
    name: "Funmi T.",
    role: "Ikeja, Lagos",
  },

  {
    testimony:
      '"What sets Springfield MfB apart is their dedication to their customers’ success. Beyond providing me with a loan, they gave me financial advice and guidance that have transformed my business operations. I feel valued and supported."',
    image: Testimonial3Img,
    name: "Chinyere E.",
    role: "Yaba",
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
    title: "Easy Access",
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
    title: "3-6 Months Tenure",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Between N100,000  to N500,000",
  },
  {
    icon: RepaymentSvg,
    title: "Termed Repayment",
    desc:
      " Make Manageable repayments that fit your schedule: Daily, Weekly, Monthly.",
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
    title: "3-6 Months Tenure",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Up to N3m",
  },
  {
    icon: RepaymentSvg,
    title: "Frequency of Repayment",
    desc: "Monthly",
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
    title: " Tenure",
    desc: "Up to 24 Months",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Loan up to 3,000,000.00",
  },
  {
    icon: RepaymentSvg,
    title: "Tenor Repayment Frequency",
    desc: "Monthly",
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
    title: "Tenure",
    desc: "Up to 12 Months",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Up to N3m",
  },
  {
    icon: RepaymentSvg,
    title: "Termed Repayment",
    desc: "Make Manageable repayments that fit your schedule",
  },
];

export const SCHOOL_LOAN_PROPERTIES = [
  {
    icon: RateSvg,
    title: "Competitive Interest Rate",
    desc:
      "Apply for a loan today and take advantage of our competitive interest rate",
  },
  {
    icon: CalenderSvg,
    title: "Tenure",
    desc: "Borrow for a short-term period and enjoy flexible repayment terms",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Get up to 3,000,000.00",
  },
  {
    icon: RepaymentSvg,
    title: "Termed Repayment",
    desc:
      "Make Manageable repayments that fit your schedule: Monthly, Quarterly etc.",
  },
];

export const WEEKLY_REPAYMENT_LOAN_PROPERTIES = [
  {
    icon: RateSvg,
    title: "Competitive Interest Rate",
    desc:
      "Apply for a loan today and take advantage of our competitive interest rate",
  },
  {
    icon: CalenderSvg,
    title: "Tenure",
    desc: "3-6 months (ie.12-24weeks)",
  },
  {
    icon: FastSvg,
    title: "Loan Range",
    desc: "Starting from N100k to Above N1m",
  },
  {
    icon: RepaymentSvg,
    title: "Termed Repayment",
    desc: "Weekly",
  },
];

export const LOAN_BENEFITS = [
  {
    title: "Quick Access to Funds",
    description:
      "Experience the ease of quick access to funds, providing immediate financial solutions at your fingertips. Whether it's an unexpected expense or an exciting opportunity.",
  },
  {
    title: "For loans up to N500,000",
    description:
      "Unlock financial opportunities hassle-free with our no-collateral-required solutions. Enjoy the freedom to secure funds without pledging assets.",
  },
  {
    title: "Short-Term Solution",
    description:
      "Address immediate financial needs with our short-term solution, offering quick relief without long-term commitments.",
  },
  // {
  //   title: "Credit History Not Always a Decisive Factor",
  //   description:
  //     "Some lenders may consider the borrower's income and employment status more heavily than their credit history when approving a loan. This can make loans accessible to individuals with a less-than-perfect credit history.",
  // },
  {
    title: "Predictable Repayments",
    description:
      "The fixed installment structure of loans makes it easier for borrowers to budget and plan for repayments since they know the exact amount that will be deducted from their each month.",
  },
  {
    title: "Convenience",
    description:
      "The repayment of a loan is typically structured to be convenient for the borrower. The installments are deducted directly from the, reducing the hassle of manual payments.",
  },
];

export const TEAM_MEMEBERS = [
  {
    name: "ADETUNJI RASAQ ADESHINA",
    role: "Managing Director / CEO",
    image: RasaqImg,
    summary:
      "Mr. Rasaq Adeshina is a graduate of Business Administration and Management from Osun State Polytechnic, Iree. He is the current Managing Director of Springfield Microfinance Bank. He is a member of the Chartered Institute of Bankers of Nigeria (CIBN) and the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years’ experience in Microfinance sector, having work in various Microfinance Banks at different positions. Prior to joining Springfield Microfinance Bank, he was the Managing Director of Kayvee Microfinance Bank Limited, Zonal Manager of Hasal Microfinance Bank Limited, Branch Manager/Coordinator of Northern Region at Accion Microfinance Bank Limited amongst others. He has attended several professional training seminars, courses and workshops on Microfinance and Risk Management Culture",
  },
  {
    name: "Mr Fakayode Taiwo Olusola",
    role: "Chief Operating Officer",
    image: FakoyeImg,
    summary:
      "Mr Fakayode Taiwo is a graduate of Accounting from Osun State College of Technology, Esa Oke. He is a member of the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years of experience in the banking sector, having worked in different financial institutions such as commercial banks, microfinance banks and mortgage banks. Prior to joining Springfield Microfinance Bank Limited, he was Head of Audit and Compliance at Stallion Microfinance Bank Limited, Chief Operation Officer at Hertrade Professional Management, Head, Credit and Risk at Mutual Alliance Mortgage Bank Limited amongst others.",
  },
  {
    name: "A. T. Shonaya Esq.",
    role: "Company Secretary / Head Legal",
    image: ShonayaImg,
    summary:
      "A. T. Shonaya Esq. is a committed, diligent and intelligent legal practitioner with a sound understanding of the law, its application and operation, coupled with a vast knowledge in information and communication technology. He acquired his LL.B from the University of Ilorin, Ilorin, Kwara State. He proceeded to the Nigerian Law School and acquired his B.L the following year. He is a member of the Nigerian Bar Association. He has over 6 years’ experience in the legal field, having worked in both the corporate and litigation sectors. Prior to joining Springfield Microfinance Bank, he was a Legal Officer at Sparklight Group,Legal Adviser of Orljaa Group, United Arab Emirates amongst others.He has attended various trainings on banking and finance law, corporatelaw, NHF etc.",
  },
  {
    name: "MR. UDOH EDIDIONG SAMUEL",
    role: "Head of Operations",
    image: UdohImg,
    summary:
      "He is a graduate of Ambrose Alli University, Ekpoma, Edo State, where he earned a Bachelor of Science (B.Sc.) degree in Business Administration. With over 18 years of comprehensive banking experience, he has established himself as a seasoned professional in the financial sector. He is a certified banker, holding the prestigious Microfinance Certification (MCIB) and a professional certificate from the Institute of Finance and Control of Nigeria (ACIFCN). His expertise spans various areas of banking operations, financial management, and control, making him a valuable asset in the microfinance banking industry.",
  },
  {
    name: "Mr. Frank Odion Esezobor",
    role: "Head Recovery/Mortgage",
    image: FrankImg,
    summary:
      "Mr. Frank Esezobor is a graduate of Political Science from Obafemi Awolowo University, Ile-Ife, Osun State. He has over 10 years’ experience in loan recovery, having commenced work as a Recovery Manager at Stallion Home Savings and Loan Limited from 2010 – 2014, before being promoted to head the loan recovery unit, which he occupied for 9 years.",
  },
  {
    name: "ISRAEL ADEOYE OGUNDEYI",
    role: "Head, Credit & Risk",
    image: IsrealImg,
    summary:
      "Mr. Israel Ogundeyi is a graduate of Banking and Finance from Lagos State University. He is a member of the Chartered Institute of Loan and Risk Management of Nigeria. He has over 15 years’ experience in the microfinance sector. Prior to joining Springfield Microfinance Bank. He was once the Chief Operating Officer of Premier Poverty Alleviation Initiative (PPAI). He has attended several professional training seminars, courses and workshops on Microfinance Operations.",
  },
  {
    name: "PRECIOUS NKEMJIKA R.",
    role: "Head, Internal Control/Audit",
    image: PreciousImg,
    summary:
      "Precious rich graduate of accounting from the university of Nigeria (unn). Member of institute of chattered accountants of Nigeria (Ican). Has 10 years experience in auditing, financial accounting , taxation and administration.She was once an external auditor with lawman Nzenwa &Co.She has attended several trainings on forensic accounting, auditing etc",
  },
  {
    name: "SOWUNMI AYODEJI MICHAEL",
    role: "Head, Information Technology",
    image: AyodejiImg,
    summary:
      "Mr. Sowunmi Ayodeji is an experienced IT professional with a strong academic background in Computer Science from Yaba College of Technology, Lagos. With over  eight years of experience in IT infrastructure management, system administration, and technical support, he has developed expertise in designing, implementing, and maintaining IT systems. Certified in CompTIA A+, Microsoft 365 Fundamentals, and CCNA, Mr. Sowunmi has led strategic technology initiatives as Head of IT, improving system efficiency and ensuring smooth IT operations in a microfinance banking environment. He has also provided consultancy services, helping businesses adopt innovative IT solutions for growth and success. A results-driven leader, he is committed to leveraging technology to achieve organizational goals.",
  },
];

export const DIRECTORS = [
  {
    name: "Dr. Diran Amosun MBBS",
    image: DiranImg,
    summary:
      "Dr. Diran Amosun MBBS is a product of College of Medicine, University of Lagos and Royal College of Anesthesiologist, United Kingdom. He is a renowned Anesthesiologist with over 20 years’ experience. He is a member of the American Board of Anesthesiologist, Royal College of Anesthesiologists. He is an anesthesiologist in group practice at Floyd Medical Center, Rome, Georgia, the Anesthesia Associates of Columbus, Georgia, covering three hospitals and one surgery center. He is also an Anesthesiologist with Amsol Physicians of Columbus, Georgia since 2010.",
  },
  {
    name: "Mr. Johnson Akhidenor",
    image: JohnsonImg,
    summary:
      "Mr. Johnson Akhidenor has his first degree from the University of Lagos (1998) and Master of Business Administration (2000) from Ambrose Alli University, Ekpoma, Edo State. He is also an Associate member of the Chartered Institute of Bankers, with over 20 years’ experience in Retail and Corporate Banking Operations, Mortgage Finance and Management Consulting. He has attended several professional training seminars, courses and workshops in commercial and mortgage banking.",
  },
  {
    name: "Mr. Courage Udoka Ogboli Ngbanwa",
    image: NoImg,
    summary:
      "Mr. Courage Ngbanwa is a graduate of Accounting from Babcock University, Ogun State. He holds a Master of Science in Management (Financial Analysis) from the University of Northampton, United Kingdom. He also holds a diploma, Bachelor of Arts and Master of Arts in Theology from the Pentecostal International Bible Seminary",
  },
  {
    name: "Olamide Adeyinka",
    image: OlamideImg,
    summary:
      "Olamide Adeyinka is a graduate of Arts in Economics, Minor Legal Studies at the University of Massachusetts, Lowell, MA. She received a double Masters in Business Administration and International Development & Social Change at Clark University, Worcester, Massachusetts, USA. She is a certified Project Management Professional at the Project Management Institute, Washington DC. She has almost 10 years of working experience in the USA, West Africa, Middle East, North Africa and Asia. She formerly worked with Chemonics International, Inc. in Washington DC, as a Project Manager. She also worked with the International Centre for Research on Women (ICRW) as a Project Manager in their Consulting and Advisory arm.",
  },
  {
    name: "Mr. Adesemoye Emmanuel Taiwo",
    image: NoImg,
    summary:
      "Mr. Adesemoye Taiwo is a chartered shipping practitioner with over 15 years’ experience in maritime transportation, shipping/haulage, logistics and freight forwarding. He acquired his HND in Maritime Transport (Shipping/Port Management) from College of Maritime Transport Management and Technology. He also has Post Graduate Professional Diploma in Transport and Logistics Management from The Institute of Transport Administration. Mr. Taiwo is a member of the Certified Institute of Shipping and the Chartered Institute of Transport and Administration. He is currently a partner at Kaysar Technology Limited.",
  },
  {
    name: "Mr. Olabode Segun Adedayo MNIM, FCA",
    image: SegunImg,
    summary:
      "Mr. Olabode is certified by the Nigerian Institute of Management and also a Chartered Accountant with a wealth of experience in the financial and real estate sector. He is currently the Managing Consultant/CEO of DSS Property Investment Limited. He is also the Managing Partner of Renaissance Professionals. He worked at Sparklight Property Development Company Limited, where he rose through the ranks from the position of an Account Officer to a NonExecutive Director. Mr. Olabode also a post graduate degree in Theology.",
  },
  {
    name: "Mr. Adetunji Rasaq Adeshina",
    image: RasaqImg,
    summary:
      "Mr. Rasaq Adeshina is a graduate of Business Administration and Management from Osun State Polytechnic, Iree. He is the current Managing Director of Springfield Microfinance Bank. He is a member of the Chartered Institute of Bankers of Nigeria (CIBN) and the Chartered Institute of Loan and Risk Management (CILRM). He has over 15 years’ experience in Microfinance sector, having work in various Microfinance Banks at different positions. Prior to joining Springfield Microfinance Bank, he was the Managing Director of Kayvee Microfinance Bank Limited, Zonal Manager of Hasal Microfinance Bank Limited, Branch Manager/Coordinator of Northern Region at Accion Microfinance Bank Limited amongst others. He has attended several professional training seminars, courses and workshops on Microfinance and Risk Management Culture",
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
    answer: "Not yet, Coming soon",
  },
  {
    question: "Is ATM card free?",
    answer: "No, this is coming soon",
  },
];

export const APP_FAQ_DATA = [
  {
    question: "How do I download the mobile app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque pariatur animi neque velit nulla, quaerat eligendi cumque et commodi",
  },
  {
    question: "Can I open an account on my mobile app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque pariatur animi neque velit nulla, quaerat eligendi cumque et commodi",
  },
  {
    question: "Can I make international transfer on the app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque pariatur animi neque velit nulla, quaerat eligendi cumque et commodi",
  },
  {
    question: "Is Virtual card free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque pariatur animi neque velit nulla, quaerat eligendi cumque et commodi",
  },
  {
    question: "Can I make international payment on the app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque pariatur animi neque velit nulla, quaerat eligendi cumque et commodi",
  },
];

export const STATES_IN_NIGERIA = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

//  ESG SECTIONS
export const ESGSections = [
  {
    title: "Environmental Stewardship",
    description:
      "We recognize the importance of protecting our planet and are dedicated to reducing our environmental impact.",
    items: [
      {
        title: "Energy Efficiency",
        text:
          "Implementing energy-saving practices across our facilities and investing in renewable energy sources.",
      },
      {
        title: "Waste Management",
        text:
          "Adopting waste reduction strategies and promoting recycling to minimize our ecological footprint.",
      },
      {
        title: "Sustainable Products and Services",
        text:
          "Offering eco-friendly solutions to help our customers reduce their environmental impact.",
      },
    ],
    image: ESGImage1,
    reverse: false,
  },
  {
    title: "Social Responsibility",
    description:
      "Our commitment to people and communities is at the heart of everything we do. We strive to empower individuals and drive positive change.",
    items: [
      {
        title: "Financial Inclusion",
        text:
          "Providing access to financial services for underserved populations to foster economic growth.",
      },
      {
        title: "Community Engagement",
        text:
          "Supporting local communities through philanthropic activities, educational programs, and partnerships.",
      },
      {
        title: "Diversity, Equity, and Inclusion (DEI)",
        text:
          "Promoting a workplace culture that values diversity and ensures equal opportunities for all.",
      },
    ],
    image: ESGImage2,
    reverse: true,
  },
  {
    title: "Governance Excellence",
    description:
      "Integrity and accountability are the cornerstones of our governance framework. We uphold the highest standards of ethics.",
    items: [
      {
        title: "Transparent Leadership",
        text:
          "Ensuring clear communication and decision-making processes that prioritize stakeholder trust.",
      },
      {
        title: "Risk Management",
        text:
          "Identifying and mitigating risks to safeguard the interests of our stakeholders.",
      },
      {
        title: "Compliance",
        text:
          "Adhering to all regulatory requirements and promoting ethical business practices.",
      },
    ],
    image: ESGImage3,
    reverse: false,
  },
];

// CSR PAGE
export const CSRSection1 = {
  title: "Empowering Through Action",
  description: "Our CSR initiatives are built around:",
  items: [
    {
      title: "Promoting Financial Literacy",
      text:
        "We empower individuals with the knowledge and tools to make informed financial decisions.",
    },
    {
      title: "Supporting Small Businesses",
      text:
        "By providing access to credit and entrepreneurial support, we help local businesses thrive.",
    },
    {
      title: "Enriching Communities",
      text:
        "From health campaigns to skill acquisition workshops, we actively contribute to the development of the communities we serve.",
    },
  ],
  image: CSRImage1,
  reverse: false,
};

export const CSRSection2 = {
  title: "Looking Ahead",
  description:
    "Springfield Microfinance Bank envisions a future where financial inclusion leads to shared prosperity. Our upcoming CSR plans include:",
  items: [
    {
      title: "Launching women-focused business loans.",
      text: "",
    },
    {
      title:
        "Collaborating with educational institutions to provide scholarships.",
      text: "",
    },
    {
      title: "Supporting environmental conservation efforts.",
      text: "",
    },
  ],
  image: CSRImage2,
  reverse: true,
};

// API URL
export const API_URL = "https://uat.springfieldmfb.com";
export const CHANNEL_ID = "WEBSITE";
export const CHANNEL_SECRET = "test";
