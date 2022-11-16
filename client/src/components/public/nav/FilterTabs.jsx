import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Store } from '../../Storage';

export default function FilterTabs() {
  const [value, setValue] = React.useState(0);
  const { filter, SetFilter } = React.useContext(Store);
  const catogory = ['', 'Man', 'Woman', 'Chaild'];
  const handleChange = (event, newValue) => {
    setValue(newValue);
    SetFilter({ ...filter, c: catogory[newValue] });
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label='disabled tabs example'
    >
      <Tab label='All' />
      <Tab label='Man' />
      <Tab label='Woman' />
      <Tab label='Chaild' />
    </Tabs>
  );
}
