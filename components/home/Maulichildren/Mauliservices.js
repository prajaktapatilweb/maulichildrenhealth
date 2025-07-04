import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Heading from '../Heading';
import { headList9 } from '../../constants/titlefile';

export default function Mauliservices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const Details = [
    {
      icons: "/images/icons/pediatric.png",
      icons1: "/images/icons/implant1.png",
      title: 'OPD Pediatric Care',
      desc: 'Restore your smile with durable and natural-looking dental implants.'
    },
    {
      icons: "/images/icons/vaccines1.png",
      icons1: "/images/icons/dental-care1.png",
      title: 'Vaccination Centre',
      desc: 'Enhance your smile with custom crowns and bridges that fit seamlessly.'
    },
    {
      icons: "/images/icons/nebu3.png",
      icons1: "/images/icons/dental-care3.png",
      title: ' Nebulization Services',
      desc: 'Experience a comfortable and safe tooth extraction process.'
    },
    {
      icons: "/images/icons/babyclinic.png",
      icons1: "/images/icons/dental-care3.png",
      title: 'Well Baby Clinic',
      desc: 'Ensure your child’s dental health with gentle, specialized care.'
    },
    {
      icons: "/images/icons/braces.png",
      icons1: "/images/icons/braces1.png",
      title: 'Adolescent Child Care',
      desc: 'Achieve a straighter smile with our advanced braces and aligners.'
    },
    {
      icons: "/images/icons/root.png",
      icons1: "/images/icons/root1.png",
      title: 'Parental Counselling',
      desc: 'Relieve pain and save your tooth with our gentle root canal treatment.'
    },
    {
      icons: "/images/icons/whitening.png",
      icons1: "/images/icons/whitening1.png",
      title: 'Diet & Nutrition Counselling',
      desc: 'Brighten your smile with fast and effective professional whitening.'
    },
    {
      icons: "/images/icons/veeners.png",
      icons1: "/images/icons/veeners1.png",
      title: 'New-born Screening Tests',
      desc: 'Transform your smile with custom veneers for a flawless look.'
    },
    {
      icons: "/images/icons/veeners.png",
      icons1: "/images/icons/veeners1.png",
      title: 'NICU (Neonatal ICU)',
      desc: 'Transform your smile with custom veneers for a flawless look.'
    },
    {
      icons: "/images/icons/veeners.png",
      icons1: "/images/icons/veeners1.png",
      title: 'PICU (Pediatric ICU)',
      desc: 'Transform your smile with custom veneers for a flawless look.'
    },
    {
      icons: "/images/icons/veeners.png",
      icons1: "/images/icons/veeners1.png",
      title: 'Pediatric Surgery',
      desc: 'Transform your smile with custom veneers for a flawless look.'
    },
    {
      icons: "/images/icons/veeners.png",
      icons1: "/images/icons/veeners1.png",
      title: '    Laboratory & Diagnostic Services',
      desc: 'Transform your smile with custom veneers for a flawless look.'
    },
  ];

  // Framer motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <Box>
      <section id="treatments" className="events2">
        <section
          style={{
            position: "relative",
            // backgroundColor:'#1e3081',
            background: 'linear-gradient(to right, rgba(30, 48, 129, 0.92), rgba(30, 48, 129, 0.92))',
            overflow: "hidden",
            paddingBottom: "100px",
          }}
        >
          <Box sx={{ paddingTop: "50px" }}>
            <Heading data={headList9} />

            <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">


              <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ py: 6 }}>
                {Details.map((item, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <motion.div
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card
                        elevation={4}
                        sx={{
                          py: 2,
                          px: 2,
                          minHeight: { xs: '280px', sm: '300px', md: '160px' }, // Set consistent min-height across screen sizes
                          borderRadius: 4,
                          display: 'flex', // Flexbox to align content inside
                          flexDirection: 'column',
                          justifyContent: 'space-between', // Pushes content to top and bottom for consistency
                          textAlign: 'center',
                          transition: 'transform 0.3s, box-shadow 0.3s',
                          cursor: 'pointer',
                          backgroundColor: 'transparent',
                          border: '1px solid white',
                          borderBottom: '2px solid red',
                          '&:hover': { transform: 'scale(1.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)',  borderBottom: '4px solid #db031b', },
                        }}
                      >


                        <Box
                          sx={{


                            mx: 'auto',
                            mb: 2,
                          }}
                        >
                          <Image
                            src={item.icons}
                            width={60}
                            height={60}
                            alt={item.title}
                          />
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                          {item.title}
                        </Typography>
                        {/* <Typography variant="body2" sx={{ color: 'white' }}>
                          {item.desc}
                        </Typography> */}
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* Wave Section */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,122.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
      </section>
    </Box>
  );
}
