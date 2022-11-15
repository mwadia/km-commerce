import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Container } from '@mui/material';
import Products from '../components/products/Products';
function Home({ setShowNav }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setShowNav(true);
  }, []);
  useEffect(() => {
    Axios.get('/allproduct').then((res) => setProducts(res.data));
  }, []);


  return <Products products={products} />;
}

export default Home;
