import { createTheme } from "@mui/material/styles";

const dark = "#000";
const grey = "#BDBDBD";
// const red = "#3e5ea9";
const lightWhite = "#F7F7FF";
const lightGrey = "#4F4F4F";
const white = "#fff";

const lightYellow = "#F2994A";
const lighterYellow = "rgba(242, 153, 74, .8)";
const purple = "#4E598C";
const lightBlue = "#817E9E";
const blue = "#2F80ED";

export const muiTheme = createTheme({
  palette: {
    common: {
      dark,
      purple,
      grey,
      lightWhite,
      white,
      blue,
      lightBlue,
    },
    primary: {
      main: dark,
    },
    secondary: {
      main: lightYellow,
    },

    info: {
      main: lighterYellow,
    },
    divider: {
      main: lightBlue,
    },
  },
  typography: {
    fontFamily: ['"Product Sans"', "Roboto", "sans-serif"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(2.3rem,3vw,3rem)",
      color: dark,
      fontWeight: 700,
    },
    h2: {
      fontSize: "4.8rem",
      color: purple,
      lineHeight: "6.7rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3.6rem",
      color: "#4E598C",
      fontWeight: 700,
    },
    h4: {
      fontSize: "clamp(1.5rem,2vw,1.85rem)",
      fontWeight: 500,
    },
    h5: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: 500,
    },

    body1: {
      fontSize: "2.4rem",
      lineHeight: "3.4rem",
      fontWeight: 700,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "2.4rem",
    },

    input: {
      width: "100%",
      height: "5rem",
      padding: "clamp(0.3rem, 2vw, 1rem)",
      fontSize: "clamp(1.4rem,2vw,1.6rem)",
      color: dark,
      fontWeight: 600,
      "&::placeholder": {
        color: lightGrey,
        // fontSize: "clamp(1.2rem,2vw,1.6rem)",
        fontWeight: "500 !important",
      },
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: dark,
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "2rem",
          lineHeight: "3rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#fff",
          borderColor: "#4E598C",

          input: {
            color: lightGrey,
            fontWeight: 400,
            fontSize: "2rem",
            lineHeight: "3rem",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: lightGrey,
          fontWeight: 400,
          fontSize: "2rem",
          lineHeight: "3rem",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: lightGrey,
          fontWeight: 400,
          fontSize: "2rem",
          lineHeight: "3rem",
        },
      },
    },
  },
});
