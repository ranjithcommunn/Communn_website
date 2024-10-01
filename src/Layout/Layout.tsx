import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Stack } from "@mui/material";
import { Faq } from "../Components/Faq";

export const Layout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Stack sx={{ px: { xs: 5, md: 15 }, py: { xs: 5, md: 5 } }}>
        <Faq />
      </Stack>
      <Footer />
    </>
  );
};
