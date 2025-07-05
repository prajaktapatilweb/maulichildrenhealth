import React, { useState } from "react";
import { Toolbar, IconButton, Drawer, List, ListItem, useMediaQuery, Container, Button, Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  { id: "home", label: "Home" },
  { id: "aboutus", label: "About Us" },
  { id: "treatments", label: "Treatments" },
  { id: "Doctors", label: "Doctors" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contactform", label: "Contact" },
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
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const isOnPage = router.pathname === "/astheticdental";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id) => (e) => {
    setOpenDrawer(false);
    if (isOnPage) {
      e.preventDefault();
      scrollToSection(id);
    } else {
      router.push(`/astheticdental#${id}`);
    }
  };

  const menu = (
    <List>
      {navItems.map(({ id, label }) => (
        <ListItem key={id} disablePadding>
          <Button
            onClick={handleClick(id)}
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              px: 2,
              color: "black",
              textTransform: "initial",
              fontSize: "16px",
              letterSpacing: 1,
              textDecoration: "none",
              "&:hover": { color: "red", backgroundColor: "transparent" },
            }}
          >
            {label}
          </Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <Container>
          <Toolbar>
            {!isLarge && (
              <IconButton edge="start" onClick={() => setOpenDrawer(true)}>
                <MenuIcon style={{ color: "#000" }} />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1, textAlign: isLarge ? "left" : "right" }}>
              <Image src="/images/astheticlogo.jpg" alt="Logo" width={90} height={80} />
            </Box>
            {isLarge && (
              <Stack direction="row">
                {navItems.map(({ id, label }) => (
                  <Button
                    key={id}
                    onClick={handleClick(id)}
                    sx={{
                      mx: 1,
                      color: "#1e3081",
                      textTransform: "initial",
                      fontSize: "16px",
                      letterSpacing: 1,
                      textDecoration: "none",
                      "&:hover": { color: "red", backgroundColor: "transparent" },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </HideOnScroll>

      {!isLarge && (
        <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          {menu}
        </Drawer>
      )}
    </>
  );
}
