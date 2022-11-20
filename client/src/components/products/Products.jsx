import { Container, Stack } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { Store } from '../Storage';
import Product from './Product';

function Products({ products, setProducts }) {
  return (
    <Container sx={{ minHeight: '70vh' }} maxWidth='lg'>
      <Stack direction='row' flexWrap='wrap' gap='20px' justifyContent='center'>
        {products.map((item) => (
          <Product
            setUserProducts={setProducts}
            userProducts={products}
            key={item.id}
            item={item}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Products;
