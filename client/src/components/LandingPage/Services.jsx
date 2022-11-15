import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import Service from './Service';
const serviesData = [
  {
    title: 'Select Product',
    img: './saas/selectProduct.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit similique eum debitis, mollitia voluptate quae laborum nam perspiciatis excepturi magnam ex repudiandae id numquam, optio, aut corrupti iusto quam tempora ut inventore accusamus? Odit quibusdam culpa aut ratione laboriosam!',
  },
  {
    title: 'Make Payment',
    img: './saas/makePayment.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit similique eum debitis, mollitia voluptate quae laborum nam perspiciatis excepturi magnam ex repudiandae id numquam, optio, aut corrupti iusto quam tempora ut inventore accusamus? Odit quibusdam culpa aut ratione laboriosam!',
  },
  {
    title: 'Fast Delivery',
    img: './saas/fastDelivery.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit similique eum debitis, mollitia voluptate quae laborum nam perspiciatis excepturi magnam ex repudiandae id numquam, optio, aut corrupti iusto quam tempora ut inventore accusamus? Odit quibusdam culpa aut ratione laboriosam!',
  },
];

function Services() {
  return (
    <Container maxWidth='lg'>
      <Typography
        variant='h3'
        textAlign='center'
        marginBottom='60px'
        color='#576238'
        fontWeight={600}
        gutterBottom
      >
        Servies
      </Typography>
      <Stack gap='100px'>
        {serviesData.map((e, i) => (
          <Service key={i} service={e} index={i} />
        ))}
      </Stack>
    </Container>
  );
}

export default Services;
