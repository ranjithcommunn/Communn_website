import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";

interface FeaturesProps {
  featureData: {
    title: string;
    description: string;
    image: string;
  }[];
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  banner1: string;
  banner2: string;
  sectionTitle: string;
  sectionSubTitle: string;
  sectionHeading: string;
}

const Features: React.FC<FeaturesProps> = ({
  features,
  featureData,
  banner1,
  banner2,
  sectionTitle,
  sectionSubTitle,
  sectionHeading,
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${banner2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          overflow: "hidden",
          height: { xs: "90vh", md: "100vh" },
          mt: -12,
        }}
      >
        {" "}
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="#2952A2"
            fontWeight={700}
            sx={{
              fontFamily: "Montserrat",
              mt: 20,
              fontSize: { xs: "30px", md: "36px" },
              textAlign: { xs: "center", md: "center" },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {sectionTitle}
          </Typography>

          <Typography
            color="#3B9B7F"
            fontWeight={700}
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "30px", md: "36px" },
              textAlign: { xs: "center", md: "center" },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {sectionSubTitle}
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              textTransform: "capitalize",
              backgroundColor: "#000000",
              borderRadius: "10px",
              textAlign: "center",
              p: { xs: 1.5, md: 2 },
              mt: { xs: 10, md: 3 },
              ml: { xs: 0, md: 0 },
              display: { xs: "block", md: "none" },
              "&:hover": {
                backgroundColor: "#50A1CA",
                cursor: "pointer",
                border: "none",
              },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get Started for free
          </Button>
        </Stack>
      </Box>
      <Card
        elevation={0}
        sx={{ backgroundColor: "transparent", height: "fit-content", mt: -50 }}
      >
        <CardMedia
          component="img"
          alt="Background Image"
          src={banner1}
          sx={{
            height: "100%",
            objectFit: "cover",
            position: "relative",
            mt: { xs: 35, md: 0 },
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </Card>
      <Stack mt={10} sx={{ mt: { xs: 5, md: 10 } }}>
        <Typography
          sx={{
            color: "#2A53A2",
            fontSize: { xs: "25px", md: "30px" },
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            pb: 2,
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {sectionHeading}
        </Typography>
      </Stack>
      {/* Features Start */}
      <Stack
        display={"flex"}
        flexDirection={"row"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          ml: 4,
          mr: 4,
          pt: { xs: 5, md: 10 },
          pb: { xs: 5, md: 10 },
          mb: 5,
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          display={"flex"}
          flexDirection={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} md={3.5} key={index}>
              <Card
                sx={{
                  pt: 7,
                  pb: 7,
                  pl: 1,
                  pr: 1,
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Box
                  component={"img"}
                  src={feature.image}
                  alt=""
                  sx={{ width: "35%" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "17px",
                    fontWeight: "bold",
                    p: 1,
                    textAlign: "center",
                    color: "#2952A2",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    color: "#000000",
                    p: 1,
                    textAlign: "center",
                  }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* Features End */}

      {/* Features Data Start */}
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
              justifyContent={"center"}
              alignContent={"center"}
              alignItems={"center"}
              display={"flex"}
              spacing={{ xs: 2, md: 10 }}
              sx={{
                flexDirection: {
                  xs: "column-reverse",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },

                paddingBottom: {
                  md: index % 2 === 0 ? "0px" : "100px",
                },
              }}
            >
              <Grid item xs={12} md={5.5} sx={{ m: { xs: 2, md: 0 } }}>
                <Box
                  component={"img"}
                  src={feature.image}
                  alt=""
                  sx={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </Grid>
              <Grid item xs={12} md={4.5}>
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

                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "30px",
                      }}
                      data-aos="fade-up"
                      data-aos-duration="1000"
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
      {/* Features Data End */}
    </>
  );
};
export default Features;
