import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useContext} from 'react'
import { Store } from '../../Storage';
import JwtService from '../../../services/TokenServices';
function LogOutBtn() {
  const {setUser}=useContext(Store)
  return (
    <IconButton onClick={()=>{
      setUser(null)
      JwtService.destroyToken()
    }}>
      <CloseIcon/>
    </IconButton>
  )
}

export default LogOutBtn
