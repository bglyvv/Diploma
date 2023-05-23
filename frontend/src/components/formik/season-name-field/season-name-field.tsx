import { FormHelperText, TextField } from '@mui/material';
import { FieldProps, ErrorMessage } from 'formik';
import { PatternFormat } from 'react-number-format';

export const SeasonNameField: React.FC<FieldProps> = ({ field, form, ...other }) => {
    return (
        <>
            <PatternFormat
                onValueChange={(value) => {
                    form.setFieldValue(field.name, value.formattedValue, true);
                }}
                mask="_"
                name={field.name}
                customInput={TextField}
                format="####-####"
                {...other}
            />
            <ErrorMessage
                name={field.name}
                render={(text) => (
                    <FormHelperText variant="filled" error>
                        {text}
                    </FormHelperText>
                )}
            />
        </>
    );
};
