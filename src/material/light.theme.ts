import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
});
