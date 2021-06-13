// React Components
import React from 'react';

// Material UI Components
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// Utilities
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FInputProps {
    id?: any;
    value?: any;
    label?: string;
    error?: boolean;
    className?: string;
    adornment?: any;
    required?: boolean;
    helperText?: string;
    placeholder?: string;
    onChange?: () => void;
    iconPosition?: string;
    variant?: 'filled' | 'standard' | 'outlined' | undefined;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ }: FInputProps) => ({
       
    }),
 }));

const Input: React.FC<FInputProps> = (props) => {
    
    const classes = useStyles(props);

    const { id, error, label, value, placeholder, required, helperText, iconPosition, adornment, variant = 'standard', className, onChange } = props;

    return (
       <>
         {iconPosition === 'left' ?
            <TextField
               required={required}
               error={error}
               id={id}
               label={error ? 'Error' : label}
               helperText={error ? helperText : undefined}
               className={className}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               InputProps={{
                  startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
               }}
               variant={variant}
            />
         : 
            <TextField
               required={required}
               error={error}
               id={id}
               label={error ? 'Error' : label}
               helperText={error ? helperText : undefined}
               className={className}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               InputProps={{
                  endAdornment: <InputAdornment position="end">{adornment}</InputAdornment>,
               }}
               variant={variant}
            />
         }
      </>
    )
};

export default Input;