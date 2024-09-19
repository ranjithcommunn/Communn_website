import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Aboutusbg1 from "../../Assets/Images/About/Aboutsbg.webp";
import Aboutus2 from "../../Assets/Images/About/Aboutbg2.webp";
import { AboutContent, AboutHeading, FirstBox } from "./About.styles";

const AboutUs = () => {
  return (
    <>
      <Box sx={FirstBox}>
        <Stack>
          <Grid
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Grid item xs={12} md={4.5} sx={{ mt: { xs: 20, md: 0 } }}>
              <Box
                component={"img"}
                src={require("../../Assets/Images/About/Aboutus1.png")}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={11} md={7.5}>
              <Stack
                sx={{
                  ml: { xs: 5, md: 10 },
                  pt: 6,
                  pb: 6,
                  backgroundColor: "#ffffff",
                  borderRadius: "15px 0px 0px 15px",
                }}
              >
                <Paper sx={{ p: 5, boxShadow: "none", borderRadius: "10px" }}>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={AboutHeading}
                  >
                    About Us
                  </Typography>
                  <br></br>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      textAlign: "justify",
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "30px",
                      mr: { xs: 0, md: 10 },
                    }}
                  >
                    Welcome to Communn, where communities flourish, connections
                    thrive, and change becomes possible. We're more than just a
                    platform; we're a revolution in community engagement,
                    believing in the strength of unity and the power of genuine
                    connections. Communn simplifies community management,
                    ensuring 100% user engagement by resolving the challenges
                    that often come with group management. But we don't stop
                    there; our platform empowers you to unlock your earning
                    potential, create a distinctive identity, and excel in
                    branding and marketing. With recurring revenue streams and
                    endless growth possibilities, Communn is more than a
                    platform; it's a journey to a thriving and connected future.
                    Whether you're an administrator, a member, or a visionary,
                    Communn is your catalyst for a world where communities are
                    transformed, connections are nurtured, and change is
                    amplified.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Aboutusbg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "fit-content",
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
            <Grid item xs={11} md={10}>
              <Stack
                sx={{
                  pt: 6,
                  pb: 6,
                  backgroundColor: "#ffffff",
                  borderRadius: "0px 100px 0px 0px",
                }}
              >
                <Paper
                  sx={{
                    p: 5,
                    boxShadow: "none",
                    borderRadius: "0px 100px 0px 0px",
                    m: { xs: 0, md: 10 },
                  }}
                >
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={AboutHeading}
                  >
                    Our Story
                  </Typography>
                  <br></br>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={AboutContent}
                  >
                    At Communn, we're not just a tech startup – we're a team of
                    young innovators passionate about revolutionizing community
                    management. Our journey began in January 2022 with a shared
                    vision to simplify community engagement, foster genuine
                    connections, and reshape the way businesses market
                    themselves.
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={AboutContent}
                  >
                    At Communn, community isn't just a concept; it's our way of
                    life. We've experienced firsthand the remarkable
                    transformations that occur when people come together as a
                    tight-knit, supportive community. In our workspace, every
                    team member's voice is valued, and support is given. This
                    approach has not only made us more productive but has also
                    strengthened relationships, bringing joy to the work we do
                    and resulting in the creation of beautiful, impactful
                    products. We believe in the power of community not just
                    within our team but as a universal concept. It's a principle
                    we extend to the heart of Communn, where we enable
                    businesses, homemakers, travel enthusiasts, like-minded
                    groups, and many others to create their communities. With
                    features like subscriptions and recurring revenue, Communn
                    becomes a platform where people can not only be a part of a
                    community but also carve out their own unique identities.
                  </Typography>
                  <br></br>
                  <br></br>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={AboutContent}
                  >
                    Just as we've experienced the magic of unity in our
                    workspace, we aim to help our users experience the same in
                    their endeavors, making the world a better place, one
                    community at a time.
                  </Typography>
                  <br></br>
                  <br></br>
                </Paper>
              </Stack>
            </Grid>

            <Grid item xs={11} md={2}></Grid>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: "#ffffff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          component={"img"}
          src={Aboutus2}
          alt=""
          sx={{ width: "75%" }}
        />
      </Box>
      <Stack
        sx={{
          ml: { xs: 5, md: 20 },
          mr: { xs: 5, md: 20 },
          pt: { xs: 2, md: 5 },
        }}
      >
        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={AboutHeading}
        >
          Our Vision
        </Typography>
        <br></br>

        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={AboutContent}
        >
          We envision a world where every connection adds value, every
          transaction yields happy money, and every individual finds fulfillment
          and prosperity through meaningful contributions.
        </Typography>
        <br></br>
        <br></br>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={AboutHeading}
        >
          Our Mission
        </Typography>
        <br></br>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={AboutContent}
        >
          To revolutionize human interaction, fostering productivity and
          meaningful relationships for a better world.
        </Typography>
      </Stack>

      <Box
        sx={{
          // backgroundImage: `url(${Aboutusbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "fit-content",
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
            <Grid item xs={12} md={4}>
              <Box
                data-aos="fade-up"
                data-aos-duration="1000"
                component={"img"}
                src={require("../../Assets/Images/About/Aboutus4.png")}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack
                sx={{
                  ml: { xs: 2, md: 5 },
                  pt: 6,
                  pb: 6,
                  backgroundColor: "#E6E8EC",
                  borderRadius: "50px 0px 0px 50px",
                }}
              >
                <Paper
                  sx={{ p: 5, boxShadow: "none", backgroundColor: "#E6E8EC" }}
                >
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                      color: "#2A53A2",
                      fontSize: { xs: "20px", md: "30px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      textAlign: "right",
                      mr: { xs: 2, md: 10 },
                    }}
                  >
                    What Sets Us Apart
                  </Typography>
                  <br></br>
                  <Typography
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "30px",
                      ml: { xs: 0, md: 15 },
                      mr: { xs: 2, md: 10 },
                    }}
                  >
                    Communn is a versatile platform that adapts to your unique
                    needs. Whether you're an entrepreneur, an educator, an
                    artist, or simply passionate about building communities,
                    Communn is your toolkit for expanding horizons, nurturing
                    relationships, and exploring new frontiers. What sets us
                    apart is our commitment to providing everyone, regardless of
                    their background or expertise, with the power to tap into
                    recurring revenue streams. With our platform, anyone can
                    harness the potential of a secure and vibrant community to
                    generate steady income. We believe that the ability to
                    create, engage, and profit from your community should be
                    within reach for all, and that's exactly what Communn
                    delivers.
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
export default AboutUs;
