import SEO from "../../Components/Seo";
import UseCases from "../../Components/UseCases";
import meetImage from "../../Assets/Images/Usecases/Artist/H0.png";
import Banner1 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner2 from "../../Assets/Images/Usecases/Artist/w1.webp";
import Banner3 from "../../Assets/Images/Usecases/Artist/mb1.webp";


const artistFeatureData = [
    {
        title: "The Spark of Inspiration",
        description:
            "Adithi, an artist and hobbyist, always wanted to share her passion for painting. She believed in the magic of connecting with like-minded individuals who appreciate her art. And that's when she stumbled upon Communn.",
        image: require("../../Assets/Images/Usecases/Artist/A1.webp"),
    },
    {
        title: "Connecting and Collaborating",
        description:
            "With Communn's user-friendly interface, Adithi could easily invite fellow artists, art enthusiasts, and potential buyers to her community. This wasn't just a space for sharing; it was a platform for collaborating on projects, exchanging techniques, and even organizing virtual art shows.",
        image: require("../../Assets/Images/Usecases/Artist/A2.webp"),
    },
    {
        title: "Earning Through Passion",
        description:
            "Communn's subscription management captured Adithi's attention. She saw the potential of turning her community into a source of income. By offering exclusive content, tutorials, and personalized art commissions through subscription tiers, she could earn while doing what she loved most.",
        image: require("../../Assets/Images/Usecases/Artist/A3.webp"),
    },
    {
        title: "Empowering the Community",
        description:
            "As Adithi's community grew, she noticed its members becoming more than just participants; they were becoming a close-knit family. She fostered an environment where constructive feedback, encouragement, and support flourished.",
        image: require("../../Assets/Images/Usecases/Artist/A4.webp"),
    },
    {
        title: "Analytics for Growth",
        description:
            "With Communn's analytics, Adithi could track engagement, learn which content resonated the most, and adjust her offerings accordingly. This data-driven approach allowed her to cater to her community's preferences and aspirations.",
        image: require("../../Assets/Images/Usecases/Artist/A5.webp"),
    },
    {
        title: "Beyond Boundaries",
        description:
            "As Adithi's community flourished, she realized that Communn's platform wasn't just about art; it was about connections, empowerment, and unlocking hidden potential. Her journey as a community creator not only brought her financial rewards but also friendships and Artistic growth.",
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



const pageTitle = "AN ARTIST"
const pageSubTilte = "Anyone can use"
const pageDescription = "Welcome to Communn, where communities flourish, connections thrive, and change becomes possible. We are More than a platform; a community revolution uniting strength and genuine connections."
const meetName = "Adithi"
const meetDescription = ", a creative soul who never thought of herself as a community creator. But then she discovered Onecommunn, and suddenly a world of possibilities opened up before her."

export const Artist = () => {


    const handClickButton = () => {
        window.location.href = 'https://admin.onecommunn.com/';
    }
    return (
        <>
            <SEO title="Artist - Onecommunn" />
            <UseCases
                pageTitle={pageTitle}
                pageSubTilte={pageSubTilte}
                pageDescription={pageDescription}
                sectionTitle="Adithi's Business Transformation with Onecommunn"
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
