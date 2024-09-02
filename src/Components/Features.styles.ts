export const BoxGrid = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  height: { xs: "fit-content", md: "100vh" },
};

export const StackBox = {
  ml: 2,
  pt: { xs: 0, md: 6 },
  pb: { xs: 0, md: 6 },
  backgroundColor: "#ffffff",
  borderRadius: "15px 0px 0px 15px",
};

export const FeaturesHeading = {
  color: "#2A53A2",
  fontSize: { xs: "20px", md: "25px" },
  fontFamily: "Montserrat",
  fontWeight: "bold",
  pb: 2,
};

export const FeaturesContent = {
  fontFamily: "Montserrat",
  color: "#1A2D4C",
  textAlign: "justify",
  fontSize: { xs: "15px", md: "17px" },
  lineHeight: "30px",
};

export const CardBox = {
  pt: 7,
  pb: 7,
  pl: 1,
  pr: 1,
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const CardHeading = {
  fontFamily: "Montserrat",
  fontSize: "17px",
  fontWeight: "bold",
  p: 1,
  textAlign: "center",
  color: "#2952A2",
};

export const CardContents = {
  fontFamily: "Montserrat",
  fontSize: "14px",
  color: "#000000",
  p: 1,
  textAlign: "center",
};

export const FeatureButton = {
  fontFamily: "Montserrat",
  textTransform: "capitalize",
  backgroundColor: "#000000",
  borderRadius: "10px",
  textAlign: "center",
  p: { xs: 1.5, md: 2 },
  mt: { xs: 10, md: 3 },
  ml: { xs: 0, md: 0 },
  display: { xs: "block", md: "none" },
  "&:hover": {
    backgroundColor: "#50A1CA", // Background color on hover
    cursor: "pointer",
    border: "none",
  },
};
