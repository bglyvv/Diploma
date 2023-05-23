import { Typography, useMediaQuery, useTheme } from '@mui/material';

type PageHeaderProps = {
    title: string;
    description?: string;
};

export const DashboardPageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    if (isMobile) {
        return null;
    }

    return (
        <Typography variant="h3" mb={3}>
            {title}
        </Typography>
    );
};
