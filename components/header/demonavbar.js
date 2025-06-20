import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { StyledButton } from "../styled-button";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HeroSection from "../home/HeroSection";


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
    sx={{ backgroundColor: "transparent", boxShadow: "none" }}
  >
    <Grid container sx={{ height: "100vh" }}>
      <HeroSection
        title="Expert Dental Care for All Ages"
        description="Trust Dr. Sagar Dombe for bespoke dental treatments in Thergaon, Pune."
        buttonText="Let’s Perfect Your Smile"
        bgImage="/images/headerback1.jpg"
        gradient="to right, rgba(179, 129, 90, 0.6), rgba(210, 162, 125, 0.6)"
      />
  
      <HeroSection
        title="Caring for Your Little Ones"
        description="Compassionate pediatric care for infants, toddlers, and kids."
        buttonText="Let’s Nurture Their Health"
        bgImage="/images/headerback3.jpg"
        gradient="to right, rgba(30,144,255, 0.6), rgba(30,144,255, 0.6)"
      />
    </Grid>
  </AppBar>
  
  );
}

export default ResponsiveAppBar;
