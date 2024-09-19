import Features from "../../Components/Features"
import SEO from "../../Components/Seo"
import Banner1 from "../../Assets/Images/Features/Plans/1.webp"
import Banner2 from "../../Assets/Images/Features/Dashboard/Bg.webp"





const featuresData = [
    {
        title: "Plan Personalization",
        description: "Craft plans that match your community's unique essence. Define costs, durations, and billing frequencies for plans that resonate with every member.",
        image: require("../../Assets/Images/Features/Dashboard/1.png")
    },
    {
        title: "Membership Insights",
        description: "Track who's subscribed to each plan, ensuring you stay connected with your community's evolving needs.",
        image: require("../../Assets/Images/Features/Dashboard/2.png")
    },
    {
        title: "Flexibility Redefined",
        description: "Personalize plans to perfection. Offer exclusive discounts, flexible durations, and varied billing cycles for a subscription journey that suits all preferences.",
        image: require("../../Assets/Images/Features/Dashboard/3.png")
    },
]

const dashboardData = [
    {
        title: "Diverse Subscription Models",
        description:"Onecommunn provides flexible subscription options, including monthly, annual, and one-time plans.",
        image: require("../../Assets/Images/Features/Plans/2.webp"),
    },
    {
        title: "Hassle-Free Payments",
        description: "Say goodbye to the headache of handling payments manually. Communn integrates with secure payment gateways, ensuring seamless and secure transactions for both you and your subscribers.",
        image: require("../../Assets/Images/Features/Plans/3.webp"),
    },
    {
        title: "Customizable Plans",
        description:"Tailor your subscription plans to meet your audience's needs. Set different price points, durations, and benefits to cater to a wide range of subscribers.",
        image: require("../../Assets/Images/Features/Plans/4.webp"),
    },
    {
        title: "Automated Billing",
        description:"Forget about chasing down payments. Communn automates billing, ensuring your subscribers are charged accurately and on time. It's effortless revenue generation at your fingertips.",
        image: require("../../Assets/Images/Features/Plans/5.webp"),
    },
    {
        title: "Membership Tiers",
        description:"Create multiple subscription tiers, each offering unique benefits. This encourages subscribers to choose a plan that aligns with their preferences, giving them a sense of exclusivity.",
        image: require("../../Assets/Images/Features/Plans/6.webp"),
    },
    {
        title: "Subscriber Insights",
        description:
            "Gain valuable insights into your subscribers' preferences and behaviors. Understand what content or perks resonate most, allowing you to fine-tune your offerings for maximum engagement.",
        image: require("../../Assets/Images/Features/Plans/7.webp"),
    },
    {
        title: "Notifications and Reminders",
        description:
            "Keep your subscribers informed and engaged with automated notifications and reminders. Notify them about upcoming payments, new content releases, or exclusive events.",
        image: require("../../Assets/Images/Features/Plans/8.webp"),
    },
];





const sectionTitle = "Customize subscriptions with"
const sectionSubTitle = "Subscription Management"
const sectionHeading = "Empowering Subscription Management: Tailor-Made Plans for Community Success"


export const Subscription = () => {



    return (
        <>
            <SEO title="Subscriptions   - Onecommunn" />
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