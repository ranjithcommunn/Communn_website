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
        title: "Member Engagement on Display",
        description:
            "A vibrant community thrives on engagement. The Dashboard offers a bird's-eye view of member interactions, helping admins understand what's buzzing and what's not.",
        image: require("../../Assets/Images/Features/Dashboard/2.webp"),
    },
    {
        title: "Numbers that Speak",
        description:
            "See how your community is progressing. Compare current metrics with the previous month's stats. With increase or decrease percentages, you'll gauge your community's direction with clarity.",
        image: require("../../Assets/Images/Features/Dashboard/3.webp"),
    },
    {
        title: "Comparative Analysis",
        description:
            "Communn's subscription management captured Adithi's attention. She saw the potential of turning her community into a source of income. By offering exclusive content, tutorials, and personalized art commissions through subscription tiers, she could earn while doing what she loved most.",
        image: require("../../Assets/Images/Features/Dashboard/4.webp"),
    },
    {
        title: "Visitor Insights",
        description:"Know your audience. The Dashboard lets you peek into the origins of your visitors. Understand where they're coming from and tailor your strategies accordingly.",
        image: require("../../Assets/Images/Features/Dashboard/5.webp"),
    },
    {
        title: "Customization at Your Fingertips",
        description:
            "Filter the data to your liking. Focus on specific communities, narrow down by dates, and refine your insights.",
        image: require("../../Assets/Images/Features/Dashboard/6.webp"),
    },
    
];





const sectionTitle = "Access real-time insights with our"
const sectionSubTitle = "Dashboard"
const sectionHeading = "Empowering Decisions with Insights: Your Communn Dashboard"


export const DashBoard = () => {



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