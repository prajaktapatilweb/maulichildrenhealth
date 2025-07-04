import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid, Hidden, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from "./navbar";
import { contactdetails } from "../constants/contactdetails";
import Navbar1 from "./navbar1";

function Astheticheader() {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {

                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollbutton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (

        <AppBar
            position="static"
            sx={{
                backgroundImage: {
                    xs: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/nashikclinic/clinics9.webp")`,
                    md: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/headerback4.jpg')`
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                minHeight: { xs: '100vh', md: '80vh' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <section style={{
                background: '#e80914',
                width: '100%',
                padding: '3px 0',
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>

                                <Link href={`tel:${contactdetails.phone}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white', marginRight: 10 }}>
                                        {contactdetails.phone}
                                    </a>
                                </Link>


                                {/* <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    9923708233

                                    </a>
                                </Link>{" "} */}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link
                                    href={`mailto:${contactdetails.email}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        {contactdetails.email}

                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/abbaddentalclinicnashik/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>

                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/sagardombe/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>

                            <IconButton aria-label="youtube">
                                <a
                                    href=" https://www.youtube.com/channel/UCxI-_YXru2XT7vwf2PZC9hg"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton>
                            {/* <IconButton aria-label="justdial">
                                <a
                                    href="https://www.justdial.com/Nashik/Abbad-Dental-Clinic-Implant-Center-Opp-BYK-College-Next-to-Fastrack-Showroom-College-Road/0253PX253-X253-221218231157-S3D4_BZDET"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                    <Image src="/images/jd.png" width={20} height={20} ></Image>



                                </a>
                            </IconButton>
                            <IconButton aria-label="linktree">
                                <a
                                    href="https://linktr.ee/AbbadDentalClinic"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                    <Image src="/images/icons/linktree.webp" width={20} height={20} ></Image>



                                </a>
                            </IconButton> */}
                        </Box>
                    </Box>
                </Container>
            </section>

            <section style={{
                padding: 3,
                background: '#fefefe',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                display: 'flex'
            }}>
              <Navbar1/>
            </section>
            <Box sx={{ my: 7 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="left"
                >
                    <Grid item xs={12} md={9} sx={{ px: { xs: 2, sm: 3, md: 7 },pt:4}}>
                        <motion.div className="textcontainer" variants={textVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '28px', sm: '36px', md: '50px' },
                                    fontFamily: "Inter, sans-serif",
                                    color: 'white',
                                    fontWeight: 800,
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                                    mb: 2,
                                }}
                            >
                              Nurturing Your Child’s Health, Every Step of the Way
                            </Typography>

                            <Hidden smDown>

                                <Typography
                                    variant="body1"
                                    sx={{ color: 'white', fontSize: 20, mb: 1, maxWidth: '80%' }}
                                >
Expert pediatric care for newborns, toddlers, and growing kids — by Dr. Parmeshwar Taware at Mauli Children & Multi-Speciality Hospital, Kalamboli.
                                </Typography>
                            </Hidden>
                            <Box sx={{ "& button": { mt: 3, mb: 7, } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'secondary.dark',
                                            color: 'secondary.light',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            fontSize: 18,
                                            padding: '10px 24px',
                                            '&:hover': {
                                                backgroundColor: '#ffcb66',
                                            },
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>

                                </ScrollLink>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default Astheticheader;
