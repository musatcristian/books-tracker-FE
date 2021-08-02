import { createTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },
  },
});
