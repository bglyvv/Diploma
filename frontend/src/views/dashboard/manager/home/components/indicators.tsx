import { Box, Typography, Theme, Card } from '@mui/material';
import { styled } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ClubsIndicatorIcon } from 'assets/icons/dashboard/clubs-indicator-icon.svg';
import { ReactComponent as AffaAssociatesIndicatorIcon } from 'assets/icons/dashboard/affa-associates-indicator-icon.svg';
import { ReactComponent as ClubAssociatesIndicatorIcon } from 'assets/icons/dashboard/club-associates-indicator-icon.svg';
import { ReactComponent as IncreaseIcon } from 'assets/icons/dashboard/increase.svg';
import { ReactComponent as DecreaseIcon } from 'assets/icons/dashboard/decrease.svg';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    '& .card-title': {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2.5),
    },
    '& .indicator-card': {
        padding: theme.spacing(3.5, 2.25),
        border: '1.5px solid #DDE6ED',
        borderRadius: '12px',
        '&:not(:last-child)': {
            marginBottom: theme.spacing(2.95),
        },
        '& .card-content': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            '& .indicator': {
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(2),
                '& .indicator-icon': {
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&.clubs': {
                        background: '#EEF8FF',
                    },
                    '&.affa-associates': {
                        background: '#E0FAEF',
                    },
                    '&.club-associates': {
                        background: 'rgba(150, 142, 238, 0.15)',
                    },
                },
                '& .indicator-text': {
                    '& .indicator-title': {
                        color: theme.palette.primary.light,
                        fontSize: '12px',
                    },
                    '& .indicator-count': {
                        fontSize: '24px',
                    },
                },
            },
            '& .statistics': {
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1.25),
                '& .statistics-text': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(0.75),
                    '& .percentage': {
                        color: theme.palette.primary.main,
                        fontSize: '12px',
                    },
                    '& .period': {
                        color: '#7A8892',
                        fontSize: '8px',
                    },
                },
            },
        },
    },
}));

export const Indicators: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Root>
            <Typography variant="h4" className="card-title">
                {t('home:indicators')}
            </Typography>
            <Card className="indicator-card" elevation={0}>
                <Box className="card-content">
                    <Box className="indicator">
                        <Box className="indicator-icon clubs">
                            <ClubsIndicatorIcon />
                        </Box>
                        <Box className="indicator-text">
                            <Typography className="indicator-title">{t('home:clubs')}</Typography>
                            <Typography className="indicator-count" variant="h3">
                                28
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="statistics">
                        <IncreaseIcon />
                        <Box className="statistics-text">
                            <Typography variant="body2" className="percentage">
                                45%
                            </Typography>
                            <Typography variant="body2" className="period">
                                {t('home:thisMonth')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Card>
            <Card className="indicator-card" elevation={0}>
                <Box className="card-content">
                    <Box className="indicator">
                        <Box className="indicator-icon affa-associates">
                            <AffaAssociatesIndicatorIcon />
                        </Box>
                        <Box className="indicator-text">
                            <Typography className="indicator-title">{t('home:affaAssociates')}</Typography>
                            <Typography className="indicator-count" variant="h3">
                                257
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="statistics">
                        <DecreaseIcon />
                        <Box className="statistics-text">
                            <Typography variant="body2" className="percentage">
                                15%
                            </Typography>
                            <Typography variant="body2" className="period">
                                {t('home:thisMonth')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Card>
            <Card className="indicator-card" elevation={0}>
                <Box className="card-content">
                    <Box className="indicator">
                        <Box className="indicator-icon club-associates">
                            <ClubAssociatesIndicatorIcon />
                        </Box>
                        <Box className="indicator-text">
                            <Typography className="indicator-title">{t('home:clubAssociates')}</Typography>
                            <Typography className="indicator-count" variant="h3">
                                121
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="statistics">
                        <DecreaseIcon />
                        <Box className="statistics-text">
                            <Typography variant="body2" className="percentage">
                                17%
                            </Typography>
                            <Typography variant="body2" className="period">
                                {t('home:thisMonth')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Root>
    );
};
