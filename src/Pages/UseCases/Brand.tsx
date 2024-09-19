import SEO from "../../Components/Seo";
import UseCases from "../../Components/UseCases";
import meetImage from "../../Assets/Images/Usecases/Artist/H0.png";
import Banner1 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner2 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner3 from "../../Assets/Images/Usecases/Artist/mb1.webp";

const artistFeatureData = [
  {
    title: "The EcoChic Tribe ",
    description:
      "EcoChic establishes the GreenWave community, a hub for environmentally conscious individuals who share a love for sustainable fashion and a greener lifestyle.",
    image: require("../../Assets/Images/Usecases/Brand/B1.png"),
  },
  {
    title: "Exclusive Subscription Plans",
    description:
      "EcoChic offers subscription tiers like EcoPro and GreenElite. Subscribers get early access to new collections, special discounts, and sustainability tips tailored to their plan.",
    image: require("../../Assets/Images/Usecases/Brand/B2.webp"),
  },
  {
    title: "Interactive Styling Workshops",
    description:
      "GreenWave hosts monthly styling webinars, where subscribers interact with professional stylists. They learn how to mix and match EcoChic pieces, ensuring they make the most of their sustainable wardrobe.",
    image: require("../../Assets/Images/Usecases/Brand/B3.png"),
  },
  {
    title: "Sustainable Living Challenges",
    description:
      " EcoChic creates Green Challenges for the community. Subscribers engage in eco-friendly practices, from upcycling old clothes to reducing plastic usage. Prizes for successful challenges include exclusive EcoChic merchandise.",
    image: require("../../Assets/Images/Usecases/Brand/B4.webp"),
  },
  {
    title: "Preview of Ethical Collaborations",
    description:
      "Through GreenWave, subscribers get sneak peeks of upcoming collaborations with ethical brands. They have the chance to pre-order limited-edition products before they hit the market.",
    image: require("../../Assets/Images/Usecases/Brand/B5.png"),
  },
  {
    title: "Customized Eco-Tips",
    description:
      "Subscribers receive personalized tips on adopting sustainable habits in their daily lives. Whether it's recycling, energy-saving, or mindful consumption, EcoChic empowers them to make a positive impact.",
    image: require("../../Assets/Images/Usecases/Brand/B6.png"),
  },
  {
    title: "Loyalty Rewards & Points",
    description:
      "Active GreenWave members earn EcoCoins for engagement. These coins can be redeemed for exclusive discounts, plant-a-tree initiatives, or even a tree named after them.",
    image: require("../../Assets/Images/Usecases/Brand/B7.png"),
  },
  {
    title: "Annual EcoFest Gathering",
    description:
      "EcoChic organizes the EcoFest, an annual event bringing GreenWave members together. The festival celebrates sustainability with workshops, eco-fashion shows, and guest speakers.",
    image: require("../../Assets/Images/Usecases/Brand/B8.png"),
  },
  {
    title: "GreenWave Influencers",
    description:
      "Dedicated GreenWave members are recognized as brand ambassadors. They showcase their EcoChic outfits, share eco-tips, and inspire others to join the movement.",
    image: require("../../Assets/Images/Usecases/Brand/B9.png"),
  },
  {
    title: "Subscription Customization",
    description:
      "Subscribers have the flexibility to switch between EcoChic subscription plans, allowing them to align with their evolving needs while staying committed to a sustainable lifestyle.",
    image: require("../../Assets/Images/Usecases/Brand/B10.png"),
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

const pageTitle = "A FASHION BRAND";
const pageSubTilte = "Elevated Lifestyle Brand Experience With Onecommunn";
const pageDescription =
  "Welcome to Communn, where communities flourish, connections thrive, and change becomes possible. We are More than a platform; a community revolution uniting strength and genuine connections.";
const meetName = "EcoChic";
const meetDescription =
  ", a sustainable fashion brand that champions eco-friendly living. By leveraging Onecommunn's power, EcoChic revolutionizes brand engagement and subscription models";

export const Brand = () => {
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
        sectionTitle="EcoChic's Business Transformation with Oneommunn"
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
