import * as React from 'react';
import Button from '@mui/material/Button';
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
import { Stack ,Box} from '@mui/system';
import Apiservices from '../../services/ApiServices';
export default function AddNewProduct({userProducts,setUserProducts}) {
  const [open, setOpen] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState({
    id: 0,
name: "",
price: '',
count: '',
category: ""
  });
  const [imgFile,setImgFile]=useState('')
  const[loading,setLoading]=useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategory = (event) => {
    setNewProduct(
    {...newProduct,category: event.target.value} 
    );
  };
const handelNewProduct=(e)=>{
  e.preventDefault();
  const newData = new FormData();
  newData.append('file', imgFile);
  newData.append('data', JSON.stringify(newProduct));
  setLoading(true)
  Apiservices({
    method: 'post',
    url: '/addnewproduct',
    data: newData,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then((isExist) => {
    setLoading(false)
    if (isExist.data.data) {
      setUserProducts([isExist.data.data,...userProducts])
      setOpen(false)
    setNewProduct({
        id: 0,
    name: "",
    price: '',
    count: '',
    category: ""
      })
      setImgFile('')
    }
  })
  ;}


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add New Product      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
          <form onSubmit={handelNewProduct}>
            <Stack width='80%' gap='15px' margin='30px auto'>
             <TextField
          required
          id="filled-required"
          label="Name product"
          value={newProduct.name}
          onChange={e=>setNewProduct(    {...newProduct,name: e.target.value} 
            )}
          InputLabelProps={{
            shrink: true,
          }}
        />
             <TextField
             required
          id="filled-number"
          label="Count"
          type="number"
          value={newProduct.count}
          onChange={e=>setNewProduct(    {...newProduct,count: e.target.value} 
            )}
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
             required
          id="filled-number"
          label="Price $"
          type="number"
          value={newProduct.price}
          onChange={e=>setNewProduct({...newProduct,price: e.target.value} 
            )}
          InputLabelProps={{
            shrink: true,
          }}
        />
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">Category</InputLabel>
              <Select
                autoFocus
                value={newProduct.category}
                onChange={handleCategory}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="xs">Man</MenuItem>
                <MenuItem value="sm">Woman</MenuItem>
                <MenuItem value="md">Chaild</MenuItem>
              </Select>
            </FormControl>
            <UploadImgBtn setImgFile={setImgFile}/>
            <SignInBtn content={'Add New Product'}/>
            </Stack>
          </form>
          {loading &&<Box
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
        </Box>}
          
      </Dialog>
    </React.Fragment>
  );
}