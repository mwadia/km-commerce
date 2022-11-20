import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Apiservices from '../../../services/ApiServices';
import { Store } from '../../Storage';
export default function Notifications({
  MyNotifications,
  MyNotificationsNum,
  setNMyNotifications,
  setMyNotificationsNum,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { token } = React.useContext(Store);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    Apiservices.get('/getnotifications', { token: token }).then((res) =>
      setNMyNotifications(res.data.data)
    );
    Apiservices.delete('/destroyallaotifications', { token: token });
    setMyNotificationsNum(0);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size='small'
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Badge badgeContent={MyNotificationsNum} color='error'>
              <NotificationsIcon sx={{ color: '#ffff' }} />{' '}
            </Badge>{' '}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {MyNotifications &&
          MyNotifications.map((e, i) => (
            <>
              <MenuItem sx={{ fontSize: '15px', color: '#424040' }} key={i}>
                {e.massage}
              </MenuItem>
              <Divider variant='middle' />
            </>
          ))}
      </Menu>
    </React.Fragment>
  );
}
