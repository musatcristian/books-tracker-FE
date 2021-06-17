import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700],
    },
  },
});
