import { TextField, InputAdornment, Switch, Theme } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { useField, useFormikContext } from 'formik';
import check from 'assets/icons/dashboard/check.svg';
import cross from 'assets/icons/dashboard/cross.svg';

const CustomSwitch = styled(Switch)(({ theme }: { theme: Theme }) => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
            '& .MuiSwitch-thumb': {
                backgroundColor: theme.palette.secondary.main,
                '&:before': {
                    backgroundImage: `url(${check})`,
                },
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#DDE6ED',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#7A8892',
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${cross})`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#DDE6ED',
    },
}));

type SwitchFieldProps = {
    name: string;
    value: string;
};

export const SwitchField: React.FC<SwitchFieldProps> = ({ name, value }) => {
    const [field] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleVisibilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event.target.checked);
    };

    return (
        <TextField
            value={value}
            disabled
            sx={{
                '& .MuiOutlinedInput-input.Mui-disabled': {
                    WebkitTextFillColor: '#7A8892',
                },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Box
                            sx={{
                                width: '66px',
                                height: '32px',
                                backgroundColor: '#F4F8FB',
                                border: '1.5px solid #EFF3F6',
                                borderRadius: '12px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <CustomSwitch checked={field.value} onChange={handleVisibilityChange} name={name} />
                        </Box>
                    </InputAdornment>
                ),
            }}
        />
    );
};
