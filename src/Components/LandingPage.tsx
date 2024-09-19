import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { ButtonStyle } from "./UsesCases.styles";

interface UseCasesProps {
  pageTitle?: string;
  pageSubTitle?: string;
  pageDescription?: string;
  meetName?: string;
  meetDescription?: string;
  sectionTitle?: string;
  meetImage?: string;
  businessHeading: string;
  banner1?: string;
  banner2?: string;
  banner3?: string;
  businessesData?: {
    percentage?: string;
    name?: string;
  }[];
  featureData: {
    title: string;
    description: string;
    image: string;
  }[];
  onClick: () => void;
}

const LandingPage: React.FC<UseCasesProps> = ({
  featureData,
  banner1,
  banner2,
  banner3,
  pageTitle,
  pageDescription,
  pageSubTitle,
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
                }}
              >
                <Paper sx={{ p: 5, boxShadow: "none" }}>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: { xs: "12px", sm: "12px", md: "20px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      textAlign: { xs: "center", md: "left" },
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {pageTitle}
                  </Typography>
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
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "30px",
                      mr: { xs: 0, md: 20 },
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {pageDescription}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={ButtonStyle}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    onClick={onClick}
                  >
                    Try ONECOMMUNN for Free
                  </Button>
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
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                component={"img"}
                src={banner3}
                alt=""
                sx={{ width: "120%", mt: -10, ml: { xs: 7, md: 0 } }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Stack
        data-aos="fade-up"
        data-aos-duration="1000"
        sx={{
          mt: "-500px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component={"img"}
          src={require("../Assets/Images/LandingPage/Yoga/235.-Yoga 1.webp")}
          alt=""
          sx={{ width: "50%" }}
        />
      </Stack>

      {/* Mobile Version */}

      {featureData.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "fit-content", md: "100vh" },
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
                        fontSize: { xs: "15px", md: "16px" },
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
          height: { xs: "fit-content", md: "100vh" },
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
                md: "row",
              },
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
                    Bonus!
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
                    Get a Free Website for Your Yoga Center—A Gift from Us!
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "15px", md: "16px" },
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
                        fontSize: { xs: "1px", md: "18px" },
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                      }}
                    >
                      1. Showcase Your Centre:
                    </Typography>{" "}
                    Display your classes, instructors, and facilities in style.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "15px", md: "16px" },
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
                        fontSize: { xs: "1px", md: "18px" },
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                      }}
                    >
                      2.Attract New Customers:
                    </Typography>{" "}
                    Expand your reach and bring more clients to your center.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "15px", md: "16px" },
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
                        fontSize: { xs: "1px", md: "18px" },
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                      }}
                    >
                      3.Market Your Yoga Centre:
                    </Typography>{" "}
                    Expand your reach and bring more clients to your center.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} sx={{ m: { xs: 2, md: 0 } }}>
              <Box
                component="img"
                src={require("./../Assets/Images/LandingPage/Yoga/Group 239415.webp")}
                alt={""}
                sx={{ width: "100%" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </Grid>
          </Grid>
        </Stack>

        <Stack></Stack>
      </Box>
    </>
  );
};

export default LandingPage;
