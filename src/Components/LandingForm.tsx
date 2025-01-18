import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field } from "../Pages/ContactUs/Contact.styles";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface IFormData {
  fullName: string;
  phoneNumber: string;
  emailId: string;

}

const LandingForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    phoneNumber: "",
    emailId: "",
  });

  const [, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

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
    const apiUrl = "https://api.kylas.io/v1/leads/";
    const headers = {
      "Content-Type": "application/json",
      "api-key": "5cbd8053-0d0a-4f9e-a5f3-29e9fe222ba8:16740",
    };

    const payload = {
      firstName: formData.fullName.split(" ")[0] || "",
      phoneNumbers: [
        {
          type: "MOBILE",
          code: "IN",
          value: formData.phoneNumber,
          dialCode: "+91",
          primary: true,
        },
      ],
      emails: [
        {
          type: "OFFICE",
          value: formData.emailId,
          primary: true,
        },
      ],

    };

    try {

      const response = await axios.post(apiUrl, payload, { headers });
      setFormData({ fullName: "", emailId: "", phoneNumber: "", });
      enqueueSnackbar("Lead submitted successfully!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      setTimeout(() => {
        navigate("/thank-you");
      }, 1000);
      return response
    } catch (error) {
      enqueueSnackbar("Failed to submit lead.");
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
            <div id="kl__form-container" style={{ minHeight: '0px !important', backgroundColor: 'transparent !important' }}>
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
                {/* <Stack sx={{ mt: 3 }}>
                <FormLabel
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", md: "15px" },
                  }}
                >
                  How would you like us to respond?
                </FormLabel>

                <FormGroup>
                  <Stack
                    display={"flex"}
                    sx={{ flexDirection: { xs: "column", md: "row" } }}
                  >
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
              </Stack> */}

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
            </div>
          </Grid>
        </Grid>
      </Stack>

    </>
  );
};
export default LandingForm;
