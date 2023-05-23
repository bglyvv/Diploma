import { Box, Typography, Theme, Card } from '@mui/material';
import { styled } from '@mui/styles';
import { Link } from 'components';
import { useTranslation } from 'react-i18next';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    '& .header-wrapper': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: theme.spacing(2.5),
        '& .title': {
            color: theme.palette.primary.main,
        },
        '& .see-all-link': {
            color: '#B0B7BD',
            fontFamily: 'Poppins,"Helvetica Neue",Arial,sans-serif',
        },
    },
    '& .meeting-card': {
        padding: theme.spacing(2.5, 3),
        background: '#FEFEFE',
        border: '1.5px solid #EFF3F6',
        borderRadius: '16px',
        marginBottom: theme.spacing(1),
        '& .card-header': {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1.5),
            marginBottom: theme.spacing(0.75),
            '& .dot': {
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#F54B55',
            },
            '& .datetime': {
                fontSize: '14px',
                color: '#7A8892',
            },
        },
        '& .card-content': {
            '& .meeting-purpose': {
                color: theme.palette.primary.main,
                fontSize: '14px',
                marginBottom: theme.spacing(0.5),
            },
            '& .meeting-link': {
                fontFamily: 'Poppins,"Helvetica Neue",Arial,sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                cursor: 'pointer',
                display: 'inline-block',
            },
        },
    },
}));

export const Meetings: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Root>
            <Box className="header-wrapper">
                <Typography variant="h4" className="title">
                    {t('home:upcomingMeetings')}
                </Typography>
                <Link to="/d/meetings" link className="see-all-link">
                    {t('seeAll')}
                </Link>
            </Box>
            <Card className="meeting-card" elevation={0}>
                <Box className="card-header">
                    <Box className="dot"></Box>
                    <Typography className="datetime">15.10.2023 15:30</Typography>
                </Box>
                <Box className="card-content">
                    <Typography className="meeting-purpose">Meydançaların yoxlanılması</Typography>
                    <Link to="/d/meetings/1" link className="meeting-link">
                        {t('home:meetingLink')}
                    </Link>
                </Box>
            </Card>
            <Card className="meeting-card" elevation={0}>
                <Box className="card-header">
                    <Box className="dot"></Box>
                    <Typography className="datetime">15.10.2023 15:30</Typography>
                </Box>
                <Box className="card-content">
                    <Typography className="meeting-purpose">Meydançaların yoxlanılması</Typography>
                    <Link to="/d/meetings/1" link className="meeting-link">
                        {t('home:meetingLink')}
                    </Link>
                </Box>
            </Card>
            <Card className="meeting-card" elevation={0}>
                <Box className="card-header">
                    <Box className="dot"></Box>
                    <Typography className="datetime">15.10.2023 15:30</Typography>
                </Box>
                <Box className="card-content">
                    <Typography className="meeting-purpose">Meydançaların yoxlanılması</Typography>
                    <Link to="/d/meetings/1" link className="meeting-link">
                        {t('home:meetingLink')}
                    </Link>
                </Box>
            </Card>
            <Card className="meeting-card" elevation={0}>
                <Box className="card-header">
                    <Box className="dot"></Box>
                    <Typography className="datetime">15.10.2023 15:30</Typography>
                </Box>
                <Box className="card-content">
                    <Typography className="meeting-purpose">Meydançaların yoxlanılması</Typography>
                    <Link to="/d/meetings/1" link className="meeting-link">
                        {t('home:meetingLink')}
                    </Link>
                </Box>
            </Card>
        </Root>
    );
};
