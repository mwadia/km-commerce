import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from './SignIn';
import SignUp from './SignUp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabSigns() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

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
