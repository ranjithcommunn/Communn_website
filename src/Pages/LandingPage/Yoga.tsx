import SEO from "../../Components/Seo";
import meetImage from "../../Assets/Images/Usecases/Artist/H0.png";
import Banner1 from "../../Assets/Images/LandingPage/Yoga/Group 239407.webp";
import Banner2 from "../../Assets/Images/LandingPage/Yoga/Group 239407.webp";
import Banner3 from "../../Assets/Images/Usecases/Artist/mb1.webp";
import LandingPage from "../../Components/LandingPage";
import TabImageContent from "../../Components/Tab";


const artistFeatureData = [
    {
        title: "Manage Your Yoga Center Easily—Use WhatsApp or Our Software, Your Choice!",
        description: "We understand that using new software might feel overwhelming. That’s why with One Communn, you have options. You can manage everything through our powerful software, or if you prefer, handle it all on WhatsApp. Get reports, updates, and notifications directly on WhatsApp, while your users stay informed too. It’s simple, flexible, and designed to fit your comfort level.",
        image: require("../../Assets/Images/LandingPage/Yoga/Group 239413.webp"),
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



const pageTitle = "BUSINESS OWNER"
const pageSubTitle = "The Only Tool You Need to Transform Your Yoga Center"
const pageDescription = "Increase Retention, Save Time, Build Loyal Customers - Manage Your Yoga Center in Just 15 Minutes a Month!"
const meetName = "Adithi"
const meetDescription = ", a creative soul who never thought of herself as a community creator. But then she discovered Onecommunn, and suddenly a world of possibilities opened up before her."

export const Yoga = () => {


    const handClickButton = () => {
        window.location.href = 'https://admin.onecommunn.com/';
    }
    return (
        <>s
            <SEO title="Yoga - Onecommunn" />
            <LandingPage
                pageTitle={pageTitle}
                pageSubTitle={pageSubTitle}
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
            <TabImageContent />
        </>
    );
};
