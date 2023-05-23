import { Box, Typography, Theme, Card, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/styles';
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
        '& .card-statistics': {
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

export const CriterionCard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Root>
            <Typography variant="h4" className="card-title">
                {t('home:statisticsForCriterions')}
            </Typography>
            <Card elevation={0} className="card-wrapper">
                <Box className="card-statistics">
                    <List>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#F79708', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:total')}
                                secondary={17}
                            />
                        </ListItem>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#968EEE', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:inProgress')}
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
                                primary={t('home:underInspection')}
                                secondary={54}
                            />
                        </ListItem>
                        <ListItem className="card-list-item">
                            <ListItemText
                                primaryTypographyProps={{
                                    sx: { color: '#1F2A38', fontSize: '14px', fontWeight: 600 },
                                }}
                                secondaryTypographyProps={{
                                    sx: { color: '#006CB7', fontSize: '24px', fontWeight: 700 },
                                }}
                                primary={t('home:executed')}
                                secondary={7}
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
                                primary={t('home:notExecuted')}
                                secondary={7}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Card>
        </Root>
    );
};
