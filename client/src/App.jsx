import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Footer from './components/public/footer';
import { Stack } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/public/nav';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Stack minHeight='100vh' justifyContent='space-between' gap='100px'>
      {showNav && <Nav />}
      <Routes>
        <Route path='/' element={<LandingPage setShowNav={setShowNav} />} />
        <Route path='/home' element={<Home setShowNav={setShowNav} />} />
      </Routes>
      <Footer />
    </Stack>
  );
}

export default App;
