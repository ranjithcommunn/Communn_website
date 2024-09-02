export const GridBox = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  height: { xs: "fit-content", md: "90vh" },
};

export const Heading = {
  color: "#2A53A2",
  fontSize: { xs: "20px", md: "25px" },
  fontFamily: "Montserrat",
  fontWeight: "bold",
  textAlign: { xs: "left", md: "left" },
  pb: 2,
};

export const Content = {
  fontFamily: "Montserrat",
  color: "#1A2D4C",
  textAlign: { xs: "left", md: "justify" },
  fontSize: { xs: "14px", md: "17px" },
  lineHeight: "30px",
};

export const ContentStack = {
  ml: { xs: 2, md: 5 },
  mr: { xs: 2, md: 0 },
  pt: { xs: 3, md: 6 },
  pb: { xs: 3, md: 6 },
  backgroundColor: "#ffffff",
  borderRadius: "15px 0px 0px 15px",
};

export const CounterMobile = {
  color: "#2952A2",
  fontSize: "25px",
  fontWeight: "bold",
  fontFamily: "Montserrat",
  textAlign: "center",
};

export const CounterDesktop = {
  color: "#2952A2",
  fontSize: "45px",
  fontWeight: "bold",
  fontFamily: "Montserrat",
  textAlign: "center",
};

export const CounterHeadingDesktop = {
  color: "#000000",
  fontSize: "15px",
  fontFamily: "Montserrat",
  textAlign: "center",
};

export const CounterHeadingMobile = {
  color: "#000000",
  fontSize: "14px",
  fontFamily: "Montserrat",
  textAlign: "center",
};

export const ButtonStyle = {
  fontFamily: "Montserrat",
  textTransform: "capitalize",
  backgroundColor: "#000000",
  borderRadius: "10px",
  textAlign: "center",
  p: { xs: 1.5, md: 2 },
  mt: { xs: 2, md: 3 },
  display: { xs: "block", sm: "block", md: "block" },
  // margin: "auto", // Center the button horizontally
  "&:hover": {
    backgroundColor: "#50A1CA",
    cursor: "pointer",
    border: "none",
  },
};
