import SEO from "../../Components/Seo";
import UseCases from "../../Components/UseCases";
import meetImage from "../../Assets/Images/Usecases/Artist/H0.png";
import Banner1 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner2 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner3 from "../../Assets/Images/Usecases/Artist/mb1.webp";

const artistFeatureData = [
  {
    title: "Community Connection and Sharing ",
    description:
      "Sarah's fitness and wellness group becomes a vibrant haven where like-minded individuals gather to share their wellness journeys. Members join with ease, establishing a supportive environment for each other's growth. From beginners seeking guidance to experts offering insights, everyone finds a place to connect and exchange ideas.",
    image: require("../../Assets/Images/Usecases/Artist/A1.webp"),
  },
  {
    title: "Personalized Workouts and Nutritional Tips",
    description:
      "With Communn's efficient subscription management, Sarah can effortlessly offer tailored workout plans and nutritional tips to her community members. Each member gains access to the resources they need, enhancing their fitness journey.",
    image: require("../../Assets/Images/Usecases/Artist/A2.webp"),
  },
  {
    title: "Motivational Engagement",
    description:
      "Through Communn's dynamic chat system, Sarah orchestrates virtual fitness classes, Q&A sessions, and motivational chats. Members feel a personal connection to Sarah's guidance, fostering a sense of camaraderie that fuels their motivation.",
    image: require("../../Assets/Images/Usecases/Artist/A3.webp"),
  },
  {
    title: "Premium Subscription Access",
    description:
      "Communn's subscription management feature ensures members have seamless access to exclusive content. Whether it's advanced workout routines, in-depth nutritional guidance, or live interactive sessions, subscribers benefit from Sarah's expertise in a structured way.",
    image: require("../../Assets/Images/Usecases/Artist/A4.webp"),
  },
  {
    title: "Data-Driven Insights",
    description:
      " Communn's analytical tools allow Sarah to understand her community's preferences and engagement patterns. She fine-tunes her content, ensuring that her offerings align with her members' interests, thereby optimizing their experience.",
    image: require("../../Assets/Images/Usecases/Artist/A5.webp"),
  },
  {
    title: "Holistic Wellness Ecosystem",
    description:
      "Sarah's wellness community becomes a holistic ecosystem, integrating workout plans, nutritional advice, interactive sessions, and a space for genuine connections. The seamless integration of these elements empowers members to embark on comprehensive wellness journeys.",
    image: require("../../Assets/Images/Usecases/Artist/A6.webp"),
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

const pageTitle = "FITNESS AND WELLNESS ADVOCATE";
const pageSubTilte = "Empowering Wellness Warriors with Onecommunn";
const pageDescription =
  "Welcome to Communn, where communities flourish, connections thrive, and change becomes possible. We are More than a platform; a community revolution uniting strength and genuine connections.";
const meetName = "Sarah";
const meetDescription =
  ", an enthusiastic fitness and wellness advocate on a mission to cultivate a thriving community of health-conscious individuals. With the remarkable capabilities of Communn, Sarah's vision takes shape in an exhilarating journey towards wellness";

export const Wellness = () => {
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
        sectionTitle="Sarah's Business Transformation with Communn"
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
