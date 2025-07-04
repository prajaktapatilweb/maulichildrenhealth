import React from 'react'
import Clinicinfo from '../components/home/Clinicinfo'
import Countup from '../components/home/Countup'
import Dentalservices from '../components/home/Dentalservices'
import Photogallery from '../components/home/photo-gallery'
import Testimonial from '../components/home/Testimonial'
import Contact from '../components/home/Contact'
import MainLayout1 from '../components/layout/main-layout1'
import FAQAccordion from '../components/home/FAQAccordion'
import DrSunita from '../components/home/DrSunita'

export default function Home() {
  return (
    <div>
     
      <Countup></Countup>
      {/* <Countdown/> */}
      <Clinicinfo></Clinicinfo>
      <Dentalservices/>
      <DrSunita/>
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
