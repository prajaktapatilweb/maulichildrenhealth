import { AppBar, Grid } from '@mui/material';
import HeroSection from '../components/home/HeroSection';


export default function Home() {
  return (
    <>
    <AppBar
    position="static"
    sx={{ backgroundColor: "transparent", boxShadow: "none" }}
  >
    <Grid container sx={{ height: "100vh" }}>
      <HeroSection
        title="Expert Dental Care for All Ages"
        description="Trust Dr. Sagar Dombe for bespoke dental treatments in Thergaon, Pune."
        buttonText="Let’s Perfect Your Smile"
        link='/astheticdental'
        bgImage="/images/headerback1.jpg"
        gradient="to right, rgba(179, 129, 90, 0.6), rgba(210, 162, 125, 0.6)"
      />
  
      <HeroSection
        title="Caring for Your Little Ones"
        description="Compassionate pediatric care for infants, toddlers, and kids."
        buttonText="Let’s Nurture Their Health"
         link='/maulichildrenhospital'
        bgImage="/images/headerback3.jpg"
        gradient="to right, rgba(30,144,255, 0.6), rgba(30,144,255, 0.6)"
      />
    </Grid>
  </AppBar>
  
    </>
  )
}

