import SEO from "../../Components/Seo";
import Banner1 from "../../Assets/Images/LandingPage/Yoga/yogabgwebp.webp";
import Banner2 from "../../Assets/Images/LandingPage/Yoga/yogabgwebp.webp";
import Banner3 from "../../Assets/Images/LandingPage/Yoga/yogabgwebp.webp";
import Image1 from "../../Assets/Images/LandingPage/Yoga/Home.webp";
import Image2 from "../../Assets/Images/LandingPage/Yoga/Members.webp";
import Image3 from "../../Assets/Images/LandingPage/Yoga/Plans.webp";
import Image4 from "../../Assets/Images/LandingPage/Yoga/Payments.webp";
import Image5 from "../../Assets/Images/LandingPage/Yoga/Commmunity.webp";
import Image6 from "../../Assets/Images/LandingPage/Yoga/Courses.webp";
import Image7 from "../../Assets/Images/LandingPage/Yoga/Reports.webp";
import Image9 from "../../Assets/Images/LandingPage/Yoga/Save time.png";
import Image10 from "../../Assets/Images/LandingPage/Yoga/Retention.png";
import Image11 from "../../Assets/Images/LandingPage/Yoga/Loyal customers.png";
import Image12 from "../../Assets/Images/LandingPage/Yoga/Manage.png";
import bonusImage from "../../Assets/Images/LandingPage/Yoga/yogas2.webp";
import LandingPage from "../../Components/LandingPage";
import LandingBox from "../../Components/LandingBox";
import LandingTab from "../../Components/LandingTab";

const artistFeatureData = [
  {
    title:
      "Manage Your Yoga Center Easily—Use WhatsApp or Our Software, Your Choice!",
    description:
      "With One Communn, manage everything through our powerful software or simply via WhatsApp. Get reports, updates, and notifications, keeping it simple and flexible for you!",
    image: require("../../Assets/Images/LandingPage/Yoga/Group 239413.webp"),
  },
];

const pageSubTitle = "The Only Tool You Need to Transform Your Yoga Center";
const pageDescription =
  "Increase Retention, Save Time, Build Loyal Customers - Manage Your Yoga Center in Just 15 Minutes a Month!";

const sectionItems = [
  {
    title: "Save your time",
    image: `${Image9}`,
  },
  {
    title: "Increase Retention",
    image: `${Image10}`,
  },
  {
    title: "Build loyal Customers",
    image: `${Image11}`,
  },
  {
    title: "Manage in 15 mins",
    image: `${Image12}`,
  },
];

const accordionContent = [
  {
    label: "Seamlessly Connect with Your Customers",
    image: `${Image1}`,
    title: "Seamlessly Connect with Your Customers",
    description:
      "Stay connected with your customers effortlessly—share tips, make important announcements, and keep all your customers under one roof. No need for multiple apps to interact with them anymore.",
  },
  {
    label: "Simplify Customer Management",
    image: `${Image2}`,
    title: "Simplify Customer Management",
    description:
      "No more books or Excel sheets! Collect all the necessary details during onboarding and manage them seamlessly in one place. Track your members' details, attendance, and preferences with ease, freeing up more time to focus on their well-being.",
  },
  {
    label: "Customize & Manage Subscriptions",
    image: `${Image3}`,
    title: "Customize & Manage Subscriptions",
    description:
      "Offer flexible subscription plans without the hassle of manual renewals and reminders. We handle that for you, so you don't have to call or remind your clients again and again.",
  },
  {
    label: "Effortless Payment Management",
    image: `${Image4}`,
    title: "Effortless Payment Managements",
    description:
      "We understand you collect cash too, so we've made it incredibly simple. Add cash records in just 30 seconds, track all your payments, and view reports on who has paid and who hasn't—all aligned with your payment cycle.",
  },
  {
    label: "Manage Multiple Yoga Centers with Ease",
    image: `${Image5}`,
    title: "Manage Multiple Yoga Centers with Ease",
    description:
      "Efficiently oversee all your centers, staff, and members from one centralized place. Say goodbye to the stress of multi-location management and enjoy a streamlined experience.",
  },
  {
    label: "Manage courses",
    image: `${Image6}`,
    title: "Manage courses",
    description:
      "Keep all your course materials organized and easily accessible. Offer a seamless learning experience for all your classes.",
  },
  {
    label: "Reports",
    image: `${Image7}`,
    title: "Reports",
    description:
      "Receive clear, detailed reports on payments, member activity. Stay informed and make data-driven decisions to improve your yoga center’s performance effortlessly.",
  },
];

export const Yoga = () => {
  const handClickButton = () => {
    window.location.href = "https://admin.onecommunn.com/";
  };

  return (
    <>
      <SEO title="Yoga - Onecommunn" />
      <LandingPage
        pageSubTitle={pageSubTitle}
        pageDescription={pageDescription}
        featureData={artistFeatureData}
        banner1={Banner1}
        banner2={Banner2}
        banner3={Banner3}
        onClick={handClickButton}
        bonus="Bonus!"
        bonusSubheading="Get a Free Website for Your Yoga Center—A Gift from Us!"
        bonusHeading1="Showcase Your Centre"
        bonusHeading2="Attract New Customers"
        bonusHeading3="Market Your Yoga Centre"
        bonusDescription1="Display your classes, instructors, and facilities in style."
        bonusDescription2="Expand your reach and bring more clients to your center."
        bonusDescription3="Easily promote your offerings to a broader audience with just a few clicks."
        bonusImage={bonusImage}
      />
      <LandingTab
        accordionContent={accordionContent}
        heading="All that you need to manage your yoga center effortlessly"
        subheading="Imagine you interact with your customers, manage them, customize subscriptions and collect payments seamlessly all in 1 tool that too along with whatsapp updates."
      />
      <LandingBox
        title="Join the Future of Yoga Management"
        description1="Let Onecommunn handle the business side of things while you focus"
        description2="on what you do best—teaching and inspiring. It’s easy to get"
        description3="started, and we’re here to support you every step of the way."
        mobileDescription="
Let Onecommunn handle the business side of things while you focus
on what you do best—teaching and inspiring. It’s easy to get
started, and we’re here to support you every step of the way."
        sectionItems={sectionItems}
        title2="Ready to Simplify Your Yoga Business?"
        description4="Get started with One Communn today and take your yoga center
to the next level! 🌟"
      />
    </>
  );
};
