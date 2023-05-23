import { Box, Typography, Theme, Card, Tabs, Tab, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/styles';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    '& .card-title': {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2.5),
    },
    '& .card-wrapper': {
        padding: theme.spacing(2.5, 3.5),
        border: '1.5px solid #DDE6ED',
        borderRadius: '12px',
        '& .card-top': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .tabs-wrapper': {
                '& .tab-item': {
                    minWidth: 'unset',
                    padding: theme.spacing(0.5, 2),
                    fontSize: '10px',
                    whiteSpace: 'unset',
                },
            },
        },
        '& .card-statistics': {
            marginTop: theme.spacing(3),
            '& .card-list-item': {
                margin: 0,
                padding: 0,
                '& .MuiListItemText-root': {
                    margin: 0,
                    padding: '15px 0px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                '&:not(:last-child)': {
                    '& .MuiListItemText-root': {
                        borderBottom: '1px solid #DDE6ED',
                    },
                },
            },
        },
    },
}));

export const StatisticsCard: React.FC = () => {
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState(0);

    const onTabChange = useCallback((_, tabIndex) => {
        setSelectedTab(tabIndex);
    }, []);

    return (
        <Root>
            <Typography variant="h4" className="card-title">
                {t('home:statistics')}
            </Typography>
            <Card elevation={0} className="card-wrapper">
                <Box className="card-top">
                    <Box>
                        <Typography variant="h5">{t('home:meetings')}</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#B0B7BD', mt: 0.25 }}>
                            {t('home:total')}: 78
                        </Typography>
                    </Box>
                    <Box>
                        <Tabs value={selectedTab} onChange={onTabChange} className="tabs-wrapper">
                            <Tab label={t('dashboard:total')} className="tab-item" />
                            <Tab label={t('home:thisMonth')} className="tab-item" />
                        </Tabs>
                    </Box>
                </Box>
                <Box className="card-statistics">
                    <List>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#968EEE', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:waitingForApproval')}
                                secondary={17}
                            />
                        </ListItem>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#F79708', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:upcoming')}
                                secondary={17}
                            />
                        </ListItem>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#35D37E', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:held')}
                                secondary={54}
                            />
                        </ListItem>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#F54B55', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:cancelled')}
                                secondary={7}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Card>
        </Root>
    );
};
