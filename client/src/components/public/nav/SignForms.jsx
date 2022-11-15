import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import ContainerSigns from './ContainerSigns';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function SignForms() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant='outlined' onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <ContainerSigns />
      </Dialog>
    </Box>
  );
}
