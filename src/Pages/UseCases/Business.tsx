import SEO from "../../Components/Seo";
import UseCases from "../../Components/UseCases";
import meetImage from "../../Assets/Images/Usecases/Artist/H0.png";
import Banner1 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner2 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner3 from "../../Assets/Images/Usecases/Artist/mb1.webp";

const artistFeatureData = [
  {
    title: "Community Building and Engagement   ",
    description:
      "Lisa establishes the 'JewelAdorn Community' on Communn, offering her customers and followers an exclusive space to connect, discuss fashion, and access her expertise.",
    image: require("../../Assets/Images/Usecases/Business/3.webp"),
  },
  {
    title: "Subscription Management",
    description:
      "Members can easily choose a plan, subscribe, and enjoy the perks. Communn's subscription management automates billing, ensuring a seamless experience for Lisa and her customers.",
    image: require("../../Assets/Images/Usecases/Business/4.webp"),
  },
  {
    title: "Community Engagement with Members",
    description:
      "Lisa shares her latest collection in the community, fostering engagement and customer feedback, thereby strengthening the bond between her and her customers.",
    image: require("../../Assets/Images/Usecases/Business/5.webp"),
  },
  {
    title: "Payment and Transaction Management",
    description:
      "Communn allows Lisa to monitor subscription payments, revenue, popular plans, inventory planning, and financial transparency by providing detailed reports and settled/unsettled balances.",
    image: require("../../Assets/Images/Usecases/Business/6.png"),
  },
  {
    title: "Analytics and Insights",
    description:
      " Lisa uses analytics dashboard to track community growth, engagement metrics, and post reach, identifying higher engagement for posts about handmade techniques, thereby adjusting her content strategy.",
    image: require("../../Assets/Images/Usecases/Business/7.webp"),
  },
  {
    title: "Chat System for Real-Time Interaction",
    description:
      "Lisa uses live chat to showcase new products, allowing customers to ask questions, share preferences, and make purchase inquiries, enhancing their personalized shopping experience.",
    image: require("../../Assets/Images/Usecases/Business/8.png"),
  },
];

const business = [
  {
    name: "Platform Fees",
    percentage: "0%",
  },
  {
    name: "Engagement",
    percentage: "73%",
  },
  {
    name: "Revenue Growth",
    percentage: "50%",
  },
  {
    name: "Member Retention",
    percentage: "18%",
  },
];

const pageTitle = "BUSINESS OWNER";
const pageSubTilte = "Boosting Business Engagement with Onecommunn";
const pageDescription =
  "Welcome to Communn, where communities flourish, connections thrive, and change becomes possible. We are More than a platform; a community revolution uniting strength and genuine connections.";
const meetName = "Lisa";
const meetDescription =
  ", a small business owner with an online boutique specializing in unique handmade jewelry. Explore how Communn transforms her business";

export const Business = () => {
  const handClickButton = () => {
    window.location.href = "https://admin.onecommunn.com/";
  };
  return (
    <>
      <SEO title="Business - Onecommunn" />
      <UseCases
        pageTitle={pageTitle}
        pageSubTilte={pageSubTilte}
        pageDescription={pageDescription}
        sectionTitle="Lisa's Business Transformation with Communn"
        featureData={artistFeatureData}
        meetImage={meetImage}
        businessesData={business}
        businessHeading="Businesses Thrive with Communn: A Path to Success"
        banner1={Banner1}
        banner2={Banner2}
        banner3={Banner3}
        meetName={meetName}
        meetDescription={meetDescription}
        onClick={handClickButton}
      />
    </>
  );
};
