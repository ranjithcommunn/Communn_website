import { Box, Button, Stack, Typography } from "@mui/material";
import NotFount from "../../Assets/Images/404.webp";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const naviagte = useNavigate();
  return (
    <>
      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component={"img"}
          src={NotFount}
          sx={{
            width: "45%",
            mt: { xs: 10, md: 5 },
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "50px" },
            fontFamily: "Montserrat",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Looks like you’re lost
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "24px" },
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "#A5A5A5",
            textAlign: "center",
          }}
        >
          Sorry we could not find thr page you are looking for. Please check URL
          in address bar and try again.
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
export default NotFound;
