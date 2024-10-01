import { Box, Button, Stack, Typography } from "@mui/material";
import NotFount from "../../Assets/Images/Thankyou.png";

const ThankYou = () => {
  return (
    <>
      <Stack
        sx={{ display: "flex", alignItems: "center", px: { xs: 5, md: 20 } }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "50px" },
            fontFamily: "Montserrat",
            fontWeight: "600",
            mt: { xs: 10, md: 5 },
          }}
        >
          Congratulations!
        </Typography>
        <Box
          component={"img"}
          src={NotFount}
          sx={{
            width: { xs: "80%", md: "35%" },
            mt: { xs: 10, md: 5 },
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "18px", md: "24px" },
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "#A5A5A5",
            textAlign: "center",
            mt: { xs: 10, md: 5 },
          }}
        >
          Congratulations on taking a step to save time and streamline your
          business! We’ll be in touch soon to assist you with your demo. Stay
          tuned!
        </Typography>

        <Button
          variant="contained"
          sx={{
            fontFamily: "Montserrat",
            textTransform: "capitalize",
            backgroundColor: "#2952A2",
            borderRadius: "10px",
            textAlign: "center",
            p: { xs: 1.5, md: 2 },
            mt: { xs: 10, md: 5 },
            ml: { xs: 0, md: 0 },
            display: { xs: "block", md: "block" },
            "&:hover": {
              backgroundColor: "#50A1CA",
              cursor: "pointer",
              border: "none",
            },
          }}
          onClick={() => window.open("https://onecommunn.com", "_self")}
        >
          Go back to home
        </Button>
      </Stack>
    </>
  );
};
export default ThankYou;
