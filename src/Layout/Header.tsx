import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { MenuItem, Menu } from "@mui/material";
import { useState, useEffect } from "react";
import MobileSideBar from "./MobileSidebar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useNavigate } from "react-router-dom";

interface Page {
  label: string;
  value: string;
  dropdown: boolean;
  submenu?: {
    label: string;
    value: string;
    navigate: string;
  }[];
  navigate: string;
}

const pages: Page[] = [
  { label: "Home", value: "Home", dropdown: false, navigate: "/" },
  {
    label: "I Can",
    value: "I Can",
    dropdown: true,
    submenu: [
      { label: "Manage Dashboard", value: "Dashboard", navigate: "/dashboard" },
      {
        label: "Manage Communities",
        value: "Community",
        navigate: "/communities",
      },
      {
        label: "Manage Subscriptions",
        value: "Subscriptions",
        navigate: "/subscriptions",
      },
      { label: "Manage Payments", value: "Payments", navigate: "/payments" },
      { label: "Manage Members", value: "Members", navigate: "/members" },
      { label: "Manage Posts", value: "Posts", navigate: "/posts" },
    ],
    navigate: "/features1",
  },
  {
    label: "Usecases",
    value: "Usecases",
    dropdown: true,
    submenu: [
      // {
      //   label: "An Entrepreneur",
      //   value: "An Entrepreneur",
      //   navigate: "/business",
      // },
      // { label: "A Homemaker", value: "A Homemaker", navigate: "/home-maker" },
      // { label: "A Brand", value: "A Brand", navigate: "/brand" },
      { label: "A Wellness", value: "A Wellness", navigate: "/gym" },
      { label: "A Teacher", value: "A Teacher", navigate: "/tuition" },
      { label: "A Yoga", value: "A Teacher", navigate: "/yoga" },
      { label: "A Food Delivery", value: "A Teacher", navigate: "/food-delivery" },
    ],
    navigate: "",
  },
  // {
  //   label: "Pricing",
  //   value: "Pricing",
  //   dropdown: false,
  //   navigate: "/contact-us",
  // },
  {
    label: "About Us",
    value: "About Us",
    dropdown: false,
    navigate: "/about-us",
  },
  {
    label: "Contact Us",
    value: "Contact Us",
    dropdown: false,
    navigate: "/contact-us",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPage, setHoveredPage] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLElement>,
    page: Page
  ) => {
    if (page.dropdown) {
      setHoveredPage(page.value);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    setHoveredPage(null);
    setAnchorEl(null);
  };


  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: scrolled ? "white" : "transparent",
          boxShadow: scrolled ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none",
          p: 1,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="a" href="/" sx={{ width: "15%" }}>
              <Box
                component="img"
                src={require("../Assets/Images/Logo.png")}
                alt="Logo"
                sx={{
                  width: "100%",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              />
            </Box>
            <Box
              component="img"
              src={require("../Assets/Images/Logo.png")}
              alt="Logo"
              sx={{
                width: "55%",
                display: { xs: "block", sm: "block", md: "none" },
                ml: -2,
                alignSelf: "flex-start",
              }}
            />

            {/* For mobile sidebar */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                ml: 8,
              }}
            >
              <MobileSideBar />
            </Box>

            {/* For Desktop Nav */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page) => (
                <Box
                  key={page.value}
                  onMouseEnter={(event) => handleMouseEnter(event, page)}
                  onMouseLeave={handleMouseLeave}
                  sx={{ position: "relative", transition: "all 0.3s ease" }}
                >
                  <NavLink
                    to={page.navigate}
                    style={{ textDecoration: "none", fontFamily: 'Montserrat' }}
                    onClick={() => window.scrollTo(0, 0)} // Scroll to top
                  >
                    <Button
                      sx={{
                        my: 2,
                        color: "#3C3C3C",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        ml: 3,
                        mr: 3,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      {page.label}
                      {page.dropdown && (
                        <KeyboardArrowDownIcon
                          sx={{
                            ml: 1,
                            transition: "transform 0.3s ease",
                            transform:
                              hoveredPage === page.value
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      )}
                    </Button>
                  </NavLink>

                  {/* Submenu */}
                  {hoveredPage === page.value && page.submenu && (
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl && hoveredPage === page.value)}
                      onClose={handleMouseLeave}
                      MenuListProps={{ onMouseLeave: handleMouseLeave }}
                      sx={{
                        mt: "-5px",
                        borderRadius: "30px",
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                        overflow: "hidden",
                        "& .MuiPaper-root": {
                          borderRadius: "20px",
                          padding: "10px",
                          fontFamily: "Montserrat"
                        },
                      }}
                    >
                      {page.submenu.map((submenuItem) => (
                        <NavLink
                          to={submenuItem.navigate}
                          style={{ textDecoration: "none" }}
                          key={submenuItem.value}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <MenuItem
                            sx={{
                              fontFamily: "Montserrat",
                              fontSize: "14px",
                              borderRadius: "10px",
                              "&:hover": {
                                backgroundColor: "#F1F1F1",
                              },
                            }}
                          >
                            {submenuItem.label}
                          </MenuItem>
                        </NavLink>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => (
                  navigate('/contact-us')
                )

                }
                variant="contained"
                sx={{
                  fontFamily: "Montserrat",
                  textTransform: "capitalize",
                  backgroundColor: "#2952A2",
                  borderRadius: "30px",
                  display: { xs: "none", sm: "none", md: "block" },
                  boxShadow: 'none',
                  "&:hover": {
                    backgroundColor: "#50A1CA",
                    cursor: "pointer",
                    border: "none",
                    boxShadow: 'none',
                  },
                }}
              >
                Get Started for Free
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
