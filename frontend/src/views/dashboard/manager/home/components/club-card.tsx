import { Box, Typography, Theme, Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import qarabag from 'assets/qarabag.png';
import { ReactComponent as MailIcon } from 'assets/icons/dashboard/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/dashboard/phone.svg';
import { ReactComponent as LinkIcon } from 'assets/icons/dashboard/link.svg';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    '& .card-title': {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2.5),
    },
    '& .card-wrapper': {
        padding: theme.spacing(2.5, 3.5),
        border: '1.5px solid #DDE6ED',
        borderRadius: '12px',
        '& .club-associates': {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1.5),
            marginBottom: theme.spacing(2.5),
            '& .images-wrapper': {
                display: 'flex',
                alignItems: 'center',
                '& .image': {
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid #ffffff',
                    '&:not(:first-child)': {
                        marginLeft: '-8px',
                    },
                    '& img': {
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    },
                },
                '& .associates-count': {
                    backgroundColor: '#DDE6ED',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& p': {
                        color: theme.palette.primary.main,
                        fontSize: '10px',
                    },
                },
            },
            '& .associate-text': {
                color: theme.palette.primary.main,
                fontSize: '12px',
            },
        },
        '& .club-details': {
            marginBottom: theme.spacing(1.5),
            '& .club-logo': {
                width: '80px',
                height: '100px',
                marginBottom: theme.spacing(1.5),
                '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                },
            },
        },
        '& .club-contact': {
            '& .list-item': {
                padding: theme.spacing(0.75, 1.5),
                gap: theme.spacing(1.25),
                background: '#F1F7FC',
                borderRadius: '8px',
                '&:not(:first-child)': {
                    marginTop: theme.spacing(0.5),
                },
                '& .list-item-icon': {
                    minWidth: 'unset',
                },
                '& .list-item-text': {
                    '& span': {
                        fontSize: '12px',
                        color: '#373B41',
                    },
                },
            },
        },
    },
}));

export const ClubCard: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Root>
            <Typography variant="h4" className="card-title">
                {t('home:club')}
            </Typography>
            <Card elevation={0} className="card-wrapper">
                <Box className="club-associates">
                    <Box className="images-wrapper">
                        <Box className="image">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="image">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="image">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="image">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                        </Box>
                        <Box className="image associates-count">
                            <Typography>+23</Typography>
                        </Box>
                    </Box>
                    <Typography className="associate-text">{t('home:associates')}</Typography>
                </Box>
                <Box className="club-details">
                    <Box className="club-logo">
                        <img src={qarabag} alt="Club Logo" />
                    </Box>
                    <Typography variant="h2">Qarabag FK</Typography>
                </Box>
                <Box className="club-contact">
                    <List>
                        <ListItem className="list-item">
                            <ListItemIcon className="list-item-icon">
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText className="list-item-text" primary="qarabagh@qarabagh.com" />
                        </ListItem>
                        <ListItem className="list-item">
                            <ListItemIcon className="list-item-icon">
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText className="list-item-text" primary="+994 12 4041951" />
                        </ListItem>
                        <ListItem className="list-item">
                            <ListItemIcon className="list-item-icon">
                                <LinkIcon />
                            </ListItemIcon>
                            <ListItemText className="list-item-text" primary="Vebsayt" />
                        </ListItem>
                    </List>
                </Box>
            </Card>
        </Root>
    );
};
