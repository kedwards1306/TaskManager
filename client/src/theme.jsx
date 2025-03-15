import { createTheme } from "@mui/material/styles";

export default createTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        common: { black: '#000', white: '#fff' },
        background: { paper: '#fff', default: '#fafafa' },
        primary: {
            light: '#63a4ff',
            main: '#1976df',
            dark: '#004ba0',
            contrastText: '#fff',

        },
        secondary: {
            light: '#ffd740',
            main: '#ffab00',
            dark: '#c67c00',
            contrastText: '#fff',

        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',

        },

    },

});
