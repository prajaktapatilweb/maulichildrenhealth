import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
import Heading from "./Heading";
import { headList3, headList9 } from "../constants/titlefile";



const DrDombe = () => {

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

  // Define the fade-left animation variants
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },  // Start from the left (-100px offset) and slightly below (50px down)
    visible: {
      opacity: 1,
      x: 0,  // Move to original position horizontally
      y: 0,  // Move to original position vertically
      transition: {
        duration: 0.8,  // Duration of the animation
        ease: 'easeInOut',  // Easing function for a smooth motion

      },
    },
  };

  return (
    <>
      <Box id="Doctors" sx={{ py: 8,textAlign:'center' }}>
        <Container>
   <Heading  data={headList3}/>
        </ Container>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >


          <Grid item xs={12} sm={5} sx={{ p: 3}}>
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
              
              <Image
                src="/images/dr/drdombe4.png"
                alt=" Dr. Nikhil Abbad at College Road Dental Clinic"
                width={100}
                height={100}
               layout="responsive"
               style={{margin:2}}
              />

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
<b>Dr. Sunita Taware </b>is a trusted <b>pediatric dentist in Navi Mumbai</b> with over 9 years of dedicated expertise in treating infants, toddlers, children, and adolescents. As a specialist in paedodontics, she is passionate about making dental visits gentle, positive, and completely stress-free for young patients and their families.
<br></br>
An MDS postgraduate from a reputed university, Dr. Taware blends advanced clinical skills with a calm, reassuring approach that helps even the most anxious children feel comfortable in the dental chair. She strongly believes in <b>preventive care, early intervention, and dental education</b> to nurture healthy smiles from the very first tooth.
<br></br>
Her services include <b>painless pediatric root canals, tooth-colored fillings, cavity prevention, oral habit counseling, and care for children with special needs</b> — all delivered in a child-friendly, welcoming environment that encourages trust and lifelong dental confidence.
<br></br><br></br>
<ul class="star-list">
<li> 9+ Years of Expertise in Pediatric Dentistry</li>
<li> MDS – Paedodontics focused on preventive & minimally invasive care</li>
<li> Painless pediatric root canals, fillings & habit-breaking appliances</li>
<li> Special care for anxious children and kids with special healthcare needs</li>
<li> Emphasis on early intervention, oral hygiene education & building lifelong healthy habits</li>
</ul>

                   </Typography>

                </Box>

                {/* <input type="checkbox" class="check" /> */}

              </Box>
            </motion.div>
          </Grid>



         
         


        </Grid>

      </Box>
    </>
  );
};
export default DrDombe;
