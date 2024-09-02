import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Dashboard/1.webp"
import Banner2 from "../../Assets/Images/Features/Dashboard/Bg.webp"





const featuresData = [
    {
        title: "Effortless Member Management",
        description: "Our platform streamlines member organization and invites, letting you focus on community growth.",
        image: require("../../Assets/Images/Features/Dashboard/1.png")
    },
    {
        title: "Total Control in Your Hands",
        description: "Assign roles, elevate members, and manage who enters your community.",
        image: require("../../Assets/Images/Features/Dashboard/2.png")
    },
    {
        title: "Foster Engagement and Identity",
        description: "Customize your community with member-defined roles and contributions.",
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





const sectionTitle = "Simplify roles and permissions with"
const sectionSubTitle = "Member Management"
const sectionHeading = "Join us on a journey where community management becomes a breeze! 🚀"


export const Members = () => {



    return (
        <>
            <SEO title="Members - Onecommunn" />
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