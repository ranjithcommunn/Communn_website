import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

interface IHomeContentWithImageRight {
  image: string;
  title: string;
  description: string;
}

const HomeContentWithImageRight = (props: IHomeContentWithImageRight) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "fit-content", md: "85vh" },
          pt: 2,
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
                src={props.image}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack
                sx={{
                  ml: { xs: 0, md: 5 },
                  pt: 5,
                  pb: 6,
                  borderRadius: "15px 0px 0px 15px",
                }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, md: 5 },
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                      color: "#2A53A2",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      pb: 2,
                      fontSize: { xs: "20px", md: "30px" },
                    }}
                  >
                    {props.title}
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
                    {props.description}
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
export default HomeContentWithImageRight;
