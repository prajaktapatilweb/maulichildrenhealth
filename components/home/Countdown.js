import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Avatar, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Countdown() {
  var Details = [
    { title: '15+ Years of Pediatric Expertise', icon: '👶' },
    { title: 'Comprehensive Child & Multi-Speciality Services', icon: '🏥' },
    { title: 'NICU & PICU for Critical Infant Care', icon: '🩺' },
    { title: 'Dedicated Vaccination & Well Baby Clinic', icon: '💉' },
    { title: 'Parental & Diet Counselling for Holistic Growth', icon: '💬' },
    { title: 'Adolescent & Developmental Care Programs', icon: '🧒' },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <Box sx={{ mx: 2,py:5, zIndex: 1, position: 'relative' }}>
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center">
          {Details.map((item, i) => (
            <Grid item xs={12} sm={6} md={2} key={i}>
              <motion.div
                custom={i}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
               
                  <Avatar
                    sx={{
                      bgcolor: 'secondary.dark',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      fontSize: 32,
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 18, sm: 20, md: 16 },
                      color: 'secondary.main',
                    }}
                  >
                    {item.title}
                  </Typography>
               
              </motion.div>
            </Grid>
          ))}
        </Grid>
        {/* <hr style={{border: 0, height: '1px', backgroundColor: '#E5E4E2'}} ></hr> */}

      </Container>
    </Box>
  );
}
