import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import { FieldProps } from 'formik';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';

export const DateRangePicker: React.FC<FieldProps & { normalize?: any }> = ({ field, form, normalize }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDateRangePicker
                onChange={(date) => {
                    const value = normalize ? normalize(date) : date;
                    form.setFieldValue(field.name, value || null, true);
                }}
                value={field.value}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
};
