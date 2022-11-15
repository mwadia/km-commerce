import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Chip from '@mui/material/Chip';

export default function Product({ item }) {
  const { id, name, price, count, productImg } = item;
  return (
    <Box maxWidth='250px' position='relative'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={productImg}
            alt='green iguana'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              fontWeight='light'
              component='div'
            >
              {name}
            </Typography>
            <Stack direction='row' justifyContent='space-between'>
              <Typography
                variant='h5'
                fontWeight='light'
                display='block'
                color='text.secondary'
              >
                ${price}
              </Typography>

              <Chip
                label={`quantity: ${count}`}
                xs={{ color: '#fcf9f4' }}
                variant='outlined'
              />
            </Stack>
            <ShoppingCartOutlinedIcon
              sx={{
                position: 'absolute',
                top: 10,
                right: '10px',
                color: 'white',
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
