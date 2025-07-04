import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
import Heading from "../Heading";
import { headList10 } from "../../constants/titlefile";

const DrParmeshwar = () => {

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
    <>
      <Box id="Doctors" sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Heading data={headList10} />
        </ Container>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >


          <Grid item xs={12} sm={5} sx={{ p: 4 }}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              <div className='wrapper'>
                <div className='blob1'></div>
                <div className='imageContainer'>
                  <Image
                    src="/images/dr/dr2.jpg"
                    alt="Doctor"
                    fill
                    className='image'
                  />
                </div>
              </div>

            </motion.div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <motion.div
              className="textcontainer"
              variants={fadeUpVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{

                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2

                  }}
                >
                  <Typography>
                    Dr. Parmeshwar Taware is a highly trusted pediatrician in Navi Mumbai with over 17 years of experience in pediatric and neonatal care. Known for his warm, child-friendly approach and deep understanding of child psychology, Dr. Taware is dedicated to offering comprehensive medical care for children — from infancy through adolescence.
                    <br></br>
                    A graduate with an MD in Pediatrics from the prestigious Grant Medical College, Dr. Taware combines clinical expertise with genuine compassion. His mission is to nurture a healthier generation through personalized, preventive, and evidence-based pediatric care.
                    <br></br>
                    Dr. Taware currently practices at Mauli Children & Multi-speciality Hospital in Kalamboli, ensuring that every young patient and parent feels supported, heard, and confident about their child’s health journey.
                    <br></br><br></br>
                    <ul class="star-list">
                      <li> 17+ Years of Experience in Pediatrics & Neonatal Care</li>
                      <li>MD Pediatrics</li>
                      <li>Effective Management of Common & Complex Pediatric Conditions</li>
                      <li>Special Focus on Growth, Nutrition & Developmental Milestones</li>
                      <li>Deep Understanding of Child Psychology & Development</li>
                      <li>Friendly, Reassuring, and Child-Centric Approach</li>
                    </ul>
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

      </Box>
    </>
  );
};
export default DrParmeshwar;
