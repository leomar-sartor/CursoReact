import { createTheme } from "@mui/material";
import { cyan, green } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: green[700],
      dark: green[800],
      light: green[500],
      contrastText: "#ffffff"
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: "#ffffff"
    },
    background: {
      default: "#202124",
      paper: "#303134"
    },
  },
  typography:{
    allVariants:{
      color: "white"
    }
  }
});
