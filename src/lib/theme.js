import { createTheme, adaptV4Theme } from '@mui/material/styles';

const defaultTheme = createTheme();

let theme = createTheme(
  adaptV4Theme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 320,
        md: 600,
        lg: 1024,
        xl: 1330,
        xxl: 1920,
      },
    },
    mixins: {
      toolbar: {
        '@media (min-width:0)': {
          minHeight: defaultTheme.typography.pxToRem(56),
        },
      },
    },
    palette: {
      primary: {
        light: '#f6685e',
        main: '#f44336',
        dark: '#c3352b',
        A000: '#FFF5F5',
        contrastText: '#fff',
      },
      secondary: {
        light: '#5d5d5d',
        main: '#3a3a3a',
        dark: '#303030',
      },
      error: {
        light: '#f6685e',
        main: '#f44336',
        dark: '#c3352b',
        A000: '#FFF5F5',
      },
      warning: {
        light: '#f5e67e',
        main: '#f3e05e',
        dark: '#c2b34b',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
      },
      grey: {
        A000: '#F9F9F9',
        50: '#EFEFEF',
        100: '#DADADA',
        200: '#AEAEAE',
        300: '#797979',
        400: '#5D5D5D',
        500: '#3A3A3A',
        600: '#303030',
        700: '#242424',
        800: '#1D1D1D',
        900: '#111111',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87);',
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontFamilySecondary: "'Roboto Slab', serif",
      body1: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.625rem',
      },
      body2: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '1.4375rem',
      },
    },
  }),
);

export default createTheme(theme);
