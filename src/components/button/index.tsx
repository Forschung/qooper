// React Components
import React from 'react';

// Material UI Components
import { Button as FButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Utilities

export interface FButtonProps {
   type?: any;
    link?: string;
    width?: number;
    label?: string;
    color?: string;
    radius?: number;
    display?: string;
    fontSize?: number;
    className?: string;
    marginTop?: number;
    background?: string;
    lineHeight?: number;
    onClick?: () => void;
    borderColor?: string;
    borderWidth?: number;
}

export const useStyles = makeStyles({
   button: ({ color, background, marginTop, radius, display, borderColor, borderWidth, lineHeight, width, fontSize }: FButtonProps) => ({
       width: `${width}%`,
       color: color,
       display: display,
       maxWidth: '100%',
       marginTop: marginTop,
       borderRadius: radius,
       fontSize: `${fontSize}px`,
       textTransform: 'capitalize',
       lineHeight: `${lineHeight}px`,
       background: `${background} !important`,
       border: `solid ${borderWidth}px ${borderColor} `
   }),
});

const Button: React.FC<FButtonProps> = (props) => {

   const classes = useStyles(props);

   const { children, onClick, label, type } = props;

   return (
      <FButton onClick={onClick} type={type} className={classes.button}>
         {label}{children}
      </FButton>
   );
};

export default Button;