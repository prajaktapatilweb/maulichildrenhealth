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
import Link from "next/link";
import Image from "next/image";

// ✅ Correct navItems with full page prefix
const navItems = [
    { linkID: "/astheticdental/#home", label: "Home" },
    { linkID: "/astheticdental/#aboutus", label: "About Us" },
    { linkID: "/astheticdental/#treatments", label: "Treatments" },
    { linkID: "/astheticdental/#Doctors", label: "Doctors" },
    { linkID: "/astheticdental/#gallery", label: "Gallery" },
    { linkID: "/astheticdental/#testimonials", label: "Testimonials" },
    { linkID: "/astheticdental/#contactform", label: "Contact" },
];

// ✅ HideOnScroll for navbar animation
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

export default function Navbar1(props) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const handleCloseNavMenu = () => {
        setOpenDrawer(false);
    };

    // ✅ Mobile Menu
    const renderMenu = (
        <List>
            {navItems.map((item) => (
                <ListItem key={item.label}>
                    <Button
                        component={Link}
                        href={item.linkID}
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            color: "black",
                            display: "block",
                            textTransform: 'initial',
                            fontSize: '16px',
                            letterSpacing: 1,
                            textDecoration: 'none',
                            '&:hover': {
                                color: 'red',
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        {item.label}
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
                        {!isLargeScreen && (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon style={{ color: 'black' }} />
                            </IconButton>
                        )}

                        <Box sx={{ flexGrow: 1, textAlign: { xs: 'right', sm: 'right', md: 'left', lg: 'left' } }}>
                            <Image src="/images/maulilogo.jpg" width={250} height={80} alt="Logo" />
                        </Box>

                        {/* ✅ Desktop Menu */}
                        {isLargeScreen && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Stack direction="row">
                                    {navItems.map((page) => (
                                        <Button
                                            key={page.label}
                                            component={Link}
                                            href={page.linkID}
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                mx: 1,
                                                color: "#1e3081",
                                                display: "block",
                                                textTransform: 'initial',
                                                fontSize: '16px',
                                                letterSpacing: 1,
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    color: 'red',
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                        >
                                            {page.label}
                                        </Button>
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </HideOnScroll>

            {/* ✅ Mobile Drawer */}
            {!isLargeScreen && (
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                    {renderMenu}
                </Drawer>
            )}
        </>
    );
}
