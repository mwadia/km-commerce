import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({signUp,setSignUp}) {

  const handleChange = (event) => {
    setSignUp({...signUp,role:event.target.value});
  };

  return (
    <div>
    
    <FormControl sx={{  minWidth:'100%' }}>
        <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={signUp.role}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'partAgent'}>Part Agent</MenuItem>
          <MenuItem value={'servicesAgent'}>Services Agent</MenuItem>
          <MenuItem value={'tiresAgent'}>Tires Agent</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}