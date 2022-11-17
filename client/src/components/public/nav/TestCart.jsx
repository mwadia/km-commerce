import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, Chip, CardActionArea, IconButton, Avatar } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../../Storage';
import  Axios  from 'axios';

export default function TestCart({ item }) {
  const { id, name, price, count, productImg } = item.Product;
  const {setTotal,total,cartProduct,
    setCartProduct}=useContext(Store)
  const [countCart,setCountCart]=useState(item.count)
  const handelAdd=()=>{
    setCountCart(countCart+1)
    Axios.put(`/putcountproduct/${item.id}`,{
      newCount:countCart+1
    })
    setTotal(total+price)
  }
  const handelRemove=()=>{
    setCountCart(countCart-1)
    setTotal(total-price)
    Axios.put(`/putcountproduct/${item.id}`,{
      newCount:countCart-1
    })

  }
  const removeFromCart=()=>{
    Axios.delete(`/destroyoneproductcart/${id}`)
    setCartProduct(cartProduct.filter(e=>e.Product.id!==id))
    setTotal(total-(price*countCart))

  }
  return (
   <Stack direction={{sm:'row',xs:"column"}} alignItems={{sm:'center'}} gap='40px'>
    <Avatar sx={{borderRadius:'8px',width:{xs:'100%',sm:'170px'},height:'170px'}} src={productImg} alt="" />
    <Stack direction='column' alignItems='center' gap='50px'>
    <Typography >{name}</Typography>
      <Stack direction='row' alignItems='center' gap='20px'>
      <Chip label={`Price:$${price}`} />
      <IconButton disabled={countCart<1 && true} onClick={handelRemove} sx={{background:'#f9e498',padding:'2px',borderRadius:'8px'}}>
      <RemoveIcon/>
      </IconButton>
      <Typography >{countCart}</Typography>
      <IconButton disabled={countCart===count && true} onClick={handelAdd} sx={{background:'#f9e498',padding:'2px',borderRadius:'8px'}}>
      <AddIcon/>
      </IconButton>
      </Stack>
      <Button onClick={removeFromCart}>
        remove
      </Button>
    </Stack>
   </Stack>
  );
}
