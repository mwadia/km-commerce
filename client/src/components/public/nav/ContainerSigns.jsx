import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import TabSigns from './TabSigns';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

function ContainerSigns() {
  const [loadingSign, setLoadingSign] = useState(false);
  return (
    <Container maxWidth='sm' sx={{ position: 'relative' }}>
      {loadingSign && (
        <Box
          position='absolute'
          top='0'
          right='0'
          height='100%'
          width='100%'
          zIndex={10}
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ background: '#000000a6' }}
        >
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      )}
      <Stack>
        <TabSigns setLoading={setLoadingSign} />
      </Stack>
    </Container>
  );
}

export default ContainerSigns;
