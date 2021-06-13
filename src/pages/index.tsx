// React Components
import React from 'react';

// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Feward Components
import SignIn from 'pages/signIn';
import Meta from 'components/meta';

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

    const { text } = props;

    return (
      <>
        <Meta title={'Sign In'} />
        <SignIn />
      </>
    )
};

export default NotFound;