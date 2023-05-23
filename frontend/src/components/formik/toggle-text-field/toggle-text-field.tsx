import { Autocomplete, InputLabel, TextField as MUITextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ToggleTextField: React.FC<{ label; name; options: string[] }> = ({ label, name, options }) => {
    const { t } = useTranslation();
    const formik = useFormikContext<any>();
    // const [enabled, setEnabled] = useState(false);
    const [selectedValues, setSelectedValues] = useState(formik.values[name]);

    // const handleCheckboxChange = (event) => {
    //     setEnabled(event.target.checked);
    // };

    const handleSelectChange = (_, value) => {
        setSelectedValues(value);
    };

    useEffect(() => {
        formik.setFieldValue(name, selectedValues);
    }, [selectedValues]);

    return (
        <>
            {/* <FormControlLabel
                control={
                    <Checkbox
                        checked={enabled}
                        onChange={handleCheckboxChange}
                        sx={{
                            color: '#968EEE',
                            '& .MuiSvgIcon-root': { fontSize: 29.4 },
                            '&.Mui-checked': {
                                color: '#968EEE',
                            },
                        }}
                    />
                }
                label={t(`roles:${label}`)}
                sx={{ '& span': { color: '#133248', fontSize: 12 } }}
            /> */}
            <InputLabel>{t(`roles:${label}`)}</InputLabel>
            <Autocomplete
                options={options}
                multiple
                // disabled={!enabled}
                // value={selectedValues}
                onChange={handleSelectChange}
                renderInput={(params) => (
                    <MUITextField {...params} name={name} placeholder={t('roles:permissions')} variant="outlined" />
                )}
            />
        </>
    );
};
