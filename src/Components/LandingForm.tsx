import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field } from "../Pages/ContactUs/Contact.styles";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import FormLabel from "@mui/material/FormLabel";

interface IFormData {
  fullName: string;
  phoneNumber: string;
  emailId: string;
  respondByEmail: boolean;
  respondByPhone: boolean;
}

const LandingForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    phoneNumber: "",
    emailId: "",
    respondByEmail: false,
    respondByPhone: false,
  });

  const [, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_0qwo508",
        "template_pol81gn",
        {
          ...formData,
        },
        "KcCSNBDRR_fStNgee"
      );
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailId: "",
        respondByEmail: false,
        respondByPhone: false,
      });
      enqueueSnackbar("Email sent successfully!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      setTimeout(() => {
        window.open("/thank-you", "_self");
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
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          display={"flex"}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#f7f7f7",
              p: 5,
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#2952A2",
                fontFamily: "Montserrat",
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
                pb: 5,
              }}
            >
              Book a demo
            </Typography>
            <Stack component="form" onSubmit={sendEmail}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
                gap={{ xs: 2, md: 5 }}
              >
                <TextField
                  size="small"
                  name="fullName"
                  type="text"
                  label="Name"
                  variant="outlined"
                  sx={Field}
                  required
                  onChange={handleChange}
                  value={formData.fullName}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", md: "15px" },
                    },
                  }}
                />
                <TextField
                  size="small"
                  name="phoneNumber"
                  type="tel"
                  label="Mobile"
                  variant="outlined"
                  sx={Field}
                  required
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  error={
                    !/^\d{10}$/.test(formData.phoneNumber) &&
                    formData.phoneNumber !== ""
                  }
                  helperText={
                    !/^\d{10}$/.test(formData.phoneNumber) &&
                    formData.phoneNumber !== ""
                      ? "Enter a valid number"
                      : ""
                  }
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", md: "15px" },
                    },
                  }}
                />
                <TextField
                  size="small"
                  name="emailId"
                  type="email"
                  label="Email ID"
                  required
                  variant="outlined"
                  sx={Field}
                  onChange={handleChange}
                  value={formData.emailId}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", md: "15px" },
                    },
                  }}
                />
              </Stack>
              <Stack sx={{ mt: 3 }}>
                <FormLabel
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", md: "15px" },
                  }}
                >
                  How would you like us to respond?
                </FormLabel>

                <FormGroup>
                  <Stack display={"flex"} flexDirection={"row"}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="respondByPhone"
                          checked={formData.respondByPhone}
                          onChange={handleChange}
                        />
                      }
                      label="I need a callback"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "15px" },
                        },
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="respondByEmail"
                          checked={formData.respondByEmail}
                          onChange={handleChange}
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "13px", md: "15px" },
                          }}
                        />
                      }
                      label="I need an email response"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Montserrat",
                          fontSize: { xs: "13px", md: "15px" },
                        },
                      }}
                    />
                  </Stack>
                </FormGroup>
              </Stack>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  fontFamily: "Montserrat",
                  textTransform: "capitalize",
                  backgroundColor: "#000000",
                  borderRadius: "8px",
                  "& :hover": {
                    backgroundColor: "#000000",
                    color: "white",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};
export default LandingForm;
