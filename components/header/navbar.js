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
import { useRouter } from "next/router";

// Menu items for asthetic dental
const navItems = [
    { linkID: "home", label: "Home" },
    { linkID: "aboutus", label: "About Us" },
    { linkID: "treatments", label: "Treatments" },
    { linkID: "Doctors", label: "Doctors" },
    { linkID: "gallery", label: "Gallery" },
    { linkID: "testimonials", label: "Testimonials" },
    { linkID: "contactform", label: "Contact" },
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
    const router = useRouter();

    const currentPath = router.pathname; // Example: /astheticdental

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const handleCloseNavMenu = () => {
        setOpenDrawer(false);
    };

    // ✅ Mobile Menu Renderer
    const renderMenu = (
        <List>
            {navItems.map((item) => {
                // If on astheticdental page, use in-page hash
                const href = currentPath === "/astheticdental" ? `#${item.linkID}` : `/astheticdental#${item.linkID}`;
                return (
                    <ListItem key={item.label}>
                        <Button
                            component={Link}
                            href={href}
                            onClick={handleCloseNavMenu}
                            style={{
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
                );
            })}
        </List>
    );

    return (
        <>
            <HideOnScroll {...props}>
                <Container>
                    <Toolbar>
                        {/* Mobile Menu Icon */}
                        {!isLargeScreen && (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon style={{ color: 'black' }} />
                            </IconButton>
                        )}

                        {/* Logo */}
                        <Box sx={{ flexGrow: 1, textAlign: { xs: 'right', sm: 'right', md: 'left', lg: 'left' } }}>
                            <Image src="/images/astheticlogo.jpg" width={90} height={80} alt="Logo" />
                        </Box>

                        {/* Desktop Menu */}
                        {isLargeScreen && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Stack direction="row">
                                    {navItems.map((item) => {
                                        const href = currentPath === "/astheticdental" ? `#${item.linkID}` : `/astheticdental#${item.linkID}`;
                                        return (
                                            <Button
                                                key={item.label}
                                                component={Link}
                                                href={href}
                                                onClick={handleCloseNavMenu}
                                                style={{
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
                                                {item.label}
                                            </Button>
                                        );
                                    })}
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </HideOnScroll>

            {/* Mobile Drawer */}
            {!isLargeScreen && (
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                    {renderMenu}
                </Drawer>
            )}
        </>
    );
}
