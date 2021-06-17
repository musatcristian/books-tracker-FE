import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
});
