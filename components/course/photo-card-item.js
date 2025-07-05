import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const PhotoCardItem = ({ item }) => {
  return (
    <Box>
      <Box sx={{px: 1,py:3}}>
        <Box>
         
          <Image
            alt='Happy Patients'
            src={`/images/asthetic/patients/p${item}.jpg`}
            width={100}
            height={100}
            layout='responsive'
            style={{borderTopLeftRadius:20,borderBottomRightRadius:20, border:'3px solid white',}}
            ></Image>
       

         
        </Box>
       
      </Box>
    </Box>);
};
export default PhotoCardItem;
