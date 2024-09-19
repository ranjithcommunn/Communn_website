import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Community/1.webp"
import Banner2 from "../../Assets/Images/Features/Dashboard/Bg.webp"





const featuresData = [
    {
        title: "Admin Convenience",
        description: "Easily manage and access your communities from a centralized list. Edit profiles, create new communities, and ensure accurate representation.",
        image: require("../../Assets/Images/Features/Dashboard/1.png")
    },
    {
        title: "Instant Community landing page",
        description: "Boost community visibility with custom branding and a dedicated website at onecommunn.com/communityname, offering free marketing to all.",
        image: require("../../Assets/Images/Features/Dashboard/2.png")
    },
    {
        title: "Create new communities",
        description: "Unleash your creativity with unlimited community creation. Communn's platform empowers you to curate spaces that match your vision.",
        image: require("../../Assets/Images/Features/Dashboard/3.png")
    },
]

const dashboardData = [
    {
        title: "Organized Command Center",
        description:"Seamlessly manage all your communities from one spot. This unified dashboard brings ease to your multitasking, letting you efficiently navigate through your various community domains.",
        image: require("../../Assets/Images/Usecases/Artist/A1.webp"),
    },
    {
        title: "Vibrant Community Profiles",
        description: "Breathe life into your community's identity. Craft captivating profiles by uploading attention-grabbing logos, banners, and comprehensive descriptions. Share your community's essence, aspirations, and services, painting a vivid picture for your members.",
        image: require("../../Assets/Images/Usecases/Artist/A2.webp"),
    },
    {
        title: "Unique Community Websites",
        description: " Every community deserves a spotlight. With Communn, each community receives its dedicated virtual haven at onecommunn.com/communityname. An instant web address to flaunt your community's distinctive identity, engage members, and fuel curiosity.",
        image: require("../../Assets/Images/Usecases/Artist/A3.webp"),
    },
    {
        title: "Amplified Engagement",
        description:
            "Empower your members with insights. As you meticulously enhance community details, you create an engaging platform. This increased engagement sparks discussions, drives participation, and fosters a sense of belonging.",
        image: require("../../Assets/Images/Usecases/Artist/A4.webp"),
    },
    {
        title: "Effortless Updates",
        description: "Keep your community's details fresh and relevant. Effortlessly edit, refine, and improve your community's online presence whenever needed, ensuring your members always have the latest information.",
        image: require("../../Assets/Images/Usecases/Artist/A5.webp"),
    },
    {
        title: "Personal Touch",
        description: "Beyond the digital realm, your community's online face becomes a tangible representation. Your community members can visit and explore this personalized web space, fostering a stronger connection.",
        image: require("../../Assets/Images/Usecases/Artist/A6.webp"),
    },
];





const sectionTitle = "Explore communities effortlessly through"
const sectionSubTitle = "the Community List"
const sectionHeading = "Join us on a journey where community management becomes a breeze! 🚀"


export const Communities = () => {



    return (
        <>
            <SEO title="Communities - Onecommunn" />
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