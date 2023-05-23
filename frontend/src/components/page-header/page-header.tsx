import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';

type PageHeaderProps = {
    title: string;
    description?: string;
};

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    '& .description': {
        maxWidth: '75ch',
        color: theme.palette.primary.main,
    },
}));

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <Root>
            <Typography variant="h2" mb={description ? 2 : 0} sx={{ fontSize: '24px' }}>
                {title}
            </Typography>
            {description && (
                <Typography color="textSecondary" variant="h4" className="description">
                    {description}
                </Typography>
            )}
        </Root>
    );
};
