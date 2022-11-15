import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button } from '@mui/material';
import GetStartButton from './GetStartButton';

function GittingStarted() {
  return (
    <Stack
      height='100vh'
      sx={{
        backgroundImage: {
          xs: 'url(./saas/landingPageBG-mobile.jpeg)',
          sm: 'url(./saas/landingPageBG-desctop.jpg)',
        },
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
      direction='column'
      alignItems='center'
      justifyContent='space-evenly'
      borderBottom='2px solid #fce9d8'
    >
      <Box />
      <GetStartButton />
    </Stack>
  );
}

export default GittingStarted;
