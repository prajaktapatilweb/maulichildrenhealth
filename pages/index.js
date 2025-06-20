import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Countdown from "../components/home/Countdown";
import Clinicinfo from "../components/home/Clinicinfo";
import Associates from "../components/home/Associates";
import Countup from "../components/home/Countup";
import DrDombe from "../components/home/DrAkshay";
import Welcome from "../components/home/Welcome";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
 
    {/* <Welcome/> */}
      {/* <Countdown />
      <Clinicinfo></Clinicinfo>
      <Countup></Countup>
      <Dentalservices/>
      <DrDombe></DrDombe>
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        {/* <Awar
        <Testimonial></Testimonial>
      </Suspense>
      <Equipment />
     <Associates/>
      <Contact></Contact>  */}
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

