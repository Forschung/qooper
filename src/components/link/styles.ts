// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

// Utilities
import { FLinkProps } from './index';

export const useStyles = makeStyles(() => ({
   root: ({ color, fontSize }: FLinkProps) => ({
      color: color,
      fontSize: `${fontSize}px`,
   }),
   fLink: {
      textDecoration: 'none!important'
   },
   icon: ({ color }: FLinkProps) => ({
      color: color,
      display: 'inline-block',
      width: 'auto',
      marginRight: 5,
      verticalAlign: 'middle',
   }),
}));