import { MainLayout } from '../components/layout';
import Countdown from '../components/home/Countdown';
import Clinicinfomauli from '../components/home/Maulichildren/Clinicinfomauli';
import Mauliservices from '../components/home/Maulichildren/Mauliservices';
import DrParmeshwar from '../components/home/Maulichildren/DrParmeshwar ';
import InsurerLogos from '../components/home/Maulichildren/InsurerLogos';
import Photogallery from '../components/home/Maulichildren/photo-gallery';
import Testimonial from '../components/home/Maulichildren/Testimonial';
import FAQAccordion from '../components/home/Maulichildren/FAQAccordion';

export default function Home() {
  return (
    <>
 <Countdown/>
<Clinicinfomauli/>
<Mauliservices/>
<DrParmeshwar/>
<InsurerLogos/>
<Photogallery/>
<Testimonial/>
<FAQAccordion/>
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

