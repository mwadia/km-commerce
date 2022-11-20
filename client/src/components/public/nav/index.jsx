import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AvatarNav from './AvatarNav';
import SignForms from './SignForms';
import { Store } from '../../Storage';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartPopUp from './CartPopUp';
import io from 'socket.io-client';
import Notifications from './Notifications';
import Apiservices from '../../../services/ApiServices';
import HomeIcon from '@mui/icons-material/Home';
import MenuItems from './MenuItems';
import JwtService from '../../../services/TokenServices';
const socket = io.connect(process.env.REACT_APP_BASE_URL);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { user, setOpenCart } = React.useContext(Store);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { filter, SetFilter, countCart, setUser } = React.useContext(Store);
  const [MyNotifications, setNMyNotifications] = useState([]);
  const [MyNotificationsNum, setNMyNotificationsNum] = useState(0);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    Apiservices.get('/getnotifications').then((res) =>
      setNMyNotificationsNum(res.data.data.length)
    );
  }, []);
  socket.on('notification', function (msg) {
    if (user) {
      let noti = msg.data.filter((e) => e === user.id);
      setNMyNotificationsNum(MyNotificationsNum + noti.length);
    }
  });
  const handelSarech = (e) => {
    SetFilter({ ...filter, q: e.target.value });
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user && (
        <Stack>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/user/${user.id}`}
          >
            <Button>
              <MenuItem sx={{ fontSize: '15px' }} onClick={handleMenuClose}>
                profile
              </MenuItem>
            </Button>
          </Link>
          <Button
            onClick={() => {
              setUser(null);
              JwtService.destroyToken();
            }}
          >
            LOG OUT
          </Button>
        </Stack>
      )}
    </Menu>
  );

  return (
    <Box
      position='relative'
      sx={{ background: 'black', width: '100%' }}
      zIndex='2'
    >
      <AppBar
        position='static'
        sx={{
          background: 'black',
          boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
        }}
      >
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Box
              sx={{ maxWidth: '100px', marginRight: { xs: '15px', sm: '0' } }}
            >
              <img src='http://res.cloudinary.com/dhqwirard/image/upload/v1668944074/iyesrikd8btlew4elxnh.png' style={{ width: '100%' }} />
            </Box>
          </Link>

          <Search sx={{ width: { sm: 'auto', xs: '70%' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              value={filter.q}
              onChange={handelSarech}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {user && (
            <Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex', alignItems: 'center' },
                }}
              >
                <CartPopUp countCart={countCart} />

                <Notifications
                  setNMyNotifications={setNMyNotifications}
                  setMyNotificationsNum={setNMyNotificationsNum}
                  MyNotificationsNum={MyNotificationsNum}
                  MyNotifications={MyNotifications}
                />
                <Link to='home'>
                  <IconButton>
                    <HomeIcon sx={{ color: '#ffff' }} />
                  </IconButton>
                </Link>

                <IconButton
                  size='large'
                  edge='end'
                  aria-label='account of current user'
                  aria-controls={menuId}
                  aria-haspopup='true'
                  onClick={handleProfileMenuOpen}
                  color='inherit'
                >
                  <AvatarNav user={user} />
                </IconButton>
              </Box>
              <Box
                className='navbarMobile'
                sx={{ display: { xs: 'flex', md: 'none' } }}
              >
                <MenuItems
                  setNMyNotifications={setNMyNotifications}
                  setMyNotificationsNum={setNMyNotificationsNum}
                  countCart={countCart}
                  MyNotificationsNum={MyNotificationsNum}
                  id={user.id}
                  MyNotifications={MyNotifications}
                />
              </Box>
            </Box>
          )}
          {!user && <SignForms />}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
