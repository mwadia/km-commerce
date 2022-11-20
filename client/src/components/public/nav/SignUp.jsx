import { Box, IconButton, Stack } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import SignInBtn from './SignInBtn';
import UploadImgBtn from './UploadImgBtn';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import SignUpValid from '../../../validation/SignUp';
import { Store } from '../../Storage';
import Apiservices from '../../../services/ApiServices';
import JwtService from '../../../services/TokenServices';
function SignUp({ setLoading }) {
  const { setUser, setOpen } = useContext(Store);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
    userImg: '',
  });
  const [imgFile, setImgFile] = useState('');

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handelSignUp = async(e) => {
    try{
      e.preventDefault();
      if(imgFile){
      const validated = await SignUpValid.validate(signUp);
      const newData = new FormData();
      newData.append('file', imgFile);
      newData.append('data', JSON.stringify(validated));
      setLoading(true);
      Apiservices({
        method: 'post',
        url: '/signup',
        data: newData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((isExist) => {
        JwtService.setToken(isExist.data.data.token)
        setLoading(false);
        if (isExist.data.data) {
          setUser(isExist.data.data);
          toast.success(isExist.data.msg);
          setOpen(false);
        } else {
          toast.error(isExist.data.msg);
        }
      });  }else{
        toast.error('please add your image');

      }
    }catch (err) {
      toast.error((err).message);
    }
    
  };

  return (
    <form onSubmit={handelSignUp}>
      <Stack alignItems='center'>
        <TextField
          sx={{ width: '95%' }}
          id='input-with-icon-textfield'
          label='Name'
          variant='standard'
          value={signUp.name}
          onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
        />
        <TextField
          sx={{ width: '95%' }}
          id='input-with-icon-textfield'
          label='Email'
          variant='standard'
          value={signUp.email}
          onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
        />
        <FormControl sx={{ m: 1, width: '97%' }} variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            value={signUp.password}
            onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '97%' }} variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Confirm Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={signUp.confirmPassword}
          onChange={(e) => setSignUp({ ...signUp, confirmPassword: e.target.value })}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <UploadImgBtn setImgFile={setImgFile} />
        <SignInBtn content='sign up' />
      </Stack>
    </form>
  );
}

export default SignUp;
