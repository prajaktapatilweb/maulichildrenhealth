import React from 'react';
import Box from '@mui/material/Box';
import { StyledButton } from '../styled-button';
const AuthNavigation = () => {
  return (<Box sx={{ '& button:first-child': { mr: 2 } }}>
    <StyledButton disableHoverEffect={true} variant="outlined">
      Sign In
    </StyledButton>
    <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
  </Box>);
};
export default AuthNavigation;
