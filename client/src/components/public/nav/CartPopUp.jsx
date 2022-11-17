import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { IconButton } from '@mui/material';
import { useEffect } from 'react';
import Axios from 'axios';
import { useContext } from 'react';
import { Store } from '../../Storage';
import Product from '../../products/Product';
import CartProduct from './CartProduct';

export default function CartPopUp({ countCart }) {
  const { cartProduct, openCart, setOpenCart } = useContext(Store);

  const handleClickOpen = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
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
        {cartProduct.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </Dialog>
    </React.Fragment>
  );
}
