import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
function index() {
  return (
    <Stack
      padding='20px 0'
      sx={{ background: '#f0e9dd' }}
      flexWrap='wrap-reverse'
      direction='row'
      justifyContent='space-around'
      alignItems='center'
    >
      <Stack>
        <a
          style={{ textDecoration: 'none', color: '#3d4526' }}
          href='https://github.com/mwadia'
        >
          <Stack direction='row' alignItems='start' gap='5px'>
            <GitHubIcon color='#3d4526' sx={{ fontSize: '18px' }} />
            <Box>
              <Typography variant='caption' gutterBottom>
                Mohammed AlWadia
              </Typography>
            </Box>
          </Stack>
        </a>
        <Stack direction='row' alignItems='start' gap='5px'>
          <EmailIcon
            color='#3d4526'
            sx={{ fontSize: '18px', color: '#3d4526' }}
          />
          <Box>
            <Typography color='#3d4526' variant='caption' gutterBottom>
              mohammadalwadia@gmail.com
            </Typography>
          </Box>
        </Stack>

        <a
          style={{ textDecoration: 'none', color: '#3d4526' }}
          href='https://github.com/dev-mohmmed-alshorafa'
        >
          <Stack direction='row' alignItems='start' gap='5px'>
            <GitHubIcon sx={{ fontSize: '18px', color: '#3d4526' }} />
            <Box>
              <Typography variant='caption' gutterBottom>
                Mohammed Alshorafa
              </Typography>
            </Box>
          </Stack>
        </a>
        <Stack direction='row' alignItems='start' gap='5px'>
          <EmailIcon sx={{ fontSize: '18px', color: '#3d4526' }} />
          <Typography variant='caption' color='#3d4526' gutterBottom>
            mohmmedalshorafa1996@gmail.com
          </Typography>
        </Stack>
      </Stack>
      <Stack gap='2.5px' direction='row' alignItems='center'>
        <CopyrightIcon sx={{ fontSize: '15px', color: '#3d4526' }} />
        <Box>
          <Typography variant='caption' color='#3d4526' gutterBottom>
            Mohmmed AlWadia & Mohmmed AlShorafa
          </Typography>
        </Box>
      </Stack> 
       <img style={{ maxWidth: '120px' }} src='./saas/logo.png' />
    </Stack>
  );
}

export default index;
