import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Footer from './components/public/footer';
import { Stack } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/public/nav';
import Storage from './components/Storage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './helper/Theme';
import Profile from './pages/Profile';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <ToastContainer
          position='bottom-left'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <Storage>
          <Stack minHeight='100vh' justifyContent='space-between' gap='50px'>
            {showNav && <Nav />}
            <Routes>
              <Route
                path='/'
                element={<LandingPage setShowNav={setShowNav} />}
              />
              <Route path='/home' element={<Home setShowNav={setShowNav} />} />
              <Route
                path='/user/:id'
                element={<Profile setShowNav={setShowNav} />}
              />
            </Routes>
            <Footer />
          </Stack>
        </Storage>
      </ThemeProvider>
    </>
  );
}

export default App;
