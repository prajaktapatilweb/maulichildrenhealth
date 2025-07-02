import { MainLayout } from '../components/layout';
import Whatwedo from '../components/home/Maulichildren/Whatwedo';
import Mauliheader from '../components/header/Mauliheader';

export default function Home() {
  return (
    <>
 
<Whatwedo/>
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

