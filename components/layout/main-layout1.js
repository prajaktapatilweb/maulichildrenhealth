import React from 'react';
import Box from '@mui/material/Box';
import { Footer, FooterNavigation } from '../footer';
import { Header } from '../header';
import AppThemeSetting from './AppThemeSetting';
import Mauliheader from '../header/Mauliheader';
import Astheticheader from '../header/Astheticheader';
const MainLayout1 = ({ children }) => {
  return (<Box component="main">
   <Astheticheader/>
    <AppThemeSetting/>
    {children}
    <Footer />
    {/* <FooterNavigation/> */}
  </Box>);
};
export default MainLayout1;
