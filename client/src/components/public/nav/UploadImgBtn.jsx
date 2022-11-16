import { Stack } from '@mui/system';
import React from 'react';

function UploadImgBtn({ setImgFile }) {
  return (
    <Stack width='100%'>
      <label
        style={{
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          textAlign: 'center',
          marginBottom: '10px',
          width: '100%',
          display: 'block',
          borderBottom: '1px solid rgb(163 163 163 / 99%)',
          color: 'rgba(66, 65, 65, 0.58)',
          padding: '7px',
          marginTop: '7px',
          textAlign: 'start',
        }}
        htmlFor='updateImg'
      >
        Upload image
      </label>

      <input
        id='updateImg'
        style={{ display: 'none' }}
        type='file'
        name=''
        onChange={(e) => setImgFile(e.target.files[0])}
      />
    </Stack>
  );
}

export default UploadImgBtn;
