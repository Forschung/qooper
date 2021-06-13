// React Components
import React from 'react';

// Next Components
import Head from 'next/head';

// Material UI Component
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FMetaProps {
    title?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ }: FMetaProps) => ({
        display: "block"
    }),
}));

const Meta: React.FC<FMetaProps> = (props) => {
    
    const classes = useStyles(props);

    const { title, children } = props;

    return (
        <Head>
            <title>{title}</title>
            {children}
        </Head>
    )
};

export default Meta;