import SEO from "../../Components/Seo";
import UseCases from "../../Components/UseCases";
import meetImage from "../../Assets/Images/Usecases/Artist/H0.png";
import Banner1 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner2 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner3 from "../../Assets/Images/Usecases/Artist/mb1.webp";

const artistFeatureData = [
  {
    title: "Culinary Dreams Come True ",
    description:
      "With Communn's intuitive platform, Aisha realizes she can create a community dedicated to her culinary expertise. She starts sharing her delicious recipes, meal planning tips, and cooking hacks. What was once a hobby now becomes a space where she can inspire and uplift others through her love for cooking.",
    image: require("../../Assets/Images/Usecases/HomeMaker/H1.webp"),
  },
  {
    title: "Nurturing a Supportive Network",
    description:
      "Nurturing a Supportive Network As Aisha's community grows, she witnesses a beautiful transformation. Home makers from different corners of the world join her community, exchanging recipes, sharing cultural insights, and cheering each other on. Aisha becomes not just a homemaker but also a mentor and friend to many",
    image: require("../../Assets/Images/Usecases/HomeMaker/H2.webp"),
  },
  {
    title: "Transitioning to Entrepreneurship",
    description:
      "Lisa shares her latest collection in the community, fostering engagement and customer feedback, thereby strengthening the bond between her and her customers.",
    image: require("../../Assets/Images/Usecases/HomeMaker/H3.webp"),
  },
  {
    title: "A Confidence Boost",
    description:
      " Aisha's journey as a community creator boosts her self-confidence. She's no longer defined solely by her role as a homemaker; she's an entrepreneur, a leader, and a creator. Her community becomes a hub of positivity, where members uplift and empower each other to pursue their dreams.",
    image: require("../../Assets/Images/Usecases/HomeMaker/H4.png"),
  },
  {
    title: "Tracking Growth with Analytics",
    description:
      " Communn's analytics provide Aisha with insights into what her community members love most. She tailors her content and offerings based on this feedback, ensuring that she's meeting their needs and aspirations effectively.",
    image: require("../../Assets/Images/Usecases/HomeMaker/H5.webp"),
  },
  {
    title: "A Journey of Transformation",
    description:
      " With Communn, Aisha discovers that her passion for cooking isn't just a hobby; it's a powerful tool for personal transformation. Her journey from a traditional homemaker to a dynamic community creator inspires her family and friends, showing them that with the right platform, one can create a life of purpose and empowerment.",
    image: require("../../Assets/Images/Usecases/HomeMaker/H6.png"),
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

const pageTitle = "HOME MAKER";
const pageSubTilte = "Empowering Home Makers for a Fresh Start with Onecommunn";
const pageDescription =
  "Welcome to Onecommunn, where communities flourish, connections thrive, and change becomes possible. We are More than a platform; a community revolution uniting strength and genuine connections.";
const meetName = "Aisha";
const meetDescription =
  ", a dedicated homemaker who has always put her family's needs before her own aspirations. However, with the advent of Onecommunn, her life takes an unexpected turn towards personal growth and financial independence.";

export const HomeMaker = () => {
  const handClickButton = () => {
    window.location.href = "https://admin.onecommunn.com/";
  };
  return (
    <>
      <SEO title="Home Maker - Onecommunn" />
      <UseCases
        pageTitle={pageTitle}
        pageSubTilte={pageSubTilte}
        pageDescription={pageDescription}
        sectionTitle="Aisha's Business Transformation with Onecommunn"
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
