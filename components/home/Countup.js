import React from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {   Box,  Typography } from "@mui/material";
import { motion} from "framer-motion";
import CountUp from 'react-countup';

export default function Countup() { 
    var Details = [
        {
            startnumber: '1000',
            numbers: '10600',
          title: 'Happy Smiles',
        },
        {
            startnumber: '1',
            numbers: '18',
          title: 'Years of Experience',
        },
    
        {
            startnumber: '2',
            numbers: '26',
          title: 'Dental Implants',
        },

        {
          startnumber: '0',
          numbers: '4.9',
          title: 'Google Ratings',
          decimals: 1,
        },
      ];
    
    

 // Define the fade-up animation variants
const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
    visible: { 
      opacity: 1, 
      y: 0,  // Moves up to its original position
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeInOut', // Easing function
      },
    },
  };

    return (
        <div>
            <Box sx={{mx:2,zIndex:1,position:'relative'}}>
           <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

           <Container
    sx={{
        width: '100%',
        backgroundColor: 'white',
        mt: -15,
        borderRadius: { xs: 4, sm: 4, md: 8 },
        boxShadow:
            'rgba(100, 50, 93, 0.25) 0px 20px 30px -20px, rgba(0, 0, 0, 0.3) 0px 30px 30px -30px, rgba(10, 37, 64, 0.35) 1px -2px 3px 1px inset',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow:
                'rgba(100, 50, 93, 0.3) 0px 20px 30px -10px, rgba(0, 0, 0, 0.4) 0px 30px 30px -20px, rgba(10, 37, 64, 0.4) 1px -2px 5px 1px inset',
        },
    }}
>
    <Grid container spacing={3} alignItems="center" justifyContent="center" textAlign="center" sx={{ pt: 5, pb: 7}}>
        {Details.map((item, i) => (
            <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={i}
                sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                }}
            >
                <CountUp
                    end={item.numbers}
                    duration={5}
                    start={item.startnumber}
                    decimals={item.decimals ? item.decimals : 0}
                    className="paras"
                />{' '}
                <span className="paras" style={{ color: '#520000', fontSize: '28px', fontWeight: 'bold' }}>+</span>
                <Typography
                    variant="h4"
                    sx={{
                        color: '#333333',
                        cursor: 'pointer',
                        fontSize: { xs: 18, sm: 20, md: 24 },
                        mt: 1,
                        transition: 'color 0.3s ease',
                        '&:hover': { color: '#fcb950' }, // gold hover effect
                    }}
                >
                    {item.title}
                </Typography>
            </Grid>
        ))}
    </Grid>
</Container>

            </motion.div>
            </Box>
        </div>
    );
}




