import { FormHelperText, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { FieldProps, ErrorMessage } from 'formik';

export interface RadioGroupFieldProps extends FieldProps {
    labels: string[];
    options: string[];
    disabled: boolean;
}

export const RadioGroupField: React.FC<RadioGroupFieldProps> = ({ disabled, field, options, labels, ...other }) => {
    return (
        <>
            <RadioGroup {...field} {...other} name={field.name}>
                {options.map((option, i) => (
                    <FormControlLabel
                        disabled={disabled}
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={labels[i]}
                    />
                ))}
            </RadioGroup>
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
