import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#b97d3b',
  backgroundColor: '#f0e9dd',
  '&:hover': {
    backgroundColor: '#e2dbd0',
  },
}));

export default function GetStartButton() {
  return (
    <Stack spacing={2} direction='row' marginTop={{ xs: 0, sm: 30 }}>
      <ColorButton
        variant='contained'
        sx={{ width: { xs: '150px', sm: '200px' } }}
      >
        Get Start
      </ColorButton>
    </Stack>
  );
}
