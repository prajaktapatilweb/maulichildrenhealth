import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Heading from '../Heading';
import { headList10 } from '../../constants/titlefile';

const logos = [
  { src: '/images/insurance/bajaj2.png', alt: 'Bajaj Allianz' },
  { src: '/images/insurance/icicilombard1.jpg', alt: 'ICICI Lombard' },
  { src: '/images/insurance/mediassist1.png', alt: 'MediAssist' },
  { src: '/images/insurance/star1.png', alt: 'Star-Health-Insurance' },
];

const InsurerLogos = () => {
  return (
    <section style={{backgroundColor:'#f5f5f5'}}>
    <Container sx={{py:7}}>
          <Heading data={headList10} />
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{py:4}}
        >
{logos.map((logo, index) => (
  <Grid item xs={12} sm={3} sx={{ textAlign: 'center' }} key={index}>
      <Image
        src={logo.src}
        alt={logo.alt}
        layout='responsive' // Fill the box
        objectFit='contain' // Maintain aspect ratio, no crop
        width='100'
        height='100'
        style={{
    border: '1px solid grey',
    boxShadow: '0 10px 8px rgba(0, 0, 0, 0.3)', // Soft shadow
    borderRadius: '8px', // Rounded corners
    transition: 'transform 0.3s, box-shadow 0.3s', // Smooth hover effect
  }}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }}
      />
  </Grid>
))}


  
  
    </Grid>

    </ Container>
    </section>
  );
};


export default InsurerLogos;

