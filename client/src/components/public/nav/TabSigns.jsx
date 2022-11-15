import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function TabSigns() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          centered
          value={value}
          aria-label='basic tabs example'
        >
          <Tab label='Sign up' onClick={()=>{
                setValue(0);

          }}  />
          <Tab label='sign in'  onClick={()=>{
                setValue(1);

          }}  />
        </Tabs>
      </Box>
      {value===0 &&   <Box >
      <SignUp />
      </Box>}
      {value===1 &&   <Box >
      <SignIn />
      </Box>}
     
    </Box>
  );
}
