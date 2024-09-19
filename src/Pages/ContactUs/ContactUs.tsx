import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import background from "../../Assets/Images/background.png";
import { Field, Title } from "./Contact.styles";

const ContactUs = () => {
  return (
    <>
      <Stack>
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "fit-content", md: "150vh" },
            pt: 5,
            pb: 5,
            mt: -12,
          }}
        >
          <Grid container m={3}>
            <Stack>
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                display={"flex"}
                spacing={5}
              >
                <Grid item xs={12} md={5}>
                  <Stack sx={{ pt: 6, pb: 6 }}>
                    <Typography
                      sx={{
                        color: "#2952A2",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "25px", md: "33px" },
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        textAlign: { xs: "center", md: "left" },
                        color: "#1A2D4C",
                        fontSize: { xs: "14px", md: "15px" },
                        lineHeight: "30px",
                        mt: 2,
                      }}
                    >
                      Our AI-powered platform enhances community management with
                      <br></br>
                      tools for user data management, <br></br>interaction,
                      communication, subscription.
                    </Typography>

                    <Typography
                      sx={{
                        color: "#000000",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        textAlign: { xs: "center", md: "left" },
                        fontSize: { xs: "15px", md: "20px" },
                        pt: 5,
                      }}
                    >
                      EMAIL
                    </Typography>
                    <a
                      href="mailto:info@onecommunn.com"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          color: "#1A2D4C",
                          lineHeight: "30px",
                          mt: 2,
                          textAlign: { xs: "center", md: "left" },
                          fontSize: { xs: "13px", md: "16px" },
                        }}
                      >
                        info@onecommunn.com
                      </Typography>
                    </a>

                    <Typography
                      sx={{
                        color: "#000000",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        textAlign: { xs: "center", md: "left" },
                        fontSize: { xs: "15px", md: "20px" },
                        pt: 5,
                      }}
                    >
                      PHONE NUMBER
                    </Typography>
                    <a
                      href="tel:9945753240"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          color: "#1A2D4C",
                          lineHeight: "30px",
                          mt: 2,
                          textAlign: { xs: "center", md: "left" },
                          fontSize: { xs: "13px", md: "16px" },
                        }}
                      >
                        +91 99457 53240
                      </Typography>
                    </a>

                    <Stack display={"flex"} flexDirection={"row"} mt={3}>
                      <Box
                        component={"img"}
                        src={require("../../Assets/Images/conatctus.png")}
                        alt=""
                        sx={{ width: "70%", ml: { xs: 5, md: 0 } }}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5.5}
                  sx={{
                    backgroundColor: "white",
                    p: 5,
                    borderRadius: "10px",
                    ml: { xs: 5, md: 0 },
                  }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        color: "#2952A2",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "25px", md: "33px" },
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        textAlign: "center",
                      }}
                    >
                      get in touch
                    </Typography>
                    <Typography sx={Title}>Full Name</Typography>
                    <TextField
                      type="name"
                      label="Enter Your Full Name"
                      variant="outlined"
                      sx={Field}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />

                    <Typography sx={Title}>Email</Typography>
                    <TextField
                      type="mail"
                      label="Enter Your Email Address"
                      variant="outlined"
                      sx={Field}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />

                    <Typography sx={Title}>Phone Number</Typography>
                    <TextField
                      type="tel"
                      label="Enter Your Phone Number"
                      variant="outlined"
                      sx={Field}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />

                    <Typography sx={Title}>Comments</Typography>

                    <TextField
                      type="text"
                      label="Enter Your Message "
                      multiline
                      rows={3}
                      variant="outlined"
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        fontFamily: "Montserrat",
                        textTransform: "capitalize",
                        backgroundColor: "#000000",
                        borderRadius: "10px",
                        p: 2,
                        mt: 5,
                        display: { xs: "block", sm: "block", md: "block" },
                        "&:hover": {
                          backgroundColor: "#000000", // Background color on hover
                          cursor: "pointer",
                          border: "none",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
export default ContactUs;
