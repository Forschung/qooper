// React Components
import React, { useEffect, useState } from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FPlacementProps {
    mobile?: any;
    desktop?: any;
    mobileView?: boolean;
    desktopView?: boolean;
    minWidth?: number | string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ }: FPlacementProps) => ({

    }),
}));

const Placement: React.FC<FPlacementProps> = (props) => {

    const classes = useStyles(props);

    const { minWidth = 1024, desktop, mobile, mobileView, desktopView } = props;

    const [isDesktop, setIsDesktop] = useState(false);

    const isMobile = () => {
        setIsDesktop(window.matchMedia(`(min-width: ${minWidth}px)`).matches);

        window.addEventListener('resize', () => {
            setIsDesktop(window.matchMedia(`(min-width: ${minWidth}px)`).matches);
        });
      };

      useEffect(() => {
        isMobile();
      }, []);

    return (
        <Box>
            {isDesktop ?
                <Box>
                    {desktop}
                </Box>
            :
                <Box>
                    {mobile}
                </Box>
            }
        </Box>
    )
};

export default Placement;