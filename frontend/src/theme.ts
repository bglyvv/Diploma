import { green, red } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import { PaletteType } from 'context/settings/reducer';
import { Theme as ThemeEnum } from 'enum';

const breakpoints = createBreakpoints({});

const theme = (mode: PaletteType): Theme => {
    const isDarkMode = mode === ThemeEnum.Dark;

    return createTheme({
        dark: isDarkMode,
        spacing: 8,
        breakpoints,
        shape: { borderRadius: 10 },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    html: {
                        fontSize: 16,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        textTransform: 'none',
                        padding: '10px',
                        fontWeight: 600,
                        fontSize: '1rem',
                        lineHeight: '20px',
                    },
                    containedSecondary: {
                        color: '#7A8892',
                        backgroundColor: '#F4F8FB',
                        '&:hover': {
                            backgroundColor: '#F4F8FB',
                        },
                    },
                    containedPrimary: {
                        color: '#F7F7F7',
                        backgroundColor: '#6769EA',
                        '&:hover': {
                            backgroundColor: '#6769EA',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderRadius: 6,
                        boxShadow: 'none',
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        '& .MuiTableCell-root': {
                            textAlign: 'center',
                            borderBottom: '0px',
                            color: isDarkMode ? '#CFCFCF' : '#131927',
                            padding: '12px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            '&:first-of-type': {
                                borderTopLeftRadius: '6px',
                                borderBottomLeftRadius: '6px',
                            },
                            '&:last-child': {
                                borderTopRightRadius: '6px',
                                borderBottomRightRadius: '6px',
                            },
                        },
                    },
                },
            },
            MuiTableBody: {
                styleOverrides: {
                    root: {
                        marginTop: '8px',
                        '& .MuiTableCell-root': {
                            textAlign: 'center',
                            fontSize: '0.875rem',
                            padding: '17px',
                            borderColor: '#DDE6ED',
                            whiteSpace: 'nowrap',
                            fontWeight: 400,
                            color: isDarkMode ? '#CFCFCF' : '#4C5873',
                            '&:first-of-type': {
                                borderTopLeftRadius: '6px',
                                borderBottomLeftRadius: '6px',
                            },
                            '&:last-child': {
                                borderTopRightRadius: '6px',
                                borderBottomRightRadius: '6px',
                            },
                        },
                        '& .MuiTableRow-root': {
                            '&:last-child': {
                                '& td': {
                                    border: 0,
                                },
                            },
                        },
                    },
                },
            },
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        padding: '24px',
                        borderRadius: 16,
                        backgroundColor: isDarkMode ? '#1E1D2A' : '#F6F5F5',
                        '& .MuiTableRow-root': {
                            backgroundColor: isDarkMode ? '#262839' : '#FFFFFF',
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        '&.MuiPopover-paper': {
                            boxShadow: '0px 8px 40px rgba(51, 86, 116, 0.1);',
                            marginTop: 3,
                        },
                    },
                    rounded: {
                        borderRadius: 16,
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        margin: 0,
                        minWidth: 300,
                        [breakpoints.down('sm')]: {
                            minWidth: 300,
                        },
                    },
                },
            },
            MuiPopover: {
                styleOverrides: {
                    paper: {
                        borderRadius: 10,
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontSize: '0.75rem',
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    margin: 'dense',
                    variant: 'outlined',
                    fullWidth: true,
                },
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        paddingRight: '32px !important',
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        border: '1.2px solid #DDE6ED',
                        borderRadius: '8px!important',
                        '& .MuiInputBase-input': {
                            padding: '16px',
                            fontSize: '1rem',
                        },
                    },
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: 'none',
                    variant: 'body1',
                },
            },
            MuiPaginationItem: {
                styleOverrides: {
                    root: {
                        minWidth: 30,
                        height: 30,
                        fontSize: 12,
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        padding: '3px',
                        border: '1.2px solid #DDE6ED',
                        borderRadius: '12px',
                        minHeight: 'unset',
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        flex: 1,
                        transition: 'all .3s',
                        borderRadius: '10px',
                        padding: '8px 0',
                        minHeight: 'unset',
                        textTransform: 'none',
                        color: '#B0B7BD',
                        '&.Mui-selected': {
                            color: '#1F2A38',
                            background: '#DDE6ED',
                        },
                    },
                },
                defaultProps: {
                    disableTouchRipple: true,
                },
            },
        },
        palette: {
            primary: {
                main: '#36566D',
                dark: 'rgba(56, 59, 123, 1)',
                light: '#B0B7BD',
            },
            secondary: {
                main: '#6769EA',
            },
            error: {
                main: red.A400,
            },
            success: { light: green[600], main: '#10B981', dark: green[400], contrastText: '#fff' },
            text: {
                primary: isDarkMode ? 'rgba(255,255,255)' : '#1F2A38',
                secondary: isDarkMode ? 'rgba(255,255,255)' : '#B0B7BD',
            },
            background: { default: isDarkMode ? '#212331' : '#FEFEFE' },
        },
        typography: {
            fontFamily: ['Poppins', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
            body1: {
                color: '#1F2A38',
                fontWeight: 500,
            },
            body2: {
                fontSize: '0.875rem',
                fontWeight: 400,
            },
            h1: {
                fontSize: '2.275rem',
                fontWeight: 600,
            },
            h2: {
                fontSize: '1.625rem',
                fontWeight: 600,
            },
            h3: {
                fontSize: '1.375rem',
                fontWeight: 600,
            },
            h4: {
                fontSize: '1.25rem',
                fontWeight: 600,
            },
            h5: {
                fontSize: '1rem',
                fontWeight: 600,
            },
            h6: {
                fontSize: '0.875rem',
                fontWeight: 500,
            },
        },
        shadows: [
            'none',
            'rgba(0, 0, 0, 0.1) 0px 1px 4px 0px',
            'rgba(0, 0, 0, 0.15) 0px 1px 4px 0px',
            'rgba(0, 0, 0, 0.15) 0px 4px 8px 0px',
            'rgba(0, 0, 0, 0.15) 0px 4px 8px 0px',
            'rgba(0, 0, 0, 0.1) 0px 8px 16px 0px',
            'rgba(0, 0, 0, 0.1) 0px 8px 24px 0px',
            'rgba(0, 0, 0, 0.15) 0px 8px 16px 0px',
            'rgba(0, 0, 0, 0.15) 0px 8px 24px 0px',
            'rgba(0, 0, 0, 0.2) 0px 8px 16px 0px',
            'rgba(0, 0, 0, 0.2) 0px 8px 24px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 6px 2px',
            'rgba(0, 0, 0, 0.2) 0px 1px 7px 2px',
            'rgba(0, 0, 0, 0.2) 0px 1px 8px 2px',
            'rgba(0, 0, 0, 0.2) 0px 1px 9px 2px',
            'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 11px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 12px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 13px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 14px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 15px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 16px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 17px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 18px 0px',
            'rgba(0, 0, 0, 0.2) 0px 1px 19px 0px',
        ],
    });
};

declare module '@mui/material/styles' {
    interface Theme {
        dark: boolean;
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        dark?: boolean;
    }
}

export default theme;
