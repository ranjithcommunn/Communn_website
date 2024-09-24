import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  ButtonStyle,
  CounterDesktop,
  CounterHeadingDesktop,
  CounterHeadingMobile,
  CounterMobile,
} from "./UsesCases.styles";

interface UseCasesProps {
  pageTitle?: string;
  pageSubTilte?: string;
  pageDescription?: string;
  meetName?: string;
  meetDescription?: string;
  sectionTitle?: string;
  meetImage?: string;
  businessHeading: string;
  banner1: string;
  banner2: string;
  banner3: string;
  businessesData: {
    percentage: string;
    name: string;
  }[];
  featureData: {
    title: string;
    description: string;
    image: string;
  }[];
  onClick: () => void;
}

const UseCases: React.FC<UseCasesProps> = ({
  sectionTitle,
  featureData,
  meetImage,
  businessesData,
  businessHeading,
  banner1,
  banner2,
  banner3,
  pageTitle,
  pageDescription,
  pageSubTilte,
  meetName,
  meetDescription,
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
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  ml: { xs: 0, md: 10 },
                  pb: 6,
                  backgroundColor: "#ffffff",
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
                      color: "#000000",
                      fontSize: { xs: "13px", sm: "13px", md: "20px" },
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
                    {pageSubTilte}
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
                  <Button
                    variant="contained"
                    sx={ButtonStyle}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    onClick={() =>
                      window.open("https://admin.onecommunn.com/", "_blank")
                    }
                  >
                    Try COMMUNN for Free
                  </Button>
                </Paper>
              </Stack>
            </Grid>

            <Grid
              item
              xs={6}
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

      {/* Mobile Version */}
      <Stack
        sx={{
          backgroundColor: "#F3F3F3",
          height: "300px",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: "10px",
          alignItems: "center",
          m: 5,
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "18px", md: "25px" },
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            ml: 5,
            mr: 5,
            mt: 1,
            pt: 1,
          }}
        >
          {businessHeading}
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {businessesData?.map((business, index) => (
            <Grid key={index} item xs={6} sm={6} md={3}>
              <Stack alignItems="center">
                <Typography sx={CounterMobile}>
                  {business?.percentage}
                </Typography>
                <Typography sx={CounterHeadingMobile}>
                  {business?.name}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Box
        sx={{
          mt: { xs: 0, md: 5 },
          p: { xs: 5, md: 15 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#F3F3F3",
            height: "261px",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: "10px",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: { xs: "18px", md: "25px" },
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {businessHeading}
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            {businessesData?.map((business, index) => (
              <Grid key={index} item xs={6} md={3}>
                <Typography sx={CounterDesktop}>
                  {business?.percentage}
                </Typography>
                <Typography sx={CounterHeadingDesktop}>
                  {business?.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
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
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Box
                component={"img"}
                src={meetImage}
                alt=""
                sx={{ width: "100%" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  ml: { xs: 0, md: 5 },
                  pt: 6,
                  pb: 6,
                  backgroundColor: "#ffffff",
                  borderRadius: "15px 0px 0px 15px",
                }}
              >
                <Paper
                  sx={{
                    p: { xs: 1.5, md: 5 },
                    m: { xs: 2, md: 15 },
                    borderRadius: "15px",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      textAlign: { xs: "left", md: "left" },
                      fontSize: { xs: "13px", md: "15px" },
                      lineHeight: "30px",
                    }}
                  >
                    Meet{" "}
                    <span
                      style={{
                        color: "#3B9B7F",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      {meetName}
                    </span>
                    {meetDescription}
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      {sectionTitle && (
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#000000",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            mt: 4,
            mb: 6,
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          "{sectionTitle}"
        </Typography>
      )}
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
    </>
  );
};

export default UseCases;
