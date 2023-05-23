import { Box, IconButton, Theme } from '@mui/material';
import { styled } from '@mui/styles';
import { ReactComponent as NotificationIcon } from 'assets/icons/dashboard/notification.svg';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: '43px',
    height: '43px',
    borderRadius: '12px',
    backgroundColor: theme.dark ? '#383B7B' : '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .icon-button': {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        position: 'relative',
        '& .red-dot': {
            position: 'absolute',
            width: '10px',
            height: '10px',
            background: '#F54B55',
            borderRadius: '50%',
            border: '0.5px solid #FFFFFF',
            top: '0px',
            right: '0px',
        },
        '& svg path': {
            stroke: theme.dark ? '#fff' : '#131927',
        },
    },
}));

export const HeaderNotifications: React.FC = () => {
    return (
        <Root>
            <IconButton className="icon-button">
                <NotificationIcon />
                <Box className="red-dot"></Box>
            </IconButton>
        </Root>
    );
};
