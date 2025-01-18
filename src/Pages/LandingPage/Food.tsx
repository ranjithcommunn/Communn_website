import SEO from "../../Components/Seo";
import Banner1 from "../../Assets/Images/LandingPage/Yoga/foodbg.webp";
import Banner2 from "../../Assets/Images/LandingPage/Yoga/foodbg.webp";
import Banner3 from "../../Assets/Images/LandingPage/Yoga/foodbg.webp";
import Image1 from "../../Assets/Images/LandingPage/foodfirst.webp";
import Image2 from "../../Assets/Images/LandingPage/foodmembers.webp";
import Image3 from "../../Assets/Images/LandingPage/foodplans.webp";
import Image4 from "../../Assets/Images/LandingPage/foodpayments.webp";
import Image5 from "../../Assets/Images/LandingPage/foodwhatsapp.webp";
import Image6 from "../../Assets/Images/LandingPage/foodbeloyal.webp";
import Image7 from "../../Assets/Images/LandingPage/foodmobile.webp";
import Image9 from "../../Assets/Images/LandingPage/Yoga/Save time.png";
import Image10 from "../../Assets/Images/LandingPage/Yoga/Retention.png";
import Image11 from "../../Assets/Images/LandingPage/Yoga/Loyal customers.png";
import Image12 from "../../Assets/Images/LandingPage/Yoga/Manage.png";
import Image13 from "../../Assets/Images/LandingPage/loginsection.webp";
import Image14 from "../../Assets/Images/LandingPage/createcommunity2.webp";
import Image15 from "../../Assets/Images/LandingPage/plans.webp";
import Image16 from "../../Assets/Images/LandingPage/buildcommunit.webp";
import Image17 from "../../Assets/Images/LandingPage/bank.webp";
import Image18 from "../../Assets/Images/LandingPage/invites.webp";
import bonusImage from "../../Assets/Images/LandingPage/Yoga/food1.webp";
import LandingPage from "../../Components/LandingPage";
import LandingBox from "../../Components/LandingBox";
import LandingTab from "../../Components/LandingTab";
import ContentImage from "../../Components/ContentImage";

const artistFeatureData = [
    {
        title: "Turn Subscribers into Lifelong Customers",
        description:
            "Our platform allows you to offer more than just food—create a personalized experience that keeps customers loyal. ",
        image: require("../../Assets/Images/LandingPage/Yoga/food2webp.webp"),
        list1: "Share exclusive meal tips and nutrition advice",
        list2: "Stay connected with customers through Whats App updates",
        list3: "Keep your customers excited and loyal to your service",

    },
];

const pageSubTitle = "Grow Your Business with Our All-in-One Platform";
const pageDescription =
    "Manage Customers, Payments, Content, and Subscriptions—All in One Place! Turn your food subscription service into a thriving community. Build customer loyalty, streamline operations, and give your clients more reasons to keep coming back.";

const sectionItems = [
    {
        title: "Save your time",
        image: `${Image9}`,
    },
    {
        title: "Increase Retention",
        image: `${Image10}`,
    },
    {
        title: "Build loyal Customers",
        image: `${Image11}`,
    },
    {
        title: "Manage in 15 mins",
        image: `${Image12}`,
    },
];

const accordionContent = [
    {
        label: "Engage your customers",
        image: `${Image1}`,
        title: "Engage your customers",
        description:
            "Share daily tips, nutritional advice, and announcements to keep customers coming back.",
    },
    {
        label: "Simplify Customer Management",
        image: `${Image2}`,
        title: "Simplify Customer Management",
        description:
            "Share daily tips, nutritional advice, and announcements to keep customers coming back.",
    },
    {
        label: "Customize & Manage Subscriptions",
        image: `${Image3}`,
        title: "Customize & Manage Subscriptions",
        description:
            "Customize meal plans and automate renewals for a hassle-free experience.",
    },
    {
        label: "Automated payment processing",
        image: `${Image4}`,
        title: "Automated payment processing",
        description:
            "Customize meal plans and automate renewals for a hassle-free experience.",
    },
    {
        label: "WhatsApp reminders",
        image: `${Image5}`,
        title: "WhatsApp reminders",
        description:
            "Send automatic payment and subscription renewal reminders via WhatsApp for added convenience.",
    },
    {
        label: "Build a Loyal Community",
        image: `${Image6}`,
        title: "Build a Loyal Community",
        description:
            "Foster customer loyalty through personalized communication and consistent engagement.",
    },
    {
        label: "Mobile-Friendly & Easy to Use",
        image: `${Image7}`,
        title: "Mobile-Friendly & Easy to Use",
        description:
            "Customize meal plans and automate renewals for a hassle-free experience.",
    },
];

