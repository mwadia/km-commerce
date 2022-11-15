import { Container, Stack } from '@mui/material';
import React from 'react';
import TabSigns from './TabSigns';

function ContainerSigns() {
  return (
    <Container maxWidth='sm'>
      <Stack>
        <TabSigns />
      </Stack>
    </Container>
  );
}

export default ContainerSigns;
