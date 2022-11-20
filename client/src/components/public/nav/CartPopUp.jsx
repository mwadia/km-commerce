import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { useContext } from 'react';
import { Store } from '../../Storage';
import CartProduct from './CartProduct';
import TestCart from './TestCart';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { toast } from 'react-toastify';
import io from 'socket.io-client';
import Apiservices from '../../../services/ApiServices';
const socket = io.connect(process.env.REACT_APP_BASE_URL);
export default function CartPopUp({ countCart }) {
  const {
    cartProduct,
    openCart,
    setOpenCart,
    total,
    setTotal,
    setCartProduct,
    SetCountCart,
  } = useContext(Store);
  const handleClickOpen = () => {
    Apiservices.get('/getcartproduct').then((res) => {
      setCartProduct(res.data.data);
      SetCountCart(res.data.data.length);
      setTotal(
        res.data.data.reduce((a, b) => a + b.Product.price * b.count, 0)
      );
    });
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };
  const handelDeletedAll = () => {
    Apiservices.delete('/destroyallproductcart');
    setTotal(0);
    setCartProduct([]);
  };
  const handelBuy = () => {
    Apiservices.put('/buyproducts', { total: total }).then((res) => {
      toast.success('pursued done!');
      socket.emit('notification', {
        data: cartProduct.map((e) => (e = e.Product.UserId)),
      });
    });
    setTotal(0);
    setCartProduct([]);
  };

  return (
    <React.Fragment>
      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
        onClick={handleClickOpen}
      >
        <Badge badgeContent={countCart} color='error'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={openCart}
        onClose={handleClose}
      >
        <Stack
          p={{ sm: 0, xs: 0 }}
          justifyContent={{ sm: 'space-between', xs: 'center' }}
          direction={{ sm: 'row', xs: 'column' }}
          sx={{ height: '100%' }}
        >
          <Container maxWidth='md' sx={{ p: 0, m: 0, minHeight: '250px' }}>
            <Stack
              direction={{ sm: 'column', xs: 'row' }}
              flexWrap={{ xs: 'wrap' }}
              justifyContent={{ xs: 'center' }}
            >
              {cartProduct.map((item) => (
                <Stack key={item.id}>
                  <TestCart item={item} />
                  <Divider />
                </Stack>
              ))}
            </Stack>
          </Container>
          <Divider orientation='vertical' flexItem />
          <Box
            width={{ xs: '100%', sm: '300px' }}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Stack
              direction={{ xs: 'row', sm: 'column' }}
              justifyContent={{ sm: 'center', xs: 'space-around' }}
              alignItems='center'
              sx={{
                background: '#f5f5f58a',
                height: '100%',
                width: '100%',
              }}
            >
              <Typography textAlign='center' variant='h6'>
                Total: $ {total}
              </Typography>

              <Button
                sx={{ background: '#ededed', margin: '15px 0' }}
                onClick={handelBuy}
              >
                buy
              </Button>
              <Button sx={{ background: '#ededed' }} onClick={handelDeletedAll}>
                delete all items
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
