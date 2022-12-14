import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeButton from './HomeButton';
import Notifications from './Notifications';
import CartPopUp from './CartPopUp';
import ProfileBtn from './ProfileBtn';
import LogOutBtn from './LogOutBtn';
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  color: 'red',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: 'red',
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export default function MenuItems({
  MyNotificationsNum,
  setNMyNotifications,
  setNMyNotificationsNum,
  MyNotifications,
  countCart,
  id,
}) {
  const actions = [
    { icon: <HomeButton />, name: 'Home' },
    { icon: <ProfileBtn id={id} />, name: 'Profile' },
    {
      icon: (
        <Notifications
          setNMyNotifications={setNMyNotifications}
          setMyNotificationsNum={setNMyNotificationsNum}
          MyNotificationsNum={MyNotificationsNum}
          MyNotifications={MyNotifications}
        />
      ),
      name: 'Notifications',
    },
    { icon: <CartPopUp countCart={countCart} />, name: 'Cart' },
    { icon: <LogOutBtn />, name: 'log out' },
  ];

  return (
    <Box
      className='owner'
      sx={{
        transform: 'translateZ(0px)',
        position: 'absolute',
        top: '-7px',
        right: '80px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '0',
          mt: 0,
          top: '0',
          right: '0',
        }}
      >
        <StyledSpeedDial
          ariaLabel='SpeedDial playground example'
          hidden={false}
          icon={<MoreVertIcon  />}
          direction={'down'}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
