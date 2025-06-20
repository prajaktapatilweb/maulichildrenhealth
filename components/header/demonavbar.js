import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { StyledButton } from "../styled-button";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ResponsiveAppBar() {
  const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        {/* Dentist Section */}
        <Grid item xs={12} md={6} sx={{ overflow: "hidden" }}>
        <motion.div
  whileHover={{ scale: 1.15 }}
  transition={{
    duration: 1.5,
    ease: [0.42, 0, 0.58, 1], // smooth cubic easing
  }}
  style={{ height: "100%" }}
>
           
            <Box
              sx={{
                height: "100%",
                backgroundImage: `linear-gradient(to right, rgba(179, 129, 90, 0.6), rgba(210, 162, 125, 0.6)), url("/images/headerback1.jpg")`,

                    backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                p: { xs: 4, md: 8 }, 
                
              }}
            > 
            <Box sx={{ mt: 2, mb: 4 }}>
            <Image
              src="/images/ACSM1.png" // Change path as needed
              alt="Clinic Logo"
              width={100}
              height={100}
              priority
            />
          </Box>
        
          {/* Section content */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',textAlign:'center',p: { xs: 4, md: 5 }, }}>
            
                 
              <motion.div variants={textVariants} initial="initial" animate="animate">
                <Typography variant="h2" fontWeight={700} gutterBottom>
                Expert Dental Care for All Ages
                </Typography>
                <Typography variant="h6">
                  Trust Dr. Sagar Dombe for bespoke dental treatments in Thergaon, Pune.
                </Typography>
                <Box mt={3}>
                <StyledButton 
  variant="outlined"
  size="large"
  sx={{
    borderRadius: 10,
    border: '2px solid white',
    backgroundColor: 'transparent',
    fontWeight: 700,
    color: 'white',
    fontSize: 17,
    px: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
    whiteSpace: 'nowrap', // ⚠️ Important to avoid wrapping
    gap: 1.5,
    minWidth: 'fit-content', // ensures the button doesn’t squeeze
  }}
>
  {/* Wrap the entire content in a flex container to align correctly */}
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      gap: 1,
    }}>
                 
                  Let’s Perfect Your Smile
                  <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
    </motion.span>
  </Box>
                  </StyledButton>
                </Box>
              </motion.div>
            </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Pediatric Section */}
        <Grid item xs={12} md={6} sx={{ overflow: "hidden" }}>
        <motion.div
  whileHover={{ scale: 1.15 }}
  transition={{
    duration: 1.5,
    ease: [0.42, 0, 0.58, 1], // smooth cubic easing
  }}
  style={{ height: "100%" }}
>
             <Box
              sx={{
                height: "100%",
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(to right, rgba(30,144,255, 0.6), rgba(30,144,255, 0.6)), url("/images/headerback3.jpg")`,

                backgroundPosition: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                p: { xs: 4, md: 8 }, 
                
              }}
            > 
            <Box sx={{ mt: 2, mb: 4 }}>
            <Image
              src="/images/ACSM1.png" // Change path as needed
              alt="Clinic Logo"
              width={100}
              height={100}
              priority
            />
          </Box>
        
          {/* Section content */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',textAlign:'center', p: { xs: 4, md: 5 }, }}>
            
              <motion.div variants={textVariants} initial="initial" animate="animate">
                <Typography variant="h2" fontWeight={700} gutterBottom>
                  Caring for Your Little Ones
                </Typography>
                <Typography variant="h6">
                  Compassionate pediatric care for infants, toddlers, and kids.
                </Typography>
                <Box
  mt={3}
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }}
>
  <StyledButton 
  variant="outlined"
  size="large"
  sx={{
    borderRadius: 10,
    border: '2px solid white',
    backgroundColor: 'transparent',
    fontWeight: 700,
    color: 'white',
    fontSize: 17,
    px: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
    whiteSpace: 'nowrap', // ⚠️ Important to avoid wrapping
    gap: 1.5,
    minWidth: 'fit-content', // ensures the button doesn’t squeeze
  }}
>
  {/* Wrap the entire content in a flex container to align correctly */}
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      gap: 1,
    }}
  >
    Let’s Nurture Their Health
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
    </motion.span>
  </Box>
</StyledButton>

                </Box>
              </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default ResponsiveAppBar;
