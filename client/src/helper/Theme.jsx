import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      light: '#576238',
      main: '#2d3024',
      dark: '#006c6d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fcf9f4',
      main: '#576238',
      dark: '#9e0022',
      contrastText: '#fff',
    },
    success: {
      light: '#9e0022',
      main: '#a7a6a6',
      dark: '#9e0022',
      contrastText: '#9e0022',
    },
  },
});
export default Theme;
