import { Box, Button, Dialog as MUIDialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import ConfirmIcon from 'assets/confirm.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DeleteIcon } from 'assets/icons/dashboard/delete-confirm.svg';

export type ConfirmDialogType = 'error' | 'success';
export type ConfirmDialogDescription = string | undefined;

const Dialog = styled(MUIDialog)(({ theme }: { theme: Theme }) => ({
    '& .MuiPaper-root': {
        width: '368px',
    },
    '& .header': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& p': {
            marginTop: theme.spacing(1.5),
            fontWeight: 600,
        },
    },
    '& .icon': {
        width: '100px',
        margin: theme.spacing(3, 0, 2, 0),
    },
    '& .confirmButton': {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    '& .headerWrapper': {
        padding: theme.spacing(3.5, 3.75),
        paddingBottom: 0,
        marginBottom: theme.spacing(0.5),
    },
    '& .contentWrapper': {
        padding: theme.spacing(3.5, 3.75),
        paddingTop: 0,
    },
    '& .content': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    '& .description': {
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        color: '#7A8892',
        fontSize: '12px',
    },
    '& .buttons': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(1),
    },
    '& .button': {
        padding: theme.spacing(2),
        width: '112px',
        height: '52px',
    },
    '& .cancel-button': {
        color: '#7A8892',
        backgroundColor: '#F4F8FB',
        border: '1.5px solid #EFF3F6',
    },
}));

type ConfirmDialogProps = {
    open: boolean;
    onClose: (type: ConfirmDialogType, description: ConfirmDialogDescription) => void;
    onConfirm: any;
    confirmText?: string;
    confirmButtonText?: string;
    description?: ConfirmDialogDescription;
    type?: ConfirmDialogType;
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    open,
    confirmText,
    confirmButtonText,
    description,
    type = 'error',
    onClose,
    onConfirm,
}) => {
    const { t } = useTranslation();
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="headerWrapper">
                <Box className="header">
                    {type === 'success' ? <img className="icon" src={ConfirmIcon} /> : <DeleteIcon />}
                    <Typography>{confirmText || t('confirmDialog:confirmText')}</Typography>
                </Box>
            </DialogTitle>
            <DialogContent className="contentWrapper">
                <Box className="content">
                    <Typography className="description">{description || t('confirmDialog:descriptionText')}</Typography>
                    <Box className="buttons">
                        <Button
                            onClick={() => onClose(type, description)}
                            variant="outlined"
                            autoFocus
                            className={clsx('button', 'cancel-button')}
                        >
                            {t('dashboard:cancel')}
                        </Button>
                        <Button
                            onClick={onConfirm}
                            variant="contained"
                            color={type === 'success' ? 'primary' : 'error'}
                            className="button"
                        >
                            {confirmButtonText || t('dashboard:delete')}
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};
