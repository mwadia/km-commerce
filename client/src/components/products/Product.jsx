import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Chip from '@mui/material/Chip';
import { useContext } from 'react';
import { Store } from '../Storage';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import EditAndDeleteBtn from './EditAndDeleteBtn';
import Apiservices from '../../services/ApiServices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Product({ item, setUserProducts, userProducts }) {
  const [newItem, setNewItem] = useState(item);
  const { id, name, price, count, productImg } = newItem;
  const { user, cartProduct, SetCountCart, countCart, openCart } =
    useContext(Store);
  const [isCart, SetIsCart] = useState(false);
  useEffect(() => {
    if (cartProduct.some((e) => e.ProductId === id)) {
      SetIsCart(true);
    } else {
      SetIsCart(false);
    }
  }, [cartProduct, openCart]);
  const handelAddtoCart = () => {
    if (isCart) {
      Apiservices.delete(`/destroyoneproductcart/${id}`).then((res) =>
        toast.success(res.data.msg)
      );
      SetCountCart(countCart - 1);
    } else {
      Apiservices.post('/addproducttocart', { ProductId: id }).then((res) =>
        toast.success(res.data.msg)
      );
      SetCountCart(countCart + 1);
    }
    SetIsCart(!isCart);
  };
  return (
    <Box className='product' width='300px' position='relative'>
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            sx={{ objectFit: 'contain' }}
            component='img'
            height='200'
            image={productImg}
            alt='green iguana'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              fontWeight='light'
              component='div'
              textTransform='uppercase'
              fontFamily='system-ui'
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
            {user && user.id !== item.UserId && !isCart && (
              <ShoppingCartOutlinedIcon
                onClick={handelAddtoCart}
                sx={{
                  color: '#0000005e',
                  position: 'absolute',
                  top: 10,
                  right: '10px',
                }}
              />
            )}
            {user && user.id !== item.UserId && isCart && (
              <ShoppingCartIcon
                onClick={handelAddtoCart}
                sx={{
                  color: '#000000c7',
                  position: 'absolute',
                  top: 10,
                  right: '10px',
                }}
              />
            )}

            {user && user.id === item.UserId && (
              <EditAndDeleteBtn
                item={newItem}
                setNewItem={setNewItem}
                setUserProducts={setUserProducts}
                userProducts={userProducts}
                id={id}
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
