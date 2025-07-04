import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "../Drgallery";


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

const Clinicinfomauli = () => {

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      id="aboutus"
      sx={{ py: 9, backgroundColor: '#f5f5f5' }}
    >


      <Grid item xs={12} md={6} sx={{ p: 1 }} alignItems="center"
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
      <Grid item xs={12} md={6} textAlign="justify" sx={{ p: 1 }} alignItems="center"
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
              color: 'secondary.dark'

            }}
          >
            Where Little Patients Come First
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { sm: 18, md: 20 },
              fontWeight: "400",
              color: 'secondary.main',
              pb: 1

            }}
          >
            From newborns to teens, we’re with you every step of the way.

          </Typography>

          <Typography

            style={{
              marginTop: 4,
              marginBottom: 0,
              marginRight: 2

            }}
          >
            Mauli Children & Multi-Speciality Hospital, Kalamboli, is recognised as one of the <b>best children’s hospitals in Navi Mumbai,</b> trusted by families for comprehensive and compassionate pediatric care. Led by Dr. Parmeshwar Taware, our dedicated pediatric wing focuses on the complete health journey of newborns, infants, children, and adolescents, blending medical expertise with a friendly, child-centric approach.
            <br /><br />
            Equipped with advanced facilities like NICU(Neonatal Intensive Care Unit) and PICU(Pediatric Intensive Care Unit), we offer a full spectrum of services including pediatric surgery, growth and nutrition clinics, vaccinations and immunizations, developmental assessments, asthma and allergy management, adolescent health care, and modern diagnostic and imaging services — all under one roof. Our team ensures that every child receives personalised, evidence-based care tailored to their unique needs.
            <br /><br />
            To make quality healthcare accessible, we are open 24/7 and provide cashless treatment options through leading insurance partners. At Mauli Children & Multi-Speciality Hospital, our mission goes beyond treatment — we’re dedicated to nurturing healthier, happier tomorrows for every child we serve.

          </Typography>
        </motion.div>

      </Grid>

    </Grid>
    // </Container>
  );
};

export default Clinicinfomauli;
