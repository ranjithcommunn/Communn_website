import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  MenuItem,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
interface menuItems {
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

const menuItems: menuItems[] = [
  { label: "Home", value: "Home", dropdown: false, navigate: "/" },
  {
    label: "I Can",
    value: "I Can",
    dropdown: true,
    submenu: [
      {
        label: "Navigate Dashboard",
        value: " Dashboard",
        navigate: "/dashboard",
      },
      { label: "Manage Members", value: "Members", navigate: "/members" },
      { label: "Manage Posts", value: "Posts", navigate: "/post" },
      { label: "Manage Payments", value: "Payments", navigate: "/payments" },
      {
        label: "Manage Subscriptions",
        value: "Subscriptions",
        navigate: "/subscription",
      },
      {
        label: "Manage Communities",
        value: "Community",
        navigate: "/communities",
      },
    ],
    navigate: "/features1",
  },
  {
    label: "I am",
    value: "I am",
    dropdown: true,
    submenu: [
      // {
      //   label: "An Entrepreneur",
      //   value: "An Entrepreneur",
      //   navigate: "/business",
      // },
      // { label: "A Homemaker", value: "A Homemaker", navigate: "/home-maker" },
      // { label: "A Teacher", value: "A Teacher", navigate: "/brand" },
      // {
      //   label: "A Wellness",
      //   value: "A Wellness",
      //   navigate: "/wellness",
      // },
      { label: "A Wellness", value: "A Wellness", navigate: "/gym" },
      { label: "A Teacher", value: "A Teacher", navigate: "/tuition" },
      { label: "A Yoga", value: "A Teacher", navigate: "/yoga" },
      { label: "A Food Delivery", value: "A Teacher", navigate: "/food-delivery" },
    ],
    navigate: "",
  },
  { label: "Pricing", value: "Pricing", dropdown: false, navigate: "/pricing" },
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
type Anchor = "top" | "left" | "bottom" | "right";

export default function MobileSideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const [selectedPages, setSelectedPages] = React.useState<{
    [key: string]: string | null;
  }>({});
  const navigate = useNavigate();
  const handlePageChange = (
    value: string,
    navigateTo: string,
    dropdownKey: string,
    anchor: Anchor
  ) => {
    if (value) {
      const submenuItem = menuItems
        .find((page) => page.value === dropdownKey)
        ?.submenu?.find((item) => item.value === value);

      if (submenuItem) {
        setSelectedPages((prev) => ({
          ...prev,
          [dropdownKey]: submenuItem.value,
        }));
        navigate(submenuItem.navigate);
      } else {
        setSelectedPages((prev) => ({ ...prev, [dropdownKey]: value }));
        navigate(navigateTo);
      }
    }
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        p: 2,
      }}
      role="presentation"
    >
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ alignItems: "center" }}
      >
        <Link to="/home  " style={{ textDecoration: "none", fontFamily: 'Montserrat' }}>
          <Box
            component={"img"}
            src={require("../Assets/Images/logo.png")}
            alt=""
            sx={{ width: "60%" }}
          />
        </Link>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          sx={{ border: "1px solid #515151 " }}
        >
          <ClearIcon sx={{ color: "#515151" }} />
        </IconButton>
      </Stack>
      {menuItems
        .filter((page) => page?.value === "Home")
        .map((page) => (
          <>
            <ListItem
              disablePadding
              sx={{ fontSize: "20px", fontFamily: "Montserrat" }}
            >
              <ListItemButton
                component={Link}
                to={page.navigate}
                onClick={toggleDrawer(anchor, false)}
                sx={{ fontFamily: "Montserrat" }}
              >
                <ListItemText
                  primary={page.label}
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    color: "#515151",
                  }}
                  onClick={() =>
                    handlePageChange(
                      page.value,
                      page.navigate,
                      page.value,
                      anchor
                    )
                  }
                />
              </ListItemButton>
            </ListItem>

            <Accordion elevation={0} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                I can
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                {menuItems
                  .filter((page) => page.dropdown && page.value === "I Can")
                  .map((page) => (
                    <>
                      <MenuItem
                        key={page.value}
                        sx={{
                          fontFamily: "Montserrat",
                          "& .MuiTypography-root": {
                            fontFamily: "Montserrat",
                          },
                        }}
                      >
                        <List
                          sx={{
                            padding: "0px",
                            fontFamily: "Montserrat",
                            "& .MuiTypography-root": {
                              fontFamily: "Montserrat",
                            },
                          }}
                        >
                          {page.submenu &&
                            page.submenu.map((submenuItem) => (
                              <>
                                <ListItem
                                  sx={{
                                    fontFamily: "Montserrat",
                                    "& .MuiTypography-root": {
                                      fontFamily: "Montserrat",
                                    },
                                    "&:hover": { backgroundColor: "" },
                                    padding: "0px",
                                  }}
                                  key={submenuItem.value}
                                  onClick={() => {
                                    handlePageChange(
                                      submenuItem.value,
                                      submenuItem.navigate,
                                      page.value,
                                      anchor
                                    );
                                  }}
                                >
                                  <ListItemButton
                                    component={Link}
                                    to={submenuItem.navigate}
                                    onClick={toggleDrawer(anchor, false)}
                                  >
                                    <ListItemText
                                      primary={submenuItem.label}
                                      sx={{
                                        color: "#515151",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        "& .MuiTypography-root": {
                                          fontFamily: "Montserrat",
                                        },
                                      }}
                                    />
                                  </ListItemButton>{" "}
                                </ListItem>
                              </>
                            ))}
                        </List>
                      </MenuItem>
                    </>
                  ))}
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                I am
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                {menuItems
                  .filter((page) => page.dropdown && page.value === "I am")
                  .map((page) => (
                    <>
                      <MenuItem
                        key={page.value}
                        sx={{
                          fontFamily: "Montserrat",
                          "& .MuiTypography-root": {
                            fontFamily: "Montserrat",
                          },
                        }}
                      >
                        <List
                          sx={{
                            padding: "0px",
                            fontFamily: "Montserrat",
                            "& .MuiTypography-root": {
                              fontFamily: "Montserrat",
                            },
                          }}
                        >
                          {page.submenu &&
                            page.submenu.map((submenuItem) => (
                              <>
                                <ListItem
                                  sx={{
                                    fontFamily: "Montserrat",
                                    "&:hover": { backgroundColor: "" },
                                    padding: "0px",
                                  }}
                                  key={submenuItem.value}
                                  onClick={() => {
                                    handlePageChange(
                                      submenuItem.value,
                                      submenuItem.navigate,
                                      page.value,
                                      anchor
                                    );
                                  }}
                                >
                                  <ListItemButton
                                    component={Link}
                                    to={submenuItem.navigate}
                                    onClick={toggleDrawer(anchor, false)}
                                  >
                                    <ListItemText
                                      primary={submenuItem.label}
                                      sx={{
                                        color: "#515151",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                      }}
                                    />
                                  </ListItemButton>{" "}
                                </ListItem>
                              </>
                            ))}
                        </List>
                      </MenuItem>
                    </>
                  ))}
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      <Divider />

      {menuItems
        .filter((page) => !page.dropdown && page?.value !== "Home")
        .map((page) => (
          <ListItem
            disablePadding
            sx={{
              fontSize: "20px",
              "& .MuiTypography-root": {
                fontFamily: "Montserrat",
              },
            }}
          >
            <ListItemButton
              component={Link}
              to={page.navigate}
              onClick={toggleDrawer(anchor, false)}
            >
              <ListItemText
                primary={page.label}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                    color: "#515151",
                    fontFamily: "Montserrat",
                  },
                }}
                onClick={() =>
                  handlePageChange(
                    page.value,
                    page.navigate,
                    page.value,
                    anchor
                  )
                }
              />
            </ListItemButton>
          </ListItem>
        ))}

      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ mt: 15 }}
        alignItems={"center"}
      >
        <Link to="/explore-communities  " style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            component={Link}
            to="https://admin.onecommunn.com"
            target="_blank"
            sx={{
              fontFamily: "Montserrat",
              textTransform: "capitalize",
              backgroundColor: "#2952A2",
              borderRadius: "30px",

              "&:hover": {
                backgroundColor: "#2952A2",
                cursor: "pointer",
                border: "none",
              },
            }}
          >
            Get Started for Free
          </Button>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              backgroundColor: "white",
              ml: 9,
              borderRadius: "30px",
              border: "1px solid #515151 ",
            }}
          >
            <MenuIcon sx={{ color: "#515151" }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
