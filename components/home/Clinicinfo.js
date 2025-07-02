import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../constants/titlefile";


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

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100, y: 0 }, // Fade from left
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Clinicinfo = () => {
  
  return (
    <Grid
    container
    spacing={0}
    alignItems="center"
    justifyContent="center"
    id="aboutus"
    sx={{py:8 }}
  >


    <Grid item xs={12} md={6} sx={{ p: 1 }}  alignItems="center"
    justifyContent="center">
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Optionally only animate once
          >
            <Drgallery />
          </motion.div>
        </Grid>

        {/* Right Side (Text Content) */}
        <Grid item xs={12} md={6} textAlign="justify" sx={{ p: 1 }}  alignItems="center"
    justifyContent="center">
        <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

<Typography
    variant="h1"
    sx={{
        // fontSize: { xs: 27, md: 33 },
        fontWeight: "600",
      

    }}
>
Smiles for Kids & Beyond
</Typography>
<Typography
    component="h1"
    sx={{
        fontSize: { sm: 18, md: 20 },
        fontWeight: "400",
        color: 'primary.light',
        pb:1

    }}
>
Gentle pediatric dentistry and complete family dental care.

</Typography>

            <Typography
            
              style={{
                marginTop: 4,
                marginBottom: 0,
                marginRight:2
               
              }}
            >
<b>Aesthetic Dental Clinic</b> in Kalamboli is dedicated to creating a positive, gentle, and comfortable dental experience for children and families alike. Led by <b>Dr. Sunita Taware, BDS, MDS – Paedodontist </b>, the clinic combines deep expertise in pediatric dentistry with a reassuring, child-friendly approach helping even the most anxious little ones feel relaxed.
     <br /><br/>
We focus on <b>preventive, restorative, and aesthetic care for kids,</b> including cavity prevention, fluoride applications, pit & fissure sealants, pediatric root canals, space maintainers, and interceptive orthodontics. Every visit aims to build trust and lifelong healthy habits.
     <br /><br/>
Beyond pediatric care, we also <b>offer a full spectrum of advanced dental services for adults and seniors,</b> such as dental implants, smile designing, fixed orthodontics, prosthetic rehabilitation, gum surgeries, root canal treatments, wisdom tooth removal, ultrasonic cleaning, tobacco habit counselling, and digital dental X-rays.
     <br /><br/>
With modern technology, evidence-based treatment plans, and open communication with parents and patients, Aesthetic Dental Clinic ensures every smile from the first tooth to adulthood, receives the care it truly deserves.

            </Typography>
          </motion.div>
          
        </Grid>
        
      </Grid>
    // </Container>
  );
};

export default Clinicinfo;
