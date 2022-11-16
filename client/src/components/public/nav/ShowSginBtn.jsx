import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#2d3024',
  backgroundColor: '#f0e9dd',
  '&:hover': {
    backgroundColor: '#fcf9f4',
  },
}));

export default function ShowSginBtn({ handleClickOpen, contain, stateSign }) {
  return (
    <Stack direction='row'>
      <ColorButton
        onClick={() => handleClickOpen(stateSign)}
        variant='contained'
      >
        {contain}
      </ColorButton>
    </Stack>
  );
}
