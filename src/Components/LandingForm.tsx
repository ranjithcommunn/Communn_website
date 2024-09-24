import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Field } from "../Pages/ContactUs/Contact.styles";
import { ChangeEvent, useState } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

interface IFormData {
  fullName: string;
  phoneNumber: string;
}

const LandingForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    phoneNumber: "",
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
        "service_0qwo508",
        "template_pol81gn",
        {
          ...formData,
        },
        "KcCSNBDRR_fStNgee"
      );
      setFormData({ fullName: "", phoneNumber: "" });
      enqueueSnackbar("Email sent successfully!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      setTimeout(() => {
        navigate("/home");
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
            <Stack
              component="form"
              onSubmit={sendEmail}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
              gap={5}
            >
              <TextField
                size="small"
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
                onChange={handleChange}
                value={formData.phoneNumber}
                InputLabelProps={{
                  sx: {
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", md: "15px" },
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
