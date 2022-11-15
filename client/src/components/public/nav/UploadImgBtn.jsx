import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

function UploadImgBtn() {
  return (
    <Stack width='100%'>
      <label
        style={{
          textAlign: 'center',
          marginBottom: '10px',
          width: '100%',
          background: 'red',
          display: 'block',
        }}
        htmlFor='updateImg'
      >
        Upload image
      </label>

      <input id='updateImg' style={{ display: 'none' }} type='file' name='' />
    </Stack>
  );
}

export default UploadImgBtn;
