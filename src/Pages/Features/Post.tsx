import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Post/1.webp"
import Banner2 from "../../Assets/Images/Features/Dashboard/Bg.webp"





const featuresData = [
    {
        title: "Empower Members as Contributors",
        description: "Create a knowledge-rich community by allowing members to share their insights, tips, and experiences, fostering an engaging hub of shared expertise.",
        image: require("../../Assets/Images/Features/Dashboard/1.png")
    },
    {
        title: "Quality Control in Your Hands",
        description: "Ensure only relevant and valuable content is showcased. Grant admin-exclusive posting rights or extend it to members. Admins can curate and maintain the community's essence.",
        image: require("../../Assets/Images/Features/Dashboard/2.png")
    },
    {
        title: "Insights and Oversight for Admins",
        description: "Admins monitor content, manage posts, and adhere to community guidelines, ensuring content quality and engagement through detailed reporting.",
        image: require("../../Assets/Images/Features/Dashboard/3.png")
    },
]

const dashboardData = [
    {
        title: "Empowerment through Sharing",
        description:
            "Picture this: You're an admin with multiple communities. With our smart filters, effortlessly navigate through your communities and find exactly what you need. No more hunting, just swift access.",
        image: require("../../Assets/Images/Features/Post/2.webp"),
    },
    {
        title: "Admin's Watchful Eye",
        description:
            "Admins use detailed reports for content oversight, ensuring compliance with guidelines and maintaining quality.",
        image: require("../../Assets/Images/Features/Post/3.webp"),
    },
    {
        title: "Boost Engagement, Expand Reach",
        description:
            "Admins enable every member to post, maximizing engagement. With 100% reach, your community's value amplifies, sparking lively discussions and sharing of diverse perspectives.",
        image: require("../../Assets/Images/Features/Post/4.webp"),
    },
    {
        title: "Community Empowerment & Resolution",
        description:
            " Empower members to report posts for moderation. Admins analyze reported content, taking swift actions to maintain a harmonious, productive environment.",
        image: require("../../Assets/Images/Features/Post/5.webp"),
    },
    {
        title: "Quality Assurance & Flexibility",
        description:
            "Admins can make posts inactive to preserve history or delete them for a clean slate. Edits and content management ensure a dynamic, evolving community space. This means every piece of content adds value, ensuring a meaningful experience for everyone.",
        image: require("../../Assets/Images/Features/Post/6.webp"),
    },
    
];





const sectionTitle = "Streamline content tasks with"
const sectionSubTitle = "Posts Management"
const sectionHeading = "Effortless Community Content Management"


export const Post = () => {



    return (
        <>
            <SEO title="Post - Onecommunn" />
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