import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Box,
  CardActionArea,
  Container,
  IconButton,
  Stack,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Chip from '@mui/material/Chip';
import { useContext } from 'react';
import { Store } from '../Storage';
import { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';
export default function Product({ item }) {
  const { id, name, price, count, productImg } = item;
  const { user, cartProduct } = useContext(Store);
  const [isCart, SetIsCart] = useState(false);
  useEffect(() => {
    if (cartProduct.some((e) => e.ProductId === id)) {
      SetIsCart(true);
    }
  }, [cartProduct]);
  const handelAddtoCart = () => {
    if (isCart) {
      Axios.delete(`/destroyoneproductcart/${id}`);
    } else {
      Axios.post('/addproducttocart', { ProductId: id });
    }
    SetIsCart(!isCart);
  };
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
                color='success'
                variant='outlined'
                label={`quantity: ${count}`}
              />
            </Stack>
            {user && (
              <ShoppingCartOutlinedIcon
                onClick={handelAddtoCart}
                sx={{
                  color: isCart ? 'red' : 'white',
                  position: 'absolute',
                  top: 10,
                  right: '10px',
                }}
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
