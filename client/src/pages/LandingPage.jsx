import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import LandingPageComponents from '../components/LandingPage';

function LandingPage({ setShowNav }) {
  useEffect(() => {
    setShowNav(false);
  }, []);

  return (
    <Box>
      <LandingPageComponents />
    </Box>
  );
}

export default LandingPage;
