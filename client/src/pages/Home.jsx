import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
function Home({ setShowNav }) {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    setShowNav(true);
  }, []);
  useEffect(() => {
    Axios.get('/allproduct').then((res) => setProducts(res.data));
  }, []);
  console.log(Products);
  return <div>home page</div>;
}

export default Home;
