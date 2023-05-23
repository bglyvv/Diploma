import { Box, Typography, BoxProps } from '@mui/material';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';

type TableDetailMobileProps = {
    title: string;
    content: React.ReactNode | string;
};

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1.75, 2),
    borderRadius: theme.spacing(1.25),
    maxHeight: '47px',
    backgroundColor: 'rgba(59, 67, 242, 0.05)',
    '& .title': {
        color: theme.palette.primary.main,
        marginRight: '25px',
    },
}));

export const TableDetail: React.FC<BoxProps & TableDetailMobileProps> = ({ title, content, ...props }) => {
    return (
        <Root {...props}>
            <Typography fontWeight="500" fontSize={12.5} className="title">
                {title}
            </Typography>
            {typeof content === 'string' || typeof content === 'number' ? (
                <Typography fontSize={12} sx={{ textAlign: 'right' }}>
                    {content}
                </Typography>
            ) : (
                content
            )}
        </Root>
    );
};
