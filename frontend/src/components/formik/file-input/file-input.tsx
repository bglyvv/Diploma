import { useFormikContext } from 'formik';
import { Box, Fade, IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { ReactComponent as FileIcon } from 'assets/icons/dashboard/file.svg';
import { ReactComponent as EyeIcon } from 'assets/icons/dashboard/eye.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/dashboard/download.svg';
import { IMAGE_BASE_URL } from 'context/auth/reducer';

interface FileInputProps {
    name: string;
    currentImage?: any;
    prevImage?: string;
    currentFileText?: string;
    prevFile?: string;
}

export const FileInput: React.FC<FileInputProps> = ({ name, currentImage, prevImage, currentFileText, prevFile }) => {
    const { setFieldValue } = useFormikContext();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState('');
    const [open, setOpen] = useState<boolean>(false);

    const handleDownloadClick = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', IMAGE_BASE_URL + prevFile, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
            if (xhr.status === 200) {
                const blob = xhr.response;
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = (prevFile as string).substring((prevFile as string).lastIndexOf('/') + 1);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }
        };
        xhr.send();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setFileName(file.name);
            setFieldValue(name, file);
        }
    };

    return (
        <>
            <TextField
                type="text"
                value={fileName || ((prevImage || prevFile) && currentFileText)}
                disabled
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {(currentImage || prevImage) && (
                                <IconButton onClick={() => setOpen(true)}>
                                    <EyeIcon />
                                </IconButton>
                            )}
                            {prevFile && (
                                <IconButton
                                    onClick={handleDownloadClick}
                                    sx={{
                                        '& svg path': {
                                            stroke: '#B0B7BD',
                                        },
                                    }}
                                >
                                    <DownloadIcon />
                                </IconButton>
                            )}
                            <IconButton onClick={handleClick}>
                                <FileIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <input type="file" name={name} onChange={handleChange} ref={inputRef} style={{ display: 'none' }} />
            <Modal open={open} onClose={handleClose} closeAfterTransition>
                <Fade in={open} timeout={500}>
                    {currentImage ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10% auto',
                            }}
                            maxWidth="md"
                        >
                            <img
                                src={URL.createObjectURL(currentImage)}
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </Box>
                    ) : prevImage ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10% auto',
                            }}
                            maxWidth="md"
                        >
                            <img
                                src={`${IMAGE_BASE_URL}${prevImage}`}
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </Box>
                    ) : (
                        <></>
                    )}
                </Fade>
            </Modal>
        </>
    );
};
