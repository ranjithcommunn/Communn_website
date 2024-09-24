import { Box, Stack, Typography } from "@mui/material";

export const RefundPolicy = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "15vh", md: "25vh" },
          backgroundColor: "#f2f2f2f2",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack>
          <Typography
            sx={{
              color: "#2A53A2",
              fontSize: { xs: "25px", md: "30px" },
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Refund Policy
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Stack sx={{ p: { xs: 5, md: 15 } }}>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "25PX" }}>
            No Refund Policy
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            All payments are final and non-refundable. For any issues or
            concerns regarding payments, please contact your community admins.
          </Typography>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Stack>
      </Box>
    </>
  );
};
