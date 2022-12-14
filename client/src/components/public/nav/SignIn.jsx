import { IconButton, Stack } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import SignInBtn from './SignInBtn';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

import { Store } from '../../Storage';
import Apiservices from '../../../services/ApiServices';
import JwtService from '../../../services/TokenServices';
import SignInValid from '../../../validation/SignIn';
function SignIn({ setLoading }) {
  const { setUser, setOpen } = useContext(Store);
  const [signin, setSignIn] = useState({
    email: '',
    password: '',
  });
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handelSignIn =async (e) => {
    try{
      e.preventDefault();
      const validated = await SignInValid.validate(signin);

      setLoading(true);
      Apiservices.post('/signin', validated).then((res) => {
        setLoading(false);
        if (res.data.data) {
          JwtService.setToken(res.data.data.token)
          setUser(res.data.data);
          toast.success(res.data.msg);
          setOpen(false);
        } else {
          toast.error(res.data.msg);
        }
      });
    }catch (err) {
      toast.error((err).message);
    }
    
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handelSignIn}>
      <Stack alignItems='center'>
        <TextField
          sx={{ width: '95%' }}
          id='input-with-icon-textfield'
          label='Email'
          variant='standard'
          value={signin.email}
          onChange={(e) => setSignIn({ ...signin, email: e.target.value })}
        />
        <FormControl sx={{ m: 1, width: '97%' }} variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={signin.password}
            onChange={(e) => setSignIn({ ...signin, password: e.target.value })}
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
        <SignInBtn content='sign in' />
      </Stack>
    </form>
  );
}

export default SignIn;
