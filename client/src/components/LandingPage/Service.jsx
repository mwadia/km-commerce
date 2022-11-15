import { Container, Stack } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';

function Service({ service, index }) {
  const { img, description, title } = service;

  return (
    <Container>
      <Stack
        gap={{ xs: '10px' }}
        direction={{
          sm: index % 2 === 0 ? 'row' : 'row-reverse',
          xs: 'column',
        }}
      >
        <Container maxWidth='xs'>
          <img src={img} style={{ width: '100%' }} />
        </Container>
        <Container maxWidth='xs'>
          <Stack height='100%' justifyContent='center'>
            <Typography
              variant='h4'
              textAlign='center'
              color='#3d4526'
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant='body1'
              textAlign='center'
              color='#576238'
              gutterBottom
            >
              {description}
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}

export default Service;
