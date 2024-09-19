
import SEO from "../../Components/Seo"
import HomeBanner from "./HomeBanner"
import HomeContentWithImage from "./HomeContentwithImageLeft"
import HomeSectionTwo from "./HomeSectionTwo"
import HomeUseCases from "./HomeUseCases"
import Image1 from "./../../Assets/Images/Home/5.webp"
import Image2 from "./../../Assets/Images/Home/7.png"
import Image3 from "./../../Assets/Images/Home/8.png"
import HomeContentWithImageRight from "./HomeContentWithImageRight"






export const Home = () => {
    return (
        <>
            <SEO title="Home - Onecommunn" />
            <HomeBanner />
            <HomeSectionTwo />
            <HomeUseCases />
            <HomeContentWithImage
            title="Effortlessly Manage your Community"
            description="Say goodbye to complicated management tasks. With Communn, you can effortlessly and efficiently handle tasks such as organizing content, managing members, managing payments and overseeing community operations without encountering unnecessary challenges or complications all through our user-friendly tools."
            image={Image1}/>
            <HomeContentWithImageRight title="Elevate with Subscriptions creation"
            description="Discover a new world of possibilities with subscriptions. Communn empowers you to transform your audience into a vibrant and loyal community. Generate recurring revenue, foster meaningful connections, and create a sustainable ecosystem that benefits both you and your members."
            image={Image2}/>
            <HomeContentWithImage
            title="Communicate and Interact with Ease"
            description="Experience seamless communication and transform the way you engage with your community. Communn provides powerful tools and intuitive communication channels to build strong connections. Foster discussions, inspire interactions, and keep your members COMING BACK FOR MORE."
            image={Image3}/>
        </>
    )
}