const featureData = [
    {
        steps: "STEP 1 :",
        title: "Login to your account ",
        description:
            "Get started quickly with a hassle-free login using mobile OTP, Google, or Apple. Access your dashboard instantly and manage your business effortlessly.",
        image: `${Image13}`,
    },
    {
        steps: "STEP 2 :",
        title: "Create Your Community in Just 2 Steps",
        description:
            "Simply enter your community name and choose a category to begin. In minutes, your community is ready for you to manage and grow.",
        image: `${Image14}`,
    },
    {
        steps: "STEP 3 :",
        title: "Add Subscription Plans",
        description:
            "Set up flexible subscription options by adding the plan name, description, duration, and pricing. Tailor your offerings to meet the needs of your customers.",
        image: `${Image15}`,
    },
    {
        steps: "STEP 4 :",
        title: "Build Your Community by Engaging Customers",
        description:
            "Add all your business details, including services and offers, to keep customers informed and connected. Make your community engaging and inviting for all users.",
        image: `${Image16}`,
    },
    {
        steps: "STEP 5 :",
        title: "Add Bank Details for Seamless Payments",
        description:
            " Easily input your bank details to receive payments directly. Ensure a smooth transaction process for both you and your customers.",
        image: `${Image17}`,
    },
    {
        steps: "STEP 6 :",
        title: "Invite Members & Start Your Business!",
        description:
            "Invite customers to join your community and start growing your business today. With everything set up, you’re ready to deliver an exceptional experience.",
        image: `${Image18}`,
    },
];

export const Food = () => {
    const handClickButton = () => {
        window.location.href = "https://admin.onecommunn.com/";
    };

    return (
        <>
            <SEO title="Food - Delivery - Onecommunn" />
            <LandingPage
                pageSubTitle={pageSubTitle}
                pageDescription={pageDescription}
                featureData={artistFeatureData}
                banner1={Banner1}
                banner2={Banner2}
                banner3={Banner3}
                onClick={handClickButton}
                bonus="Bonus!"
                bonusSubheading="Get a Free Website for Your Gym — A Gift from Us!"
                bonusFirstHeading="Showcase Your Service & Attract More Customers"
                bonusDescription="When you join our platform, you’ll get a fully customizable website for your business—absolutely free! Display your offerings, highlight meal plans, and attract new customers effortlessly."
                bonusDescription1=" - Promote your services online. "
                bonusDescription2=" - Reach more customers with a professional, ready-to-use website."
                bonusDescription3=" - No extra cost—it’s our gift to you!"
                bonusImage={bonusImage}
            />
            <LandingTab
                accordionContent={accordionContent}
                heading="Why Choose Our Platform?"
                subheading="Imagine you interact with your customers, manage them, subscription and payments seamlessly all in 1 tool that too"
            />
            <ContentImage
                featureData={featureData}
            />
            <LandingBox
                title="Take Your Business to the Next Level"
                description1="With our platform, you’re not just delivering meals—you’re building a  "
                description2="loyal customer base that loves your brand. Let us help you manage  "
                description3="your business efficiently while giving your customers a unique experience."
                mobileDescription="With our platform, you’re not just delivering meals—you’re building a loyal customer base that loves your brand. Let us help you manage your business efficiently while giving your customers a unique experience."
                sectionItems={sectionItems}
                title2="Ready to Simplify Your Food Business?"
                description4="Get started with Onecommunn today and take your Food to the next level! 🌟"
            />
        </>
    );
};
