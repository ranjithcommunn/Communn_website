import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Dashboard/1.webp"
import Banner2 from "../../Assets/Images/Features/Dashboard/Bg.webp"





const featuresData = [
    {
        title: "Strategic Decision-Making",
        description: "Visualize member engagement, posts, transactions, and more. Take data-driven actions to enhance your community's experience.",
        image: require("../../Assets/Images/Features/Dashboard/1.png")
    },
    {
        title: "Track Growth",
        description: "Monitor community health with easy-to-understand metrics. Compare trends, identify spikes, and strategize for consistent growth.",
        image: require("../../Assets/Images/Features/Dashboard/2.png")
    },
    {
        title: "Tailored Strategies",
        description: "Understand visitor sources, focus on specific communities, and filter by dates. Craft personalized approaches for maximum impact.",
        image: require("../../Assets/Images/Features/Dashboard/3.png")
    },
]

const dashboardData = [
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





const sectionTitle = "Access real-time insights with our"
const sectionSubTitle = "Dashboard"
const sectionHeading = "Empowering Decisions with Insights: Your Communn Dashboard"


export const Post = () => {



    return (
        <>
            <SEO title="DashBoard - Onecommunn" />
            <Features
                features={featuresData}
                featureData={dashboardData}
                banner1={Banner1}
                banner2={Banner2}
                sectionTitle={sectionTitle}
                sectionSubTitle={sectionSubTitle}
                sectionHeading={sectionHeading}
            />
        </>
    )
}