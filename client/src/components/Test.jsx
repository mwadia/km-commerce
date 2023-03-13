import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import SelectLabels from './SelectTest'
import Demo from './Location'

function Test() {
  const [showPassword, setShowPassword] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [location, setLocation] = useState({})
  const [signUp, setSignUp] = useState({
    name: '',
    password: '',
    phoneNumber: '',
    email: '',
    address: '',
    logo: '',
    bannerImage: '',
    profileImage: '',
    role: '',
    location: location,
    street: '',
    block: '',
    area: '',
  })
  const hadelLocation = () => {
    setIsActive(true)
  }
  const handleClickShowPassword = () => {
    setShowPassword(true)
  }
  const handleMouseDownPassword = () => {
    setShowPassword(false)
  }
  const handelSignUp = (e) => {
    e.preventDefault()
    console.log(signUp)
  }
  return (
    <Container maxWidth={'sm'}>
      <form onSubmit={handelSignUp}>
        <Stack direction="column" gap={'10px'}>
          <Typography sx={{ textAlign: 'center' }} variant="h3" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            id="outlined-basic"
            value={signUp.name}
            onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
            label="Name"
            variant="outlined"
          />
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel
              sx={{ width: '100%' }}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              value={signUp.password}
              onChange={(e) =>
                setSignUp({ ...signUp, password: e.target.value })
              }
              sx={{ width: '100%' }}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <TextField
            id="outlined-basic"
            onChange={(e) =>
              setSignUp({ ...signUp, phoneNumber: e.target.value })
            }
            value={signUp.phoneNumber}
            label="Phone Number"
            type="number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
            value={signUp.email}
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            onChange={(e) => setSignUp({ ...signUp, address: e.target.value })}
            value={signUp.address}
            label="Address"
            variant="outlined"
          />
          <Box className="input-img">
            <input
              type="file"
              name=""
              onChange={(e) =>
                setSignUp({ ...signUp, logo: e.target.files[0] })
              }
              id="logo"
            />
            <label htmlFor="logo">logo</label>
          </Box>
          <Box className="input-img">
            <input
              type="file"
              name=""
              onChange={(e) =>
                setSignUp({ ...signUp, bannerImage: e.target.files[0] })
              }
              id="bannerImage"
            />
            <label htmlFor="bannerImage">Banner Image</label>
          </Box>
          <Box className="input-img">
            <input
              type="file"
              onChange={(e) =>
                setSignUp({ ...signUp, profileImage: e.target.files[0] })
              }
              name=""
              id="profileImage"
            />
            <label htmlFor="profileImage">Profile Image</label>
          </Box>
          <SelectLabels signUp={signUp} setSignUp={setSignUp} />
          <Box
            sx={{
              border: '1px solid black',
              textAlign: 'center',
              padding: '15px',
            }}
            onClick={hadelLocation}
          >
            Add Location
          </Box>

          {isActive && (
            <Demo
              signUp={signUp}
              location={location}
              setSignUp={setSignUp}
              setLocation={setLocation}
            />
          )}
          <TextField
            onChange={(e) => setSignUp({ ...signUp, street: e.target.value })}
            id="outlined-basic"
            value={signUp.street}
            label="Street"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setSignUp({ ...signUp, block: e.target.value })}
            id="outlined-basic"
            value={signUp.block}
            label="Block"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            value={signUp.area}
            onChange={(e) => setSignUp({ ...signUp, area: e.target.value })}
            label="Area"
            variant="outlined"
          />
          <Button
            type="submit"
            sx={{
              border: '1px solid black',
              textAlign: 'center',
              padding: '15px',
            }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default Test
