import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
export default function HomeButton() {
  return (
    <Link to='home'>
      <IconButton>
        <HomeIcon sx={{ color: '#ffff' }} />
      </IconButton>
    </Link>
  );
}
