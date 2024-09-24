import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Image1 from "../Assets/Images/LandingPage/Yoga/Home.webp";
import Bg from "../Assets/Images/LandingPage/Yoga/lastbgwebp.webp";
import LandingForm from "./LandingForm";

interface ILandingPage {
  title?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  mobileDescription?: string;
  image?: string;
  sectionItems: {
    title: string;
    image: string;
  }[];
  title2?: string;
  description4?: string;
}

const LandingBox = (props: ILandingPage) => {
  return (
    <>
      <Stack sx={{ p: { xs: 3, md: 12 }, backgroundImage: { Image1 } }}>
        <Paper
          sx={{
            height: { xs: "fit-content", md: "100vh" },
            backgroundImage: `url(${Bg})`,
            backgroundSize: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "none",
            px: 2,
            py: { xs: 3, md: 0 },
          }}
          id="form"
        >
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            variant="h6"
            sx={{
              color: "#2952A2",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: { xs: "16px", md: "30px", fontWeight: "bold" },
            }}
          >
            {props?.title}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            sx={{
              marginBottom: 2,
              fontFamily: "Montserrat",
              fontSize: { xs: "13px", md: "15px", color: "#2B2B2B" },
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            {props?.description1}
            <br />
            {props?.description2}
            <br />
            {props?.description3}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            sx={{
              marginBottom: 2,
              fontFamily: "Montserrat",
              fontSize: { xs: "13px", md: "15px", color: "#2B2B2B" },
              textAlign: "center",
              display: { xs: "block", md: "none" },
            }}
          >
            {props?.mobileDescription}
          </Typography>

          <Grid
            container
            data-aos="fade-up"
            data-aos-duration="1000"
            spacing={{ xs: 1, md: 0 }}
            sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
              p: { xs: 2, md: 8 },
              mx: { xs: 5, md: 25 },
            }}
          >
            {props?.sectionItems.map((item, index) => (
              <Grid item xs={3} md={3} key={index}>
                <Stack alignItems="center" sx={{ textAlign: "center" }}>
                  <Box
                    component={"img"}
                    src={item.image}
                    sx={{ width: "25%" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: { xs: "10px", md: "15px" },
                      color: "#2952A2",
                      textAlign: "center",
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            variant="h6"
            sx={{
              color: "#2952A2",
              fontFamily: "Montserrat",
              fontSize: { xs: "16px", md: "30px", fontWeight: "bold" },
              textAlign: "center",
            }}
          >
            {props?.title2}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            sx={{
              marginBottom: 2,
              fontFamily: "Montserrat",
              fontSize: { xs: "13px", md: "15px", color: "#2B2B2B" },
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            {props?.description4}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            sx={{
              marginBottom: 2,
              fontFamily: "Montserrat",
              fontSize: { xs: "13px", md: "15px", color: "#2B2B2B" },
              textAlign: "center",
              display: { xs: "block", md: "none" },
            }}
          >
            {props?.description4}
          </Typography>
          <Stack
            data-aos="fade-up"
            data-aos-duration="1000"
            direction="row"
            spacing={10}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
            }}
          >
            {/* <a href="/contact-us" style={{ textDecoration: "none" }}>
              <Button
                fullWidth
                sx={{
                  fontFamily: "Montserrat",
                  textTransform: "capitalize",
                  backgroundColor: "#2A53A2",
                  borderRadius: "30px",
                  mt: 5,
                  px: 5,
                  color: "white",
                  width: "100%",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#50A1CA",
                    cursor: "pointer",
                    border: "none",
                    boxShadow: "none",
                  },
                }}
              >
                Book a Demo
              </Button>
            </a> */}
            <LandingForm />
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};
export default LandingBox;
