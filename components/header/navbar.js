import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    useMediaQuery,
    Container,
    Button,
    Box,
    Stack,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { linkID: "/astheticdental/#home", label: "Home" },
    { linkID: "/astheticdental/#aboutus", label: "About Us" },
    { linkID: "/astheticdental/#treatments", label: "Treatments" },
    { linkID: "/astheticdental/#Doctors", label: "Doctors" },
    { linkID: "/astheticdental/#gallery", label: "Gallery" },
    { linkID: "/astheticdental/#testimonials", label: "Testimonials" },
    { linkID: "/astheticdental/#contactform", label: "Contact" },
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
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const handleSubMenuClick = () => {
        setOpenSubMenu(!openSubMenu);
    };

    const handleCloseNavMenu = () => {
        setOpenDrawer(false);
    };

    const renderMenu = (
        <List>
            {navItems.map((item) => (
                <React.Fragment key={item.label}>
                    {item?.subGroup ? (
                        <>
                            <ListItem button onClick={handleSubMenuClick}>
                                <ListItemText primary={item.label} />
                                {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item?.subGroup.map((item2) => (
                                        <ListItem button key={item2.label} sx={{ pl: 4 }}>
                                            <ListItemText primary={item2.label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </>
                    ) : (
                        <Link href={item.linkID} passHref>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "black", display: "block", textTransform: 'initial', fontSize: '16px', letterSpacing: 1 }}
                                component="a"
                            >
                                {item.label}
                            </Button>
                        </Link>
                    )}
                </React.Fragment>
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
                            <Image src="/images/astheticlogo.jpg" width={90} height={80} alt="Logo" />
                        </Box>

                        {isLargeScreen && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Stack direction="row">
                                    {navItems.map((page) => (
                                        <React.Fragment key={page.label}>
                                            {page?.subGroup ? (
                                                // Example: Dropdown Menu (you can expand this if needed)
                                                <Box>
                                                    <Button
                                                        onClick={handleSubMenuClick}
                                                        sx={{ mx: 1, color: "white", display: "block", textTransform: 'initial', fontSize: '16px', letterSpacing: 1 }}
                                                    >
                                                        {page.label}
                                                        {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                                                    </Button>
                                                    <Menu
                                                        sx={{ mt: "45px" }}
                                                        id="menu-appbar"
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        transformOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        open={openSubMenu}
                                                        onClose={handleSubMenuClick}
                                                    >
                                                        {page?.subGroup.map((setting) => (
                                                            <MenuItem key={setting.label} onClick={handleSubMenuClick}>
                                                                {setting.label}
                                                            </MenuItem>
                                                        ))}
                                                    </Menu>
                                                </Box>
                                            ) : (
                                                <Link href={page.linkID} passHref>
                                                    <Button
                                                        onClick={handleCloseNavMenu}
                                                        sx={{ mx: 1, color: "white", display: "block", textTransform: 'initial', fontSize: '16px', letterSpacing: 1 }}
                                                        component="a"
                                                    >
                                                        {page.label}
                                                    </Button>
                                                </Link>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </HideOnScroll>

            {!isLargeScreen && (
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                    {renderMenu}
                </Drawer>
            )}
        </>
    );
}
