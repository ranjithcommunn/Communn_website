import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Business } from "../Pages/UseCases/Business";
import { DashBoard } from "../Pages/Features/DashBoard";
import { Post } from "../Pages/Features/Post";
import { Payments } from "../Pages/Features/Payments";
import { Members } from "../Pages/Features/Members";
import { Subscription } from "../Pages/Features/Subscription";
import { Home } from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import { Communities } from "../Pages/Features/Communities";
import { Yoga } from "../Pages/LandingPage/Yoga";
import { HomeMaker } from "../Pages/UseCases/HomeMaker";
import { Wellness } from "../Pages/UseCases/Wellness";
import { Brand } from "../Pages/UseCases/Brand";
import { YogaTeacher } from "../Pages/UseCases/YogaTeacher";
import { PrivacyPolicy } from "../Pages/Help/PrivacyPolicy";
import { TermsAndCondition } from "../Pages/Help/TermsandConditions";
import { RefundPolicy } from "../Pages/Help/RefundPolicy";
import { Tution } from "../Pages/LandingPage/Tution";
import { Gym } from "../Pages/LandingPage/Gym";
import NotFound from "../Pages/404/404";
import ThankYou from "../Pages/404/ThankYou";
import { Food } from "../Pages/LandingPage/Food";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/tuition" element={<Tution />} />
          <Route path="/food-delivery" element={<Food />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/business" element={<Business />} />
          <Route path="/home-maker" element={<HomeMaker />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/teacher" element={<YogaTeacher />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/members" element={<Members />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-uses" element={<TermsAndCondition />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
