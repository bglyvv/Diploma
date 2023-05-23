import { Box, Popover as MuiPopover, IconButton, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/dashboard/arrow-down.svg';
import { useAuth } from 'context/auth/store';
import { MenuItems } from './menu-items/menu-items';
import { useNotifications } from 'context/NotificationsContext';
import { LogoutDialog } from 'components/logout-dialog';
import { ReactComponent as LogoutIcon } from 'assets/icons/dashboard/logout.svg';
import { useTranslation } from 'react-i18next';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '16px',
    backgroundColor: theme.dark ? '#383B7B' : '#F6F6F6',
    padding: '8.5px 12px',
    '& .user': {
        width: 24,
        height: 24,
        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
        },
    },
    '& .username': {
        color: theme.dark ? '#fff' : '#131927',
        fontSize: '14px',
        marginLeft: theme.spacing(1),
    },
    '& .arrow-button': {
        padding: 0,
        marginLeft: theme.spacing(1.5),
    },
    '& .arrow-icon': {
        transition: 'all .3s',
    },
}));

const Popover = styled(MuiPopover)(({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(0.75),
    '& .MuiPaper-root': {
        minWidth: 220,
        border: '1px solid #DDE6ED',
        borderRadius: theme.spacing(2),
        backgroundColor: theme.dark ? '#1E1D2A' : '#fff',
    },
    '& .popover-content': {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1),
    },
    '& .menu-item': {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        padding: theme.spacing(1.25, 1.5),
        borderRadius: theme.spacing(1.5),
        transition: 'all .2s',
        '& .MuiButton-startIcon': {
            marginLeft: 0,
            marginRight: theme.spacing(1.25),
        },
        '& svg path': {
            stroke: theme.palette.text.secondary,
            transition: 'all .2s',
        },
        '&:hover': {
            background: '#F6F8FA',
            color: '#7A8892',
            '& svg path': {
                stroke: '#7A8892',
            },
        },
    },
}));
export const HeaderProfile: React.FC = () => {
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [{ user }, dispatch] = useAuth();
    const { notify } = useNotifications();

    const handleClick = (event): void => {
        setAnchorEl(event.currentTarget);
    };
    const logOut = (): void => {
        dispatch({ type: 'LOGGED_OUT' });
        notify({
            type: 'success',
            message: 'Successfully logged out',
        });
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <Root onClick={(event) => handleClick(event)}>
                <LogoutDialog handleConfirm={logOut} open={openDialog} handleClose={handleCloseDialog} />
                <Box className="user">{/* <img src={user?.image as string} /> */}</Box>
                <Typography className="username">{user?.firstName || 'Leyla'}</Typography>
                <IconButton className="arrow-button">
                    <ArrowDownIcon
                        style={{
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                        className="arrow-icon"
                    />
                </IconButton>
            </Root>

            <Popover
                id="simple-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box className="popover-content">
                    <MenuItems {...{ handleClose }} />
                    <Button startIcon={<LogoutIcon />} className="menu-item" onClick={handleOpenDialog}>
                        {t('header:logout')}
                    </Button>
                </Box>
            </Popover>
        </>
    );
};
