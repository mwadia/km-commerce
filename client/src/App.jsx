import React from 'react';
import LandingPage from './pages/LandingPage';
import Footer from './components/public/footer';
import { Stack } from '@mui/system';

function App() {
  return (
    <Stack justifyContent='space-between' gap='100px'>
      <LandingPage />
      <Footer />
    </Stack>
  );
}

export default App;
