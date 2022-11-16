import { Container, Stack } from '@mui/material';
import React from 'react';
import Product from './Product';

function Products({ products }) {
  return (
    <Container maxWidth='lg'>
      <Stack direction='row' flexWrap='wrap' gap='20px' justifyContent='center'>
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Stack>
    </Container>
  );
}

export default Products;
