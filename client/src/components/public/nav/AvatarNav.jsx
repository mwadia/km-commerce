import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';

function AvatarNav({user}) {
  return (
    <Stack>
      <Avatar alt={user.name} src={user.userImg} />
    </Stack>
  );
}

export default AvatarNav;
