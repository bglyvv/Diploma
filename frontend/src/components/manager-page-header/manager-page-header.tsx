import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const Root = styled(Box)(({ theme, center }: { theme: Theme; center?: boolean }) => ({
    marginBottom: theme.spacing(2.75),
    display: 'flex',
    justifyContent: center ? 'center' : 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: theme.spacing(1.5),
        alignItems: 'flex-start',
    },
    '& .title': {
        fontSize: '24px',
        color: theme.palette.primary.main,
        lineHeight: 1.5,
    },
    '& .buttons-wrapper': {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
    },
}));

export const ManagerPageHeader: React.FC<{ title: string; center?: boolean }> = ({ title, children, center }) => {
    return (
        <Root center={center} className="header-wrapper">
            <Typography variant="h2" className="title">
                {title}
            </Typography>
            <Box className="buttons-wrapper">{children}</Box>
        </Root>
    );
};
