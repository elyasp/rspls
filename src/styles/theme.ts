import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#dbd7e0",
    },
    info: {
      main: "#7c83fc",
    },
    text: {
      primary: "#c4c4c4",
      secondary: "#3b3b3b",
    },
  },
  typography: {
    fontFamily: ["Verdana", "BlinkMacSystemFont", '"Segoe UI"', "Roboto"].join(
      ","
    ),
    h1: {
      fontWeight: 900,
      fontSize: "40px",
      marginTop: "1rem",
      "@media (min-width:600px)": {
        fontSize: "50px",
      },
      "@media (min-width:900px)": {
        fontSize: "80px",
      },
    },
    h2: {
      fontWeight: 900,
      fontSize: "20px",
      "@media (min-width:600px)": {
        fontSize: "30px",
      },
      "@media (min-width:900px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontWeight: 900,
      fontSize: "25px",
      "@media (min-width:600px)": {
        fontSize: "25px",
      },
      "@media (min-width:900px)": {
        fontSize: "30px",
      },
    },
    h5: {
      fontWeight: 900,
      whiteSpace: "nowrap",
      fontSize: "17px",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
      "@media (min-width:900px)": {
        fontSize: "30px",
      },
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        border: "none",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body: {
          height: "100vh",
          backgroundColor: "#242424",
          overflowX: "hidden",
        },
      },
    },
  },
});
