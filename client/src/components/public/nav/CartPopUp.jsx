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
} from '@mui/material';
import { useContext } from 'react';
import { Store } from '../../Storage';
import CartProduct from './CartProduct';
import TestCart from './TestCart';
import { Stack } from '@mui/system';
import { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';

export default function CartPopUp({ countCart }) {
  const {
    cartProduct,
    openCart,
    setOpenCart,
    total,
    setTotal,
    setCartProduct,
  } = useContext(Store);
  const handleClickOpen = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };
  const handelDeletedAll = () => {
    Axios.delete('/destroyallproductcart');
    setTotal(0);
    setCartProduct([]);
  };
  const handelBuy = () => {
    Axios.put('/buyproducts', { total: total }).then((res) =>
      toast.success('Done!')
    );
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
          p={{ sm: 1, xs: 0 }}
          alignItems='center'
          justifyContent={{ sm: 'space-between', xs: 'center' }}
          direction={{ sm: 'row', xs: 'column' }}
        >
          <Container maxWidth='md' sx={{ p: 0, m: 0 }}>
            <Stack
              gap='0px'
              direction={{ sm: 'column', xs: 'row' }}
              flexWrap={{ xs: 'wrap' }}
              justifyContent={{ xs: 'center' }}
            >
              {cartProduct.map((item) => (
                <Stack key={item.id} gap='5px'>
                  <TestCart item={item} />
                  <Divider />
                </Stack>
              ))}
            </Stack>
          </Container>
          <Divider orientation='vertical' flexItem />
          <Stack
            direction={{ xs: 'row', sm: 'column' }}
            sx={{ background: 'red', width: '35%', height: '100%' }}
          >
            <Typography textAlign='center' variant='h6'>
              Total:${total}
            </Typography>
            <Button onClick={handelDeletedAll}>remove all items</Button>
            <Button onClick={handelBuy}>buy</Button>
          </Stack>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
