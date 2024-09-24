import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { ButtonStyle } from "./UsesCases.styles";
import LandingForm from "./LandingForm";

interface UseCasesProps {
  pageSubTitle?: string;
  pageDescription?: string;
  banner1?: string;
  banner2?: string;
  banner3?: string;
  banner4?: string;
  featureData: {
    title: string;
    description: string;
    image: string;
  }[];
  bonus?: string;
  bonusSubheading?: string;
  bonusHeading1?: string;
  bonusHeading2?: string;
  bonusHeading3?: string;
  bonusDescription1?: string;
  bonusDescription2?: string;
  bonusDescription3?: string;
  bonusImage?: string;
  onClick: () => void;
}

const LandingPage: React.FC<UseCasesProps> = ({
  featureData,
  banner1,
  banner2,
  banner3,
  banner4,
  pageDescription,
  pageSubTitle,
  bonus,
  bonusSubheading,
  bonusHeading1,
  bonusHeading2,
  bonusHeading3,
  bonusDescription1,
  bonusDescription2,
  bonusDescription3,
  bonusImage,
  onClick,
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "fit-content",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          mt: -12,
        }}
      >
        <Stack>
          <Grid
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Grid item xs={12} md={7}>
              <Stack
                sx={{
                  ml: { xs: 0, md: 10 },
                  pb: 6,
                  backgroundColor: "#ffffff",
                  alignItems: { xs: "center", md: "flex-start" },
                  mt: { xs: 10, md: 0 },
                }}
              >
                <Paper
                  sx={{
                    p: 5,
                    boxShadow: "none",
                    alignItems: { xs: "center", md: "flex-start" },
                    display: { xs: "flex", md: "block" },
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2A53A2",
                      fontSize: { xs: "20px", md: "30px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      textAlign: { xs: "center", md: "left" },
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {pageSubTitle}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "13px", md: "15px" },
                      lineHeight: "30px",
                      mr: { xs: 0, md: 20 },
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {pageDescription}
                  </Typography>
                  <a href="#form">
                    <Button
                      variant="contained"
                      sx={ButtonStyle}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Book a demo
                    </Button>
                  </a>
                </Paper>
              </Stack>
            </Grid>

            <Grid
              item
              xs={5}
              sx={{
                backgroundImage: `url(${banner1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                component={"img"}
                src={banner2}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: { xs: "contents", md: "none" },
              }}
            >
              <Box
                data-aos="fade-up"
                data-aos-duration="1000"
                component={"img"}
                src={banner3}
                alt=""
                sx={{
                  width: "100%",
                  mt: -10,
                  display: "flex",
                  justifyContent: "flex-end",
                  ml: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>

      {/* <Stack
        data-aos="fade-up"
        data-aos-duration="1000"
        sx={{
          mt: "-250px",
          alignItems: "center",
          justifyContent: "flex-start",
          display: { xs: "none", md: "flex" },
        }}
      >
        <LandingForm />
      </Stack> */}

      {/* Mobile Version */}

      {featureData.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "fit-content", md: "85vh" },
          }}
        >
          <Stack>
            <Grid
              container
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              spacing={{ xs: 2, md: 10 }}
              sx={{
                flexDirection: {
                  xs: "column-reverse",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
                pb: { md: "80px" },
              }}
            >
              <Grid item xs={12} md={5} sx={{ m: { xs: 2, md: 0 } }}>
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack
                  sx={{
                    ml: 2,
                    pt: { xs: 0, md: 6 },
                    pb: { xs: 0, md: 6 },
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                  }}
                >
                  <Paper sx={{ p: 2, boxShadow: "none" }}>
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
                      {feature.title}
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
                      {feature.description}
                    </Typography>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "fit-content", md: "85vh" },
        }}
      >
        <Stack>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 10 }}
            sx={{
              pb: { md: "50px" },
            }}
          >
            <Grid item xs={12} md={5}>
              <Stack
                sx={{
                  ml: 2,
                  pt: { xs: 0, md: 6 },
                  pb: { xs: 0, md: 6 },
                  backgroundColor: "#ffffff",
                  borderRadius: "15px",
                }}
              >
                <Paper sx={{ p: 2, boxShadow: "none" }}>
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
                    {bonus}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "15px", md: "17px" },
                      lineHeight: "30px",
                      fontWeight: "500",
                      pb: 2,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    {bonusSubheading}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "13px", md: "15px" },
                      lineHeight: "30px",

                      pb: 2,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#2A53A2",
                        fontSize: { xs: "13px", md: "15px" },
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                      }}
                    >
                      1. {bonusHeading1}:
                    </Typography>{" "}
                    {bonusDescription1}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "13px", md: "15px" },
                      lineHeight: "30px",

                      pb: 2,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#2A53A2",
                        fontSize: { xs: "13px", md: "15px" },
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                      }}
                    >
                      2.{bonusHeading2}:
                    </Typography>{" "}
                    {bonusDescription2}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "13px", md: "15px" },
                      lineHeight: "30px",

                      pb: 2,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#2A53A2",
                        fontSize: { xs: "13px", md: "15px" },
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                      }}
                    >
                      3.{bonusHeading3}:
                    </Typography>{" "}
                    {bonusDescription3}
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} sx={{ m: { xs: 2, md: 0 } }}>
              <Box
                component="img"
                src={bonusImage}
                alt={""}
                sx={{ width: "100%" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default LandingPage;
