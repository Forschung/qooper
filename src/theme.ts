// Material.ui components
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#000000'
        },
        background: {
            default: '#ffffff'
        }
    },
    props: {
        MuiTextField: {
            variant: 'outlined'
        },
        MuiButton: {
            color: 'primary',
            variant: 'contained',
            disableElevation: true
        },
        MuiButtonBase: {
            disableRipple: true
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontSize: '2rem',
            fontFamily: 'Montserrat-Bold',
            textTransform: 'uppercase'
        },
        h2: {
            fontSize: '1.75rem',
            fontFamily: 'Montserrat-Bold'
        },
        h4: {
            fontSize: '1.25rem',
            fontFamily: 'Montserrat-Bold',
            textTransform: 'uppercase'
        },
        h5: {
            fontSize: '.875rem',
            fontFamily: 'Montserrat-Bold',
            textTransform: 'uppercase'
        },
        h6: {
            fontFamily: 'Montserrat-Bold'
        }
    },
    overrides: {
        MuiFormControl: {},
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: '#000',
                borderRadius: 0
            },
            input: {
                padding: '18.5px 14px !important'
            }
        },
        MuiButton: {
            root: {
                padding: 7,
                borderRadius: 0
            },
            label: {
                fontSize: '.75rem'
            }
        },
        MuiInputLabel: {
            outlined: {
                background: ' #fff'
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1440,
            xl: 1920
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;
