import SEO from "../../Components/Seo";
import Banner1 from "../../Assets/Images/LandingPage/Yoga/gymbg.webp";
import Banner2 from "../../Assets/Images/LandingPage/Yoga/gymbg.webp";
import Banner3 from "../../Assets/Images/LandingPage/Yoga/gymbg.webp";
import Image1 from "../../Assets/Images/LandingPage/Yoga/gym.webp";
import Image2 from "../../Assets/Images/LandingPage/Yoga/gym2.webp";
import Image3 from "../../Assets/Images/LandingPage/Yoga/gym3.webp";
import Image4 from "../../Assets/Images/LandingPage/Yoga/gym4.webp";
import Image5 from "../../Assets/Images/LandingPage/Yoga/gym5.webp";
import Image6 from "../../Assets/Images/LandingPage/Yoga/gym6.webp";
import Image7 from "../../Assets/Images/LandingPage/Yoga/gym7.webp";
import Image9 from "../../Assets/Images/LandingPage/Yoga/Save time.png";
import Image10 from "../../Assets/Images/LandingPage/Yoga/Retention.png";
import Image11 from "../../Assets/Images/LandingPage/Yoga/Loyal customers.png";
import Image12 from "../../Assets/Images/LandingPage/Yoga/Manage.png";
import bonusImage from "../../Assets/Images/LandingPage/Yoga/gymbonus.webp";
import LandingPage from "../../Components/LandingPage";
import LandingBox from "../../Components/LandingBox";
import LandingTab from "../../Components/LandingTab";

const artistFeatureData = [
  {
    title: "Manage Your Gym Easily—Use WhatsApp or Our Software, Your Choice!",
    description:
      "With One Communn, manage everything through our powerful software or simply via WhatsApp. Get reports, updates, and notifications, keeping it simple and flexible for you!",
    image: require("../../Assets/Images/LandingPage/Yoga/Group 239413.webp"),
  },
];

const pageSubTitle = "The Only Tool You Need to Transform Your Gym";
const pageDescription =
  "Increase Retention, Save Time, Build Loyal Customers—Manage Your Gym in Just 15 Minutes a Month!";

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
    label: "Easily Interact with Members",
    image: `${Image1}`,
    title: "Easily Interact with Members",
    description:
      "Stay connected with your customers effortlessly—share tips, make important announcements, and keep all your customers under one roof. No need for multiple apps to interact with them anymore.",
  },
  {
    label: "Simplify Member Management",
    image: `${Image2}`,
    title: "Simplify Member Management",
    description:
      "Ditch the spreadsheets! Manage all member details, track attendance, and customize preferences—all in one platform.",
  },
  {
    label: "Automate Subscriptions",
    image: `${Image3}`,
    title: "Automate Subscriptions",
    description:
      "Offer flexible membership plans without worrying about manual renewals or reminders. We'll handle it for you!",
  },
  {
    label: "Effortless Payment Management",
    image: `${Image4}`,
    title: "Effortless Payment Management",
    description:
      "Accept payments, including cash, and track everything in real time. Add cash payments in 30 seconds and view detailed reports on who has paid or missed payments.",
  },
  {
    label: "Manage Multiple Gym Locations",
    image: `${Image5}`,
    title: "Manage Multiple Gym Locations",
    description:
      "Oversee all your locations, staff, and members from one place—no more stressful multi-location management.",
  },
  {
    label: "Keep Course Materials Organized",
    image: `${Image6}`,
    title: "Keep Course Materials Organized",
    description:
      "Manage all your classes and workouts in an organized, easy-to-access system.",
  },
  {
    label: "Access Detailed Reports",
    image: `${Image7}`,
    title: "Access Detailed Reports",
    description:
      "Get clear reports on member activity, payments, and more to make data-driven decisions to grow your gym.",
  },
];

export const Gym = () => {
  const handClickButton = () => {
    window.location.href = "https://admin.onecommunn.com/";
  };

  return (
    <>
      <SEO title="Gym - Onecommunn" />
      <LandingPage
        pageSubTitle={pageSubTitle}
        pageDescription={pageDescription}
        featureData={artistFeatureData}
        banner1={Banner1}
        banner2={Banner2}
        banner3={Banner3}
        onClick={handClickButton}
        bonus="Bonus!"
        bonusSubheading="Get a Free Website for Your Gym — A Gift from Us!"
        bonusHeading1="Showcase Your Centre"
        bonusHeading2="Attract New Customers"
        bonusHeading3="Market Your Gym"
        bonusDescription1="Highlight your trainers, equipment, and facilities"
        bonusDescription2=" Expand your reach and bring more members to your gym."
        bonusDescription3="Easily market your gym and fitness classes."
        bonusImage={bonusImage}
      />
      <LandingTab
        accordionContent={accordionContent}
        heading="All that you need to manage your Gym effortlessly"
        subheading="Imagine you interact with your customers, manage them, customize subscriptions and collect payments seamlessly all in 1 tool that too along with whatsapp updates."
      />
      <LandingBox
        title="Exclusive Offer: Free Installation for Early Customers!"
        description1="Join the future of gym management. "
        description2="Let One Communn handle the admin work so you can focus "
        description3="on what matters - helping your clients achieve their fitness goals."
        mobileDescription="Join the future of gym management. Let One Communn handle the admin work so you can focus on what matters—helping your clients achieve their fitness goals."
        sectionItems={sectionItems}
        title2="Ready to Simplify Your Gym Business?"
        description4="Get started with One Communn today and take your Gym to the next level! 🌟"
      />
    </>
  );
};
