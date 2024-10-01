import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import background from "../../Assets/Images/background.png";
import { Field, Title } from "./Contact.styles";
import { ChangeEvent, useState } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

interface IFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    comments: "",
  });

  const [, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_lq5df2h",
        "template_g35kxjh",
        {
          ...formData,
        },
        "KcCSNBDRR_fStNgee"
      );
      setFormData({ fullName: "", email: "", phoneNumber: "", comments: "" });
      enqueueSnackbar("Email sent successfully!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      setTimeout(() => {
        navigate("/thank-you");
      }, 3000);
    } catch (error) {
      enqueueSnackbar("Failed to send email.");
      console.error("Email sending error:", error);
    } finally {
      setLoading(false);
    }
  };

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
                  <Stack component="form" onSubmit={sendEmail}>
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
                      get in touch
                    </Typography>
                    <Typography sx={Title}>Name</Typography>
                    <TextField
                      name="fullName"
                      type="text"
                      label="Name"
                      variant="outlined"
                      sx={Field}
                      onChange={handleChange}
                      value={formData.fullName}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />

                    <Typography sx={Title}>Email</Typography>
                    <TextField
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      sx={Field}
                      onChange={handleChange}
                      value={formData.email}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />

                    <Typography sx={Title}>Mobile Number</Typography>
                    <TextField
                      name="phoneNumber"
                      type="tel"
                      label="Mobile Number"
                      variant="outlined"
                      sx={Field}
                      onChange={handleChange}
                      value={formData.phoneNumber}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />
                    <Typography sx={Title}>Message</Typography>
                    <TextField
                      name="comments"
                      type="text"
                      label="Message"
                      multiline
                      rows={3}
                      variant="outlined"
                      onChange={handleChange}
                      value={formData.comments}
                      InputLabelProps={{
                        sx: {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "18px" },
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        fontFamily: "Montserrat",
                        textTransform: "capitalize",
                        backgroundColor: "#000000",
                        borderRadius: "10px",
                        p: 2,
                        mt: 5,
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
