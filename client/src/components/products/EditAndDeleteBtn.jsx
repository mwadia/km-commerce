import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DeleteMsg from './DeleteMsg';
import EditProduct from '../profile/EditProduct';
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

export default function EditAndDeleteBtn({
  item,
  setNewItem,
  setUserProducts,
  userProducts,
}) {
  const { id } = item;
  const actions = [
    {
      icon: (
        <EditProduct
          setNewItem={setNewItem}
          item={item}
          sx={{ color: 'black' }}
        />
      ),
      name: 'edit',
    },
    {
      icon: (
        <DeleteMsg
          setUserProducts={setUserProducts}
          userProducts={userProducts}
          id={id}
        />
      ),
      name: 'Delete',
    },
  ];

  return (
    <Box
      className='owner'
      sx={{ transform: 'translateZ(0px)', position: 'absolute', top: '0' }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '0',
          mt: 0,
          top: '0',
          right: '-206px',
        }}
      >
        <StyledSpeedDial
          ariaLabel='SpeedDial playground example'
          hidden={false}
          icon={<MoreVertIcon />}
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
