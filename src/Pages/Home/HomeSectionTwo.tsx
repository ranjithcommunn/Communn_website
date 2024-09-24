import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const HomeSectionTwo = () => {
  return (
    <>
      <Stack mt={{ xs: -4, md: -15 }}>
        <Box
          component={"img"}
          src={require("../../Assets/Images/Home/Vector 26.png")}
          alt=""
          sx={{ width: "100%" }}
        />
      </Stack>
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
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            display={"flex"}
            spacing={2}
            sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          >
            <Grid item xs={12} md={5}>
              <Box
                data-aos="fade-up"
                data-aos-duration="1000"
                component={"img"}
                src={require("../../Assets/Images/Home/1.webp")}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack
                sx={{
                  ml: { xs: 1, md: 10 },
                  pt: 6,
                  pb: 6,
                  backgroundColor: "#ffffff",
                  borderRadius: "15px 0px 0px 15px",
                }}
              >
                <Paper sx={{ p: { xs: 2, md: 5 }, boxShadow: "none" }}>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                      color: "#2A53A2",
                      fontSize: { xs: "20px", md: "30px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      pb: 2,
                    }}
                  >
                    Its for Anyone
                  </Typography>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "13px", md: "15px" },
                      lineHeight: "30px",
                    }}
                  >
                    Eager to tap into community building potential? Communn is
                    the platform for you, whether you have a community or not.
                    Share expertise, create connections, earn revenue, and
                    manage payments seamlessly. Ready to start something great?
                    Join Communn.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
export default HomeSectionTwo;
