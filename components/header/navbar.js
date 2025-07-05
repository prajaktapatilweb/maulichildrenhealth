import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Container,
  Button,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";

const navItems = [
  { link: "/astheticdental#home", label: "Home" },
  { link: "/astheticdental#aboutus", label: "About Us" },
  { link: "/astheticdental#treatments", label: "Treatments" },
  { link: "/astheticdental#Doctors", label: "Doctors" },
  { link: "/astheticdental#gallery", label: "Gallery" },
  { link: "/astheticdental#testimonials", label: "Testimonials" },
  { link: "/astheticdental#contactform", label: "Contact" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return React.cloneElement(children, {
    style: {
      transform: trigger ? "translateY(-100%)" : "translateY(0)",
      transition: "transform 0.3s",
    },
  });
}

export default function Navbar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const renderMenu = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <a
            href={item.link}
            style={{
              width: "100%",
              padding: "8px 16px",
              color: "black",
              textDecoration: "none",
              fontSize: "16px",
              display: "block",
              textTransform: "initial",
            }}
            onClick={() => setOpenDrawer(false)}
          >
            {item.label}
          </a>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <Container>
          <Toolbar>
            {!isLargeScreen && (
              <IconButton edge="start" onClick={toggleDrawer(true)}>
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1, textAlign: { xs: "right", md: "left" } }}>
              <Image src="/images/astheticlogo.jpg" width={90} height={80} alt="Logo" />
            </Box>
            {isLargeScreen && (
              <Stack direction="row">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    style={{
                      margin: "0 8px",
                      color: "white",
                      textDecoration: "none",
                      fontSize: "16px",
                      textTransform: "initial",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </HideOnScroll>

      {/* {!isLargeScreen && (
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
          {renderMenu}
        </Drawer>
      )} */}

      {!isLargeScreen && (
  <Drawer
    anchor="left"
    open={openDrawer}
    onClose={toggleDrawer(false)}
    ModalProps={{
      keepMounted: true,
    }}
  >
    {renderMenu}
  </Drawer>
)}
    </>
  );
}
