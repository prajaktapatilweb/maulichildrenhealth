import React from 'react'
import Countdown from '../components/home/Countdown'
import Clinicinfo from '../components/home/Clinicinfo'
import Countup from '../components/home/Countup'
import Dentalservices from '../components/home/Dentalservices'
import DrDombe from '../components/home/DrDombe'
import Photogallery from '../components/home/photo-gallery'
import Testimonial from '../components/home/Testimonial'
import Equipment from '../components/home/Equipment'
import Associates from '../components/home/Associates'
import Contact from '../components/home/Contact'
import MainLayout1 from '../components/layout/main-layout1'
import FAQAccordion from '../components/home/FAQAccordion'
import Demo from '../components/home/Demo'

export default function Home() {
  return (
    <div>
     
      <Countup></Countup>

      {/* <Countdown/> */}
      <Clinicinfo></Clinicinfo>
      <Dentalservices/>
      <DrDombe></DrDombe>
      <Photogallery />
      <Testimonial></Testimonial>
      <FAQAccordion/>
      {/* <Equipment/> */}
     {/* <Associates/> */}
      <Contact></Contact>
      
    </div>
  )
}
Home.getLayout = (page) => <MainLayout1>{page}</MainLayout1>;
