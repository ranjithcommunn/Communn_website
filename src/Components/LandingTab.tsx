import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./animations.css";
import { useNavigate } from "react-router-dom";

interface ITableContent {
  heading?: string;
  subheading?: string;
  accordionContent: {
    label?: string;
    image?: string;
    title?: string;
    description?: string;
  }[];
}

const LandingTab = (props: ITableContent) => {
  const [expanded, setExpanded] = useState<string | false>("panel0");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 5 }, margin: "0 auto" }}>
      {/* Heading Section */}
      <Stack sx={{ p: 1 }}>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
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
          {props?.heading}
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
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
          {props?.subheading}
        </Typography>
      </Stack>
      <Stack sx={{ pt: { xs: 0, md: 7 }, px: 3 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid item xs={12} md={7}>
            <TransitionGroup>
              {props?.accordionContent.map((content, index) => (
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
                      style={{ width: "95%", borderRadius: "8px" }}
                    />
                  </Box>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Grid>

          <Grid item xs={12} md={5} data-aos="fade-up" data-aos-duration="1000">
            {props?.accordionContent.map((content, index) => (
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
        {props?.accordionContent.map((content, index) => (
          <Box
            key={index}
            sx={{
              display: { xs: "flex", md: "none" },
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "fit-content", md: "100vh" },
              p: 0,
            }}
          >
            <Stack sx={{ p: 0 }}>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                spacing={{ xs: 0, md: 10 }}
                sx={{
                  flexDirection: {
                    xs: "column-reverse",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                }}
              >
                <Grid item xs={12} md={5} sx={{ my: { xs: 2, md: 0 } }}>
                  <Box
                    component="img"
                    src={content.image}
                    alt={content.title}
                    sx={{ width: "100%" }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack
                    sx={{
                      ml: 0,
                      pt: 0,
                      backgroundColor: "#ffffff",
                      borderRadius: "15px",
                    }}
                  >
                    <Paper sx={{ p: 0, boxShadow: "none" }}>
                      <Typography
                        sx={{
                          color: "#2A53A2",
                          fontSize: { xs: "18px", md: "24px" },
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                          pb: 2,
                        }}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        {content.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          color: "#1A2D4C",
                          fontSize: { xs: "13px", md: "15px" },
                          lineHeight: "30px",
                        }}
                        data-aos="fade-up"
                        data-aos-duration="900"
                      >
                        {content.description}
                      </Typography>
                    </Paper>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        ))}
        <Stack
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              textTransform: "capitalize",
              backgroundColor: "#000000",
              borderRadius: "30px",
              mt: 5,

              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#50A1CA",
                cursor: "pointer",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Get a free installation now!
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              color: "#2B2B2B",
              my: 2,
              fontFamily: "Montserrat",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 500,
            }}
          >
            Only for early customers
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LandingTab;
