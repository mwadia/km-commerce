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
import UploadImgBtn from './UploadImgBtn';
function SignUp() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
    <form>
      <Stack alignItems='center'>
        <TextField
          sx={{ width: '95%' }}
          id='input-with-icon-textfield'
          label='Name'
          variant='standard'
        />
        <TextField
          sx={{ width: '95%' }}
          id='input-with-icon-textfield'
          label='Email'
          variant='standard'
        />
        <FormControl sx={{ m: 1, width: '97%' }} variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
            value={values.password}
            onChange={handleChange('password')}
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
        <UploadImgBtn />
        <SignInBtn content='sign up' />
      </Stack>
    </form>
  );
}

export default SignUp;
