import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Heading from './Heading';
import { headList2 } from '../constants/titlefile';

export default function Dentalservices() {
  var Details = [
    {
      icons: "/images/icons/implant.png",
      icons1: "/images/icons/implant1.png",
      title: 'Dental Implants',
      desc: 'Restore your smile with durable and natural-looking dental implants.'
    },
    {
      icons: "/images/icons/dental-care.png",
      icons1: "/images/icons/dental-care1.png",
      title: 'Crowns & Bridges',
      desc: 'Enhance your smile with custom crowns and bridges that fit seamlessly.'
    },
    {
      icons: "/images/icons/dental-care2.png",
      icons1: "/images/icons/dental-care3.png",
      title: 'Tooth Extraction',
      desc: 'Experience a comfortable and safe tooth extraction process.'
    },

    {
      icons: "/images/icons/dental-care.png",
      icons1: "/images/icons/dental-care3.png",
      title: 'Pediatric Dentistry',
      desc: 'Ensure your child’s dental health with gentle, specialized care.'
    },
    {
      icons: "/images/icons/braces.png",
      icons1: "/images/icons/braces1.png",
      title: 'Braces & Aligners',
      desc: 'Achieve a straighter smile with our advanced braces and aligners.'
    },
    {
      icons: "/images/icons/root.png",
      icons1: "/images/icons/root1.png",
      title: 'Root Canal Treatment',
      desc: 'Relieve pain and save your tooth with our gentle root canal treatment.'
    },
    {
      icons: "/images/icons/whitening.png",
      icons1: "/images/icons/whitening1.png",
      title: 'Teeth Whitening',
      desc: 'Brighten your smile with fast and effective professional whitening.'
    },
    {
      icons: "/images/icons/veeners.png",
      icons1: "/images/icons/veeners1.png",
      title: 'Dental Veneers',
      desc: 'Transform your smile with custom veneers for a flawless look.'
    },

  ]



  // State to track if the card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child (card) by 0.2 seconds
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to its final position
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };


  return (
    <div>


      <section id='treatments' className="events2" >
        {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
        <section
          style={{
            position: "relative",
            background: "linear-gradient(to right, rgba(82, 0, 0, 0.8), rgba(133, 68, 33, 0.8))",
            overflow: "hidden",
            paddingBottom: "100px", // Ensures content stays above the wave
          }}
        >
          <Box sx={{ paddingTop: "50px" }}>
            <Heading data={headList2} />
            {/* Framer Motion Container for the animation */}
            <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">

              <Grid container spacing={0} sx={{ py: 6 }} textAlign='center' alignItems='center' justifyContent='center'>
                <Grid item xs={12} md={12}>
                  {/* Show limited cards on mobile, and all cards on desktop */}
                  <Grid container spacing={3} textAlign='center' alignItems='center' justifyContent='center' sx={{ pb: 3 }}>
                    {Details.map((item, i) => (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        key={i}
                        sx={{
                          display: 'flex', // Enable flexbox for centering
                          flexDirection: 'column', // Arrange content vertically
                          justifyContent: 'center', // Center content vertically
                          alignItems: 'center', // Center content horizontally
                          textAlign: 'center', // Center text inside the Grid
                          height: '100%', // Ensure the Grid takes full height
                          pb:5
                        }}
                      >
                        <Card
                                                
                                                sx={{
                                                  py: 2,
                                                  width:'100%',
                                                  borderRadius: 4,
                                                  display: 'flex', // Flexbox to align content inside
                                                  flexDirection: 'column',
                                                  justifyContent: 'space-between', // Pushes content to top and bottom for consistency
                                                  textAlign: 'center',
                                                  transition: 'transform 0.3s, box-shadow 0.3s',
                                                  cursor: 'pointer',
                                                  backgroundColor: 'transparent',
                                                  border: '1px solid white',
                                                  borderBottom: '3px solid #fcb950',
                                                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)',  borderBottom: '4px solid #fcb950', },
                                                }}
                                              >
                        <motion.div
                          variants={fadeUpVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          style={{
                            display: 'flex', // Flexbox for child items
                            flexDirection: 'column', // Arrange avatar and text vertically
                            justifyContent: 'center', // Vertical centering
                            alignItems: 'center', // Horizontal centering
                          }}
                        >
                          {/* Avatar */}
                          <Avatar
                            alt="R"
                            src=""
                            sx={{
                              width: 80, // Avatar width
                              height: 80, // Avatar height
                              backgroundColor: 'transparent', // Optional background color
                              display: 'flex', // Flexbox for inner content
                              justifyContent: 'center', // Center content horizontally
                              alignItems: 'center', // Center content vertically
                              marginBottom: '10px', // Space below the avatar
                            }}
                          >
                            <Image
                              src={item.icons}
                              width={50}
                              height={50}
                              style={{
                                display: 'block', // Ensure the image aligns properly
                              }}
                            />
                          </Avatar>

                          {/* Title */}
                          <Typography
                            variant="h4"
                            sx={{
                              color: 'white',
                              textAlign: 'center',
                            }}
                          >
                            {item.title}
                          </Typography>
                        </motion.div>
                        </Card>
                      </Grid>
                    ))}

                  </Grid>
                </Grid>
               
              </Grid>
            </Container >
          </Box>
          {/* Wave Section */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none" /* Ensures scaling fits the container */
              style={{
                display: "block",
                width: "100%",
                height: "100%", // Height of the wave
              }}
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,122.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section></section>

    </div >
  )
}
