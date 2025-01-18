import SEO from "../../Components/Seo";
import Banner1 from "../../Assets/Images/LandingPage/Yoga/tubg.webp";
import Banner2 from "../../Assets/Images/LandingPage/Yoga/tubg.webp";
import Banner3 from "../../Assets/Images/LandingPage/Yoga/tubg.webp";
import Image1 from "../../Assets/Images/LandingPage/Yoga/tution1.webp";
import Image2 from "../../Assets/Images/LandingPage/Yoga/tution2.webp";
import Image3 from "../../Assets/Images/LandingPage/Yoga/tution3.webp";
import Image4 from "../../Assets/Images/LandingPage/Yoga/tution4.webp";
import Image5 from "../../Assets/Images/LandingPage/Yoga/tution5.webp";
import Image6 from "../../Assets/Images/LandingPage/Yoga/tution6.webp";
import Image7 from "../../Assets/Images/LandingPage/Yoga/tution7.webp";
import Image9 from "../../Assets/Images/LandingPage/Yoga/Save time.png";
import Image10 from "../../Assets/Images/LandingPage/Yoga/Retention.png";
import Image11 from "../../Assets/Images/LandingPage/Yoga/Loyal customers.png";
import Image12 from "../../Assets/Images/LandingPage/Yoga/Manage.png";
import bonusImage from "../../Assets/Images/LandingPage/Yoga/Tb.webp";
import LandingPage from "../../Components/LandingPage";
import LandingBox from "../../Components/LandingBox";
import LandingTab from "../../Components/LandingTab";

const artistFeatureData = [
  {
    title:
      "Manage Your Tuition Center Easily—Use WhatsApp or Our Software, Your Choice!",
    description:
      "With One Communn, manage everything through our powerful software or simply via WhatsApp. Get reports, updates, and notifications, keeping it simple and flexible for you!",
    image: require("../../Assets/Images/LandingPage/Yoga/Group 239413.webp"),
  },
];

const pageSubTitle = "The Only Tool You Need to Transform Your Tuition Center";
const pageDescription =
  "Increase Retention, Save Time, Build Loyal Customers—Manage Your TuitionCenter in Just 15 Minutes a Month!";

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
    label: "Seamlessly Connect with Your Students & Parents",
    image: `${Image1}`,
    title: "Seamlessly Connect with Your Students & Parents",
    description:
      "Stay connected with students and parents effortlessly. Share important updates, make announcements, and keep everyone on the same page. No need for multiple apps or endless phone calls.",
  },
  {
    label: "Simplify Student Management",
    image: `${Image2}`,
    title: "Simplify Student Management",
    description:
      "Forget about manually managing Excel sheets or files! Collect all the necessary details during student onboarding and manage them in one place. Track attendance, performance, and learning preferences with ease, freeing up time to focus on teaching.",
  },
  {
    label: "Customize & Manage Subscriptions",
    image: `${Image3}`,
    title: "Customize & Manage Subscriptions",
    description:
      "Offer flexible plans without worrying about manual renewals. Our software handles everything—from sending reminders to automatic renewals. You focus on teaching, and we’ll take care of the rest.",
  },
  {
    label: "Effortless Payment Management ",
    image: `${Image4}`,
    title: "Effortless Payment Management ",
    description:
      "Whether you accept digital payments or cash, we’ve made it simple for you to record and track every transaction. Add cash payments in 30 seconds, and get clear reports on who has paid and who hasn’t—aligned with your payment cycle.",
  },
  {
    label: "Manage Multiple Tuition Branches with Ease",
    image: `${Image5}`,
    title: "Manage Multiple Tuition Branches with Ease",
    description:
      "If you run multiple tuition centers, we’ve got you covered. Manage all your locations, teachers, and students from a single platform—making multi-location management stress-free.",
  },
  {
    label: "Organize Your Course Materials",
    image: `${Image6}`,
    title: "Organize Your Course Materials",
    description:
      "Keep your study materials, assignments, and notes in one organized system. Make it easy for your students to access course content, ensuring a smoother learning experience.",
  },
  {
    label: "Comprehensive Reports",
    image: `${Image7}`,
    title: "Comprehensive Reports",
    description:
      "Receive detailed reports on payments, student progress, and center performance. Make informed, data-driven decisions to improve your tuition center’s efficiency and success.",
  },
];

export const Tution = () => {
  const handClickButton = () => {
    window.location.href = "https://admin.onecommunn.com/";
  };

  return (
    <>
      <SEO title="Tution - Onecommunn" />
      <LandingPage
        pageSubTitle={pageSubTitle}
        pageDescription={pageDescription}
        featureData={artistFeatureData}
        banner1={Banner1}
        banner2={Banner2}
        banner3={Banner3}
        onClick={handClickButton}
        bonus="Bonus!"
        bonusSubheading="Get a Free Website for Your Tuition Center—A Gift from Us!"
        bonusHeading1="1. Showcase Your Centre : "
        bonusHeading2="2. Attract New Customers : "
        bonusHeading3="3. Market Your Tuition Centre : "
        bonusDescription1="Display your classes, instructors, and achievements with a professional online presence."
        bonusDescription2="Expand your reach and bring more students to your center."
        bonusDescription3="Easily promote your offerings to a broader audience with just a few clicks."
        bonusImage={bonusImage}
      />
      <LandingTab
        accordionContent={accordionContent}
        heading="All You Need to Manage Your Tuition Center Effortlessly"
        subheading="Imagine managing students, personalizing subscription plans, and collecting payments—seamlessly, all through one tool, with WhatsApp updates too."
      />
      <LandingBox
        title="Get a Free Installation Now! Only for Early Customers"
        description1="Let One Communn handle the business side of things while you focus on what you do  "
        description2="best - teaching and inspiring students. It’s easy to get started, "
        description3="and we’re here to support you every step of the way."
        mobileDescription="Let One Communn handle the business side of things while you focus on what you do best—teaching and inspiring students. It’s easy to get started, and we’re here to support you every step of the way."
        sectionItems={sectionItems}
        title2="Ready to Simplify Your Tuition Business?"
        description4="Get started with One Communn today and take your Tuition center to the next level! 🌟"
      />
    </>
  );
};
