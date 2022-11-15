import { Stack } from '@mui/material';
import React from 'react';
import GittingStarted from './GittingStarted';
import Services from './Services';

function index() {
  return (
    <Stack justifyContent='space-between' gap='100px'>
      <GittingStarted />
      <Services />
    </Stack>
  );
}

export default index;
