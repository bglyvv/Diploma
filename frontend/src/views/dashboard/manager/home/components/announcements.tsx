import { Box, Typography, Theme, Card } from '@mui/material';
import { styled } from '@mui/styles';
import { Link } from 'components';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CommentIcon } from 'assets/icons/dashboard/comment.svg';

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
    '& .announcement-card': {
        padding: theme.spacing(2.5, 4),
        background: '#FEFEFE',
        border: '1.5px solid #EFF3F6',
        borderRadius: '12px',
        marginBottom: theme.spacing(1),
        '& .card-header': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing(1.5),
            '& .user-details': {
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1.5),
                '& .avatar': {
                    width: '44px',
                    height: '44px',
                    '& img': {
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    },
                },
                '& .user-info': {
                    '& .fullname': {
                        fontSize: '14px',
                        color: '#373B41',
                    },
                    '& .datetime': {
                        fontSize: '12px',
                        color: '#7A8892',
                    },
                },
            },
            '& .badge': {
                width: '51px',
                height: '26px',
                background: '#F54B55',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                '& .new': {
                    fontSize: '12px',
                    color: '#ffffff',
                },
            },
        },
        '& .card-content': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .announcement-details': {
                '& .announcement-title': {
                    fontSize: '14px',
                    marginBottom: theme.spacing(0.5),
                    color: '#373B41',
                },
                '& .announcement-body': {
                    fontSize: '12px',
                    color: theme.palette.primary.main,
                },
            },
            '& .comments': {
                minWidth: '69px',
                height: '37px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: theme.spacing(0.5),
                backgroundColor: '#F4F8FB',
                border: '1.5px solid #EFF3F6',
                borderRadius: '8px',
                '& .comments-count': {
                    fontSize: '14px',
                    color: '#8EB2CB',
                },
            },
        },
    },
}));

export const Announcements: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Root>
            <Box className="header-wrapper">
                <Typography variant="h4" className="title">
                    {t('home:announcements')}
                </Typography>
                <Link to="/d/announcements" link className="see-all-link">
                    {t('seeAll')}
                </Link>
            </Box>
            <Card className="announcement-card" elevation={0}>
                <Box className="card-header">
                    <Box className="user-details">
                        <Box className="avatar">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="user-info">
                            <Typography variant="h5" className="fullname">
                                Namiq Məmmədov
                            </Typography>
                            <Typography className="datetime">12.12.2022 15:30</Typography>
                        </Box>
                    </Box>
                    <Box className="badge">
                        <Typography variant="h5" className="new">
                            {t('dashboard:new')}
                        </Typography>
                    </Box>
                </Box>
                <Box className="card-content">
                    <Box className="announcement-details">
                        <Typography variant="h5" className="announcement-title">
                            Yeni mövsüm üçün lisenziya alınmasına başlanıldı
                        </Typography>
                        <Typography variant="body2" className="announcement-body">
                            Eleifend sed in molestie scelerisque ornare tortor interdum in. Donec consectetur faucibus
                            accumsan diam...
                        </Typography>
                    </Box>
                    <Box className="comments">
                        <CommentIcon />
                        <Typography className="comments-count">125</Typography>
                    </Box>
                </Box>
            </Card>
            <Card className="announcement-card" elevation={0}>
                <Box className="card-header">
                    <Box className="user-details">
                        <Box className="avatar">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="user-info">
                            <Typography variant="h5" className="fullname">
                                Namiq Məmmədov
                            </Typography>
                            <Typography className="datetime">12.12.2022 15:30</Typography>
                        </Box>
                    </Box>
                    <Box className="badge">
                        <Typography variant="h5" className="new">
                            {t('dashboard:new')}
                        </Typography>
                    </Box>
                </Box>
                <Box className="card-content">
                    <Box className="announcement-details">
                        <Typography variant="h5" className="announcement-title">
                            Yeni mövsüm üçün lisenziya alınmasına başlanıldı
                        </Typography>
                        <Typography variant="body2" className="announcement-body">
                            Eleifend sed in molestie scelerisque ornare tortor interdum in. Donec consectetur faucibus
                            accumsan diam...
                        </Typography>
                    </Box>
                    <Box className="comments">
                        <CommentIcon />
                        <Typography className="comments-count">125</Typography>
                    </Box>
                </Box>
            </Card>
            <Card className="announcement-card" elevation={0}>
                <Box className="card-header">
                    <Box className="user-details">
                        <Box className="avatar">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="user-info">
                            <Typography variant="h5" className="fullname">
                                Namiq Məmmədov
                            </Typography>
                            <Typography className="datetime">12.12.2022 15:30</Typography>
                        </Box>
                    </Box>
                    <Box className="badge">
                        <Typography variant="h5" className="new">
                            {t('dashboard:new')}
                        </Typography>
                    </Box>
                </Box>
                <Box className="card-content">
                    <Box className="announcement-details">
                        <Typography variant="h5" className="announcement-title">
                            Yeni mövsüm üçün lisenziya alınmasına başlanıldı
                        </Typography>
                        <Typography variant="body2" className="announcement-body">
                            Eleifend sed in molestie scelerisque ornare tortor interdum in. Donec consectetur faucibus
                            accumsan diam...
                        </Typography>
                    </Box>
                    <Box className="comments">
                        <CommentIcon />
                        <Typography className="comments-count">125</Typography>
                    </Box>
                </Box>
            </Card>
        </Root>
    );
};
