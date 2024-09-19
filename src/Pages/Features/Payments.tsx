import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Payments/1.webp"
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
        title: "Unveiling Financial Insights",
        description:
            "Step into a realm of transparency. Communn reveals the intricate details of every transaction. Dive into reports that dissect each payment, providing a complete understanding of your community's financial flow.",
        image: require("../../Assets/Images/Features/Payments/2.webp"),
    },
    {
        title: "Tracking Revenue with Precision",
        description:
            "No revenue detail goes unnoticed. Witness the growth as you track total earnings, settled balances, and unsettled figures. Stay ahead of the financial curve with real-time data at your fingertips.",
        image: require("../../Assets/Images/Features/Payments/3.webp"),
    },
    {
        title: "Balancing the Books",
        description:
            " Financial equilibrium is crucial. Communn's Reports section helps you maintain a balanced financial ecosystem. Allocate resources strategically, ensuring your community thrives.",
        image: require("../../Assets/Images/Features/Payments/4.webp"),
    },
    {
        title: "Customization at Your Fingertips",
        description:
            "No two communities are alike, and Communn acknowledges that. Tailor your insights by filtering results based on selected communities or specific dates. This customization aids in making data-driven decisions.",
        image: require("../../Assets/Images/Features/Payments/5.webp"),
    },
    {
        title: "Effortless Financial Communication",
        description:
            "Seamlessly request payments from members for community-related matters. Admins can even personalize requests, addressing unique needs while keeping financial records precise and hassle-free.",
        image: require("../../Assets/Images/Features/Payments/6.webp"),
    },
];



const sectionTitle = "Handle transactions seamlessly with"
const sectionSubTitle = "Payment Management"
const sectionHeading = "Join us on a journey where community management becomes a breeze! 🚀"


export const Payments = () => {



    return (
        <>
            <SEO title="Payments - Onecommunn" />
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