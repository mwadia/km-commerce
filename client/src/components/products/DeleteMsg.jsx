import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Axios from 'axios'
export default function DeleteMsg({id,setUserProducts,userProducts}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
const handelDelete=()=>{
  Axios.delete(`/destroyproduct/${id}`)
  setUserProducts(userProducts.filter(e=>e.id!==id))
  setOpen(false);

}
  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Product"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handelDelete}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}