import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import ContainerSigns from './ContainerSigns';
import { Box } from '@mui/material';
import ShowSginBtn from './ShowSginBtn';
import { Stack } from '@mui/system';
import { useContext } from 'react';
import { Store } from '../../Storage';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function SignForms() {
  const { open, setOpen } = useContext(Store);
  const [value, setValue] = React.useState(0);

  const handleClickOpen = (stateSign) => {
    setOpen(true);
    setValue(stateSign);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Stack direction='row' gap='10px'>
        <ShowSginBtn
          stateSign={1}
          contain={'Sign In'}
          handleClickOpen={handleClickOpen}
        />
        <ShowSginBtn
          stateSign={0}
          contain={'Sign Up'}
          handleClickOpen={handleClickOpen}
        />
      </Stack>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <ContainerSigns setValue={setValue} value={value} />
      </Dialog>
    </Box>
  );
}
