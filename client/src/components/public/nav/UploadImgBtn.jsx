import { Stack } from '@mui/system';
import React from 'react';

function UploadImgBtn({setImgFile}) {
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

      <input id='updateImg' style={{ display: 'none' }} type='file' name='' onChange={e=>setImgFile(e.target.files[0])} />
    </Stack>
  );
}

export default UploadImgBtn;
