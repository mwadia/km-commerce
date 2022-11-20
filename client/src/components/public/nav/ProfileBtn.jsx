import React from 'react'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function ProfileBtn({id}) {
  return (
    <Link to={`user/${id}`}>
      <IconButton>
      <AccountCircleIcon/>
      </IconButton>
    </Link>
  )
}
