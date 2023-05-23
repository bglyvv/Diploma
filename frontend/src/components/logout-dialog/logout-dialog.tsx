import { Box, Dialog as MUIDialog, Typography, DialogContent, DialogTitle, Button } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/styles';
import { ReactComponent as LogoutIcon } from 'assets/icons/dashboard/logout-icon.svg';
import { useTranslation } from 'react-i18next';

type LogoutDialogProps = {
    handleConfirm: () => void;
    handleClose: () => void;
    open: boolean;
};

const Dialog = styled(MUIDialog)(({ theme }: { theme: Theme }) => ({
    '& .MuiPaper-root': {
        padding: '30px 10px',
        width: '368px',
    },
    '& .header': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '& .content': {
        padding: 0,
        paddingBottom: theme.spacing(4),
    },
    '& .dialog-title': {
        textAlign: 'center',
        marginBottom: theme.spacing(0.5),
    },
    '& .dialog-description': {
        textAlign: 'center',
        fontSize: '12px',
        color: '#7A8892',
    },
    '& .button-box': {
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(1),
        '& .action-button': {
            width: '112px',
        },
    },
    '& .title': {
        padding: 0,
        paddingBottom: theme.spacing(1.5),
    },
}));

export const LogoutDialog: React.FC<LogoutDialogProps> = ({ handleConfirm, handleClose, open }) => {
    const { t } = useTranslation();
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="title">
                    <Box className="header">
                        <LogoutIcon />
                    </Box>
                </DialogTitle>
                <DialogContent className="content">
                    <Typography variant="h5" className="dialog-title">
                        {t('signOut')}
                    </Typography>
                    <Typography className="dialog-description">{t('signOutDescription')}</Typography>
                </DialogContent>
                <Box className="button-box">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                        className="action-button"
                        disableElevation
                    >
                        {t('no')}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleConfirm}
                        className="action-button"
                        sx={{ border: '1.5px solid #EFF3F6' }}
                        disableElevation
                    >
                        {t('yes')}
                    </Button>
                </Box>
            </Dialog>
        </>
    );
};
