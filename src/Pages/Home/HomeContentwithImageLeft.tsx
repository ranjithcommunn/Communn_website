import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import background1 from "../../Assets/Images/Home/bg1.webp";

interface IHomeContentWithImage {
  image: string;
  title: string;
  description: string;
}

const HomeContentWithImage = (props: IHomeContentWithImage) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
          >
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
                      fontSize: { xs: "20px", md: "30px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      pb: 2,
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
            <Grid item xs={12} md={5}>
              <Box
                data-aos="fade-up"
                data-aos-duration="1000"
                component={"img"}
                src={props.image}
                alt=""
                sx={{
                  width: "100%",
                  ml: { xs: 0, md: 16 },
                  overflow: "hidden",
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
export default HomeContentWithImage;
