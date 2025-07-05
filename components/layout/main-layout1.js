import React from 'react';
import Box from '@mui/material/Box';
import { Footer } from '../footer';
import AppThemeSetting from './AppThemeSetting';
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
