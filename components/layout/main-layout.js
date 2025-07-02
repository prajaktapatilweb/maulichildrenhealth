import Box from '@mui/material/Box';
import { Footer, FooterNavigation } from '../footer';
import AppThemeSetting from './AppThemeSetting';
import Mauliheader from '../header/Mauliheader';
const MainLayout = ({ children }) => {
  return (<Box component="main">
    <Mauliheader/>
    <AppThemeSetting/>
    {children}
    <Footer />
    <FooterNavigation/>
  </Box>);
};
export default MainLayout;
