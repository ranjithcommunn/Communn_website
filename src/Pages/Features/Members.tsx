import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Members/2.webp"
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
        title: "Filters that Unveil Clarity",
        description:
            "Picture this: You're an admin with multiple communities. With our smart filters, effortlessly navigate through your communities and find exactly what you need. No more hunting, just swift access.",
        image: require("../../Assets/Images/Features/Members/3.webp"),
    },
    {
        title: "Admin Power, Admin Choices",
        description:
            " Feel the empowerment as you wield the power to select communities you're an admin of, instantly generating tailored results. Manage and nurture your communities with precision, all at your fingertips.",
        image: require("../../Assets/Images/Features/Members/4.webp"),
    },
    {
        title: "The Magic of Invitations",
        description:
            "Be a community builder, inviting new members with a click. Watch your community flourish as you welcome like-minded individuals, creating an even stronger bond.",
        image: require("../../Assets/Images/Features/Members/5.webp"),
    },
    {
        title: "Empowerment in Member Management",
        description:
            " Become the conductor of your community orchestra. Elevate members, switch roles, and even observe their activity status. Control who stays and who thrives.",
        image: require("../../Assets/Images/Features/Members/6.webp"),
    },
    {
        title: "Unlock Your Private Realm",
        description:
            "For private communities, we're your gatekeepers. Approve requests, connect with potential members, and sculpt the perfect community for your vision.",
        image: require("../../Assets/Images/Features/Members/7.webp"),
    },
    {
        title: "Identity at a Glance",
        description:
            "Elevate your members' uniqueness! Assign roles like Gym Trainer, Fitness Enthusiast, and more. Let them shine and contribute effectively within your community.",
        image: require("../../Assets/Images/Features/Members/9.webp"),
    },
    {
        title: "Warn the ones who violates community guidelines to Ensure Community Harmony",
        description:
            "Foster a harmonious environment with a gentle warning system that encourages respect and cooperation.",
        image: require("../../Assets/Images/Features/Members/10.webp"),
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