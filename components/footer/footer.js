import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { contactdetails } from "../constants/contactdetails";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3a302e",
        py: 3,
        color: "primary.contrastText",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Image src="/images/astheticlogo.jpg" width={80} height={60} className="pngback" objectFit="contain"></Image>



              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
Aesthetic Dental Clinic in Kalamboli, Navi Mumbai, led by Dr. Sunita Taware (15+ years exp.) offers all dental services like Single Sitting RCT, dental implants, veneers, braces & aligners, teeth whitening, wisdom tooth removal & more.
              </Typography>


            </Box>
          </Grid>
          <Grid item xs={12} md={2} sx={{}}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/asthetic/#" className="footermenu" style={{ color: '#c8b2a7' }}>
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/astheticdental//#aboutus" className="footermenu" style={{ color: '#c8b2a7' }}>
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/astheticdental//#treatments" className="footermenu" style={{ color: '#c8b2a7' }}>
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/astheticdental//#testimonials" className="footermenu" style={{ color: '#c8b2a7' }}>
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/astheticdental/#gallery" className="footermenu" style={{ color: '#c8b2a7' }}>
                Gallery
              </Link>
            </Typography>

            {/* <FooterNavigation /> */}
          </Grid>

          {/* <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Treatments
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Root Canal</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental Implants</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Full Mouth Reconstruction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Braces & Aligners</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Crown & Bridges</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Wisdom Teeth Extraction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental X-Rays​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Teeth Whitening​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Cosmetic Dentistry</Typography>

          </Grid> */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" gutterBottom>
              Get In Touch
            </Typography>

            <iframe src={contactdetails.gmapurl} width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ marginBottom: 3, marginTop: 3, marginRight: 4 }}></iframe>



            {/* <FooterSocialLinks /> */}

          </Grid>

          {/* <Box>
            <div style={{ position: 'fixed', right: '40px', bottom: '40px', zIndex: 996, background: 'black', borderRadius: 5 }}>
              <Link
                href={`tel:${contactno2}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >

                <Image src="/images/telephone.png" width={40} height={40} style={{ paddingInline: 5, paddingTop: 5 }} alt="phone" />
              </Link>
            </div>
            <div style={{ position: 'fixed', left: '40px', bottom: '40px', zIndex: 996 }}>
              <Link
                href={`https://wa.me/${contactno2}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >
                <Image src="/images/whatsapp.webp" width={50} height={50} />
              </Link>
            </div>
          </Box> */}


          {/* <Whatsappnew /> */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
