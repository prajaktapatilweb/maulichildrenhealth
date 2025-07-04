import { MainLayout } from '../components/layout';
import Countdown from '../components/home/Countdown';
import Clinicinfomauli from '../components/home/Maulichildren/Clinicinfomauli';
import Mauliservices from '../components/home/Maulichildren/Mauliservices';
import DrParmeshwar from '../components/home/Maulichildren/DrParmeshwar ';
import InsurerLogos from '../components/home/Maulichildren/InsurerLogos';

export default function Home() {
  return (
    <>
 <Countdown/>
<Clinicinfomauli/>
<Mauliservices/>
<DrParmeshwar/>
<InsurerLogos/>
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

