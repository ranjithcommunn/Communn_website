import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image1 from "../Assets/Images/LandingPage/Yoga/1.webp";
import Image2 from "../Assets/Images/LandingPage/Yoga/2webp.webp";
import Image3 from "../Assets/Images/LandingPage/Yoga/3.webp";
import Image4 from "../Assets/Images/LandingPage/Yoga/4.webp";
import Image5 from "../Assets/Images/LandingPage/Yoga/5.webp";
import Image6 from "../Assets/Images/LandingPage/Yoga/6.webp";
import Image7 from "../Assets/Images/LandingPage/Yoga/7.webp";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./animations.css";

interface AccordionContent {
  label: string;
  image: string;
  title: string;
  description: string;
}

const accordionContent: AccordionContent[] = [
  {
    label: "Interact with your customers seamlessly",
    image: `${Image1}`,
    title: "Interact with your customers seamlessly",
    description:
      "Stay connected with your clients effortlessly—share tips, make important announcements, and keep all your customers under one roof. No need for multiple apps to interact with them anymore.",
  },
  {
    label: "Simplify Customer Management",
    image: `${Image2}`,
    title: "Simplify Customer Management",
    description:
      "No more books or Excel sheets! Collect all the necessary details during onboarding and manage them seamlessly in one place. Track your members' details, attendance, and preferences with ease, freeing up more time to focus on their well-being.",
  },
  {
    label: "Customize & Manage Subscriptions",
    image: `${Image3}`,
    title: "Customize & Manage Subscriptions",
    description:
      "Offer flexible subscription plans without the hassle of manual renewals and reminders. We handle that for you, so you don't have to call or remind your clients again and again.",
  },
  {
    label: "Effortless Payment Management",
    image: `${Image4}`,
    title: "Effortless Payment Managements",
    description:
      "We understand you collect cash too, so we've made it incredibly simple. Add cash records in just 30 seconds, track all your payments, and view reports on who has paid and who hasn't—all aligned with your payment cycle.",
  },
  {
    label: "Manage Multiple Yoga Centers with Ease",
    image: `${Image5}`,
    title: "Manage Multiple Yoga Centers with Ease",
    description:
      "Efficiently oversee all your centers, staff, and members from one centralized place. Say goodbye to the stress of multi-location management and enjoy a streamlined experience.",
  },
  {
    label: "Manage courses",
    image: `${Image6}`,
    title: "Manage courses",
    description:
      "Keep all your course materials organized and easily accessible. Offer a seamless learning experience for all your classes.",
  },
  {
    label: "Reports",
    image: `${Image7}`,
    title: "Reports",
    description:
      "Receive clear, detailed reports on payments, member activity. Stay informed and make data-driven decisions to improve your yoga center’s performance effortlessly.",
  },
];

const YogaCenterManagementAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ padding: 5, margin: "0 auto" }}>
      {/* Heading Section */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 2,
          color: "#2952A2",
          fontFamily: "Montserrat",
          fontSize: { xs: "25px", md: "35px" },
        }}
      >
        All that you need to manage your yoga center effortlessly
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          color: "#2B2B2B",
          marginBottom: 4,
          fontFamily: "Montserrat",
          fontSize: { xs: "14px", md: "16px" },
          fontWeight: 500,
        }}
      >
        Imagine you interact with your customers, manage them, subscription and
        payments seamlessly all in 1 tool that too
      </Typography>
      <Stack sx={{ pt: 7 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <TransitionGroup>
              {accordionContent.map((content, index) => (
                <CSSTransition key={index} timeout={500} classNames="fade">
                  <Box
                    sx={{
                      display: expanded === `panel${index}` ? "block" : "none",
                      textAlign: "center",
                    }}
                  >
                    <img
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      src={content.image}
                      alt={content.title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Grid>

          <Grid item xs={12} md={5}>
            {accordionContent.map((content, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{ boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color:
                        expanded === `panel${index}` ? "#2952A2" : "#2B2B2B",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "18px", md: "20px", fontWeight: "bold" },
                    }}
                  >
                    {content.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: 2,
                      fontFamily: "Montserrat",
                      fontSize: { xs: "18px", md: "15px", color: "#2B2B2B" },
                    }}
                  >
                    {content.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default YogaCenterManagementAccordion;
