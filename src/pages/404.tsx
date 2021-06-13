// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FNotFoundProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FNotFoundProps) => ({
        display: "block"
    }),
}));

const NotFound: React.FC<FNotFoundProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'Not Found' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default NotFound;