import React from "react";
import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}

export const buttonsTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    shape: {
        borderRadius: 1,
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        warning: {
            main: '#ffa726',
            darker: '#f57c00',
        },
        secondary: {
            main: '#2B2D2F',
            darker: '#000000',
        },

        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});