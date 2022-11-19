import React, { useEffect } from 'react';
import { useState } from 'react';
import Products from '../components/products/Products';
import { Stack } from '@mui/system';
import FilterTabs from '../components/public/nav/FilterTabs';
import { useContext } from 'react';
import { Store } from '../components/Storage';
import Apiservices from '../services/ApiServices';
function Home({ setShowNav }) {
  const [products, setProducts] = useState([]);
  const { filter,openCart} = useContext(Store);

  useEffect(() => {
    setShowNav(true);
  }, []);
  useEffect(() => {
    const { q, c } = filter;
    Apiservices(`/allproduct?q=${q}&c=${c}`).then((res) => setProducts(res.data))
  }, [filter,openCart]);

  return (
    <Stack alignItems='center' gap='20px'>
      <FilterTabs />
      <Products setProducts={setProducts} products={products} />
    </Stack>
  );
}

export default Home;
