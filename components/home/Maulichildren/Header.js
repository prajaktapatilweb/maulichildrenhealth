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
import { StyledButton } from "../../styled-button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from "../../header/navbar";

function ResponsiveAppBar() {

    const contactno1 = "9890840340";
    

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
                backgroundColor:'#fdf5f2',
                // backgroundImage: { xs: `linear-gradient(rgba(1, 1, 1, 0.4), rgba(1, 1, 1, 0.4)), url("/images/nashikclinic/clinics9.webp")`, sm: `linear-gradient(rgba(1, 1, 1, 0.2), rgba(256, 256, 256, 0.2)), url("/images/nashikclinic/clinics9.webp")`, md:`linear-gradient(to right, rgba(1,1,1, 0.6) 10%, rgba(1,1,1, 0.4) 90%), url('/images/headerback1.jpg')`},
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition:'center',
                position: 'relative', // Important for absolute positioning inside
                // height: { xs: '300px', md: '500px' }, // Example height
                overflow: 'hidden', // Optional to prevent icons from overflowing
            
            }}
        >
              {/* Floating Icon 1 */}
              <Box
                component="img"
                src="/images/icons/abc.png"
                alt="Icon 1"
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: { xs: 30, md: 50 },
                    height: 'auto',
                }}
            />

            {/* Floating Icon 2 */}
            <Box
                component="img"
                src="/images/icons/abc.png"
                alt="Icon 2"
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '20%',
                    width: { xs: 30, md: 50 },
                    height: 'auto',
                }}
            />

            {/* You can add more icons like this */}

            {/* Your actual content here */}
            <Box sx={{ position: 'relative', zIndex: 1, }}>
            <section style={{
                 width: '100%', padding: 0, borderRadius: 0,
                 boxShadow: ' 0 2px 2px 1px #0000001f',
                 backdropFilter: 'blur( 8px )',
                 borderBottom: '1px solid #ffffff36',
                 
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
                                <IconButton aria-label="phone">
                                    {" "}
                                    <CallTwoToneIcon sx={{color:'#fc6c93'}} />
                                </IconButton>

                                <Link href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{marginRight: 10 }}>
                                    9890840340
                                    </a>
                                </Link>


                                {/* <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text">
                                    9923708233

                                    </a>
                                </Link>{" "} */}
                                <IconButton aria-label="email">
                                    <EmailTwoToneIcon sx={{color:'#fc6c93'}} />{" "}
                                </IconButton>
                                <Link
                                    href={`mailto:${'shape32aligners@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text">
                                    shape32aligners@gmail.com

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
                                    <FacebookIcon />{" "}
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
                                        sx={{  Width: 30, Height: 30 }}
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
                                    <YouTubeIcon></YouTubeIcon>
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
                // background: 'rgba( 255, 255, 255, 1)',
              
                display: 'flex'
            }}>
                <Navbar />
            </section>
            <Box sx={{ my: 18 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="left"
                >
                    <Grid item xs={12} md={8} sx={{ px: {xs:2,sm:3,md:7},py:3, mt: { xs: -7, sm: -7, md: -7 } }}>
                        <motion.div className="textcontainer" variants={textVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Box sx={{
                                position: "relative",
                                fontSize: { xs: '32px', sm: '30px', md: '38px' },
                                letterSpacing: 1.5,

                                color: { xs: 'white', sm: 'white', md: "primary.main" },
                                lineHeight: 1.2,
mb:-2,
                                // '-webkit-text-stroke': '1px #28282B',


                            }}>
                                <motion.h2 variants={textVariants} style={{ fontFamily: "Inter, sans-serif", fontWeight: '800', }} >

                                Transform Your Smile with Expert Care

                                </motion.h2>
                            </Box>
                            <Hidden smDown>
                                <Typography
                                    variant="p"
                                    sx={{  lineHeight: 0, fontSize: 23, lineHeight: 1.2,color:'primary.light' }}
                                >
                                 Trust Dr. Sagar Dombe for bespoke dental treatments in Thergaon, Pune.

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
    color="white"
    size="large"
    variant="outlined"
    sx={{
        mb: { xs: 3, sm: 0, md: 0 },
        fontSize: 20,
        borderRadius: 2,
        backgroundColor: '#4559b3',
        color: 'white',
        fontWeight:700,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px -5px 0px 0px inset !important', // Force override
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#3a4ba1',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.8) !important',
            transform: 'translateY(-3px)',
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
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
