import { createMuiTheme } from '@material-ui/core/styles';

const typography = {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontFamilySecondary: '"Source Sans Pro", sans-serif',
}

const typographyBase = {
    fontFamily: typography.fontFamily,
    
};
  
const typographyHeader = {
...typographyBase,
fontFamily: typography.fontFamilySecondary, // Use a dedicated font for the header
};
  
const typographyBody = {
...typographyBase,
fontFamily: typography.fontFamily,
};

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
          //main: '#61afef',
          main: '#62973b'
        },
        secondary: {
          main: '#98c379',
          alternative: '#62973b'
        },
        error: {
          main: '#e06c75',
        },
        info: {
          main: '#61afef',
        },
        success: {
          main: '#98c379',
          dark: '#98c379',
        },
        text: {
            secondary: "#eee",
            primary: "#eee"
        },
        typography: {
            ...typographyBase,
            h1: {
                ...typographyHeader
            },
            body1: {
                ...typographyBody
            }
        }

    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": typography,
                fontWeight: 700
            }
        },
        MuiTypography: {
            root: {
                fontFamily: '"Source Sans Pro" !important',
                fontWeight: '700 !important'
            }
        },
        MuiMenuItem: {
            root: {
                fontFamily: '"Source Sans Pro" !important',
                fontWeight: 700
            }
        },
        MuiOutlinedInput: {
            root: {
                backgroundColor: "#303030"
            }
        },
        RaBulkActionsToolbar: {
            toolbar: {
                backgroundColor: "#424242",
                color: "#eee"
            }
        }
    }
})