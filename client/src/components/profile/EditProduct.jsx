import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import UploadImgBtn from '../public/nav/UploadImgBtn';
import { useState } from 'react';
import SignInBtn from '../public/nav/SignInBtn';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack, Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Apiservices from '../../services/ApiServices';
import { toast } from 'react-toastify';
import ProductValid from '../../validation/Product';

export default function EditProduct({ item, setNewItem }) {
  const { id } = item;

  const [open, setOpen] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState(item);
  const [imgFile, setImgFile] = useState('');
  const [loading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategory = (event) => {
    setNewProduct({ ...newProduct, category: event.target.value });
  };
  const handelNewProduct = async (e) => {
    try {
      e.preventDefault();
      const validated = await ProductValid.validate(newProduct);

      const newData = new FormData();
      if (imgFile) {
        newData.append('file', imgFile);
      }
      newData.append('data', JSON.stringify(validated));
      setLoading(true);
      Apiservices({
        method: 'put',
        url: `/editproduct/${id}`,
        data: newData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((isExist) => {
        setLoading(false);
        if (isExist.data.data) {
          setNewItem(isExist.data.data);
          setOpen(false);
          setImgFile('');
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <React.Fragment>
      <IconButton variant='outlined' onClick={handleClickOpen}>
        <EditIcon sx={{ color: 'black' }} />
      </IconButton>
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={handelNewProduct}>
          <Stack width='80%' gap='20px' margin='30px auto'>
            <TextField
              required
              id='filled-required'
              label='Name product'
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id='filled-number'
              label='Count'
              type='number'
              value={newProduct.count}
              onChange={(e) =>
                setNewProduct({ ...newProduct, count: e.target.value })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id='filled-number'
              label='Price $'
              type='number'
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor='max-width'>Category</InputLabel>
              <Select
                autoFocus
                value={newProduct.category}
                onChange={handleCategory}
                label='maxWidth'
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value='xs'>Man</MenuItem>
                <MenuItem value='sm'>Woman</MenuItem>
                <MenuItem value='md'>Chaild</MenuItem>
              </Select>
            </FormControl>
            <UploadImgBtn setImgFile={setImgFile} />
            <SignInBtn content={'update'} />
          </Stack>
        </form>
        {loading && (
          <Box
            position='absolute'
            top='0'
            right='0'
            height='100%'
            width='100%'
            zIndex={10}
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{ background: '#000000a6' }}
          >
            <CircularProgress sx={{ color: '#fff' }} />
          </Box>
        )}
      </Dialog>
    </React.Fragment>
  );
}
