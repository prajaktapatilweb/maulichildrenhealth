import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

const Drgalleryitem = ({ item }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: '12px',
        padding: '2px',
        backgroundImage: 'linear-gradient(135deg, #fcb950, #520000)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        width: '100%', // Ensure container takes width
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            pb: '100%', // 👈 This is the key to maintain a square ratio (height is 100% of width)
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          <Image
            alt='clinic'
            src={`/images/asthetic/clinic/asthclinic${item}.jpg`}
            layout="fill"
            objectFit="contain"
            className="item"
          />
        </Box>
      </div>
    </div>
  );
};

export default Drgalleryitem;
