import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#22271d',
  width: '100%',
  boxShadow: 'none',
  marginTop: '10px',
  backgroundColor: '#f0eade',
  '&:hover': {
    backgroundColor: '#fff9ec',
    boxShadow: 'none',
  },
}));

export default function SignInBtn({ content }) {
  return (
    <Stack width='100%' direction='row'>
      <ColorButton width='' type='submit' variant='contained'>
        {content}
      </ColorButton>
    </Stack>
  );
}
