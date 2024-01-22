import { createTheme } from "@mui/material";

// const muiTheme = {
//   colors: {
//     white: "#FFF",
//     background: "#d2b5fc",
//     red: "#ff3b3b",
//     button: "#8736f6",
//     orange: "#ff6c39",
//     lightOrangeBg: "#ffefeb",
//     green: "#45c949",
//     lightPurpleBg: "#f9f5ff",
//     darkerPurpleBg: "#f2ebfd",
//     yellow: "#ffc82c",
//     grayDark: "#273444",
//     gray: "#8492a6",
//     grayLight: "#d3dce6",
//     textLight: "#999aaf",
//   },
// };

const theme = createTheme({
  palette: {
    primary: {
      main: "#8736f6", // Change this to your preferred primary color
    },
    secondary: {
      main: "#ff6c39", // Change this to your preferred secondary color
    },
    background: {
      default: '#fff',
      paper: '#f9f5ff'
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
  },
  spacing: 8,
});

export default theme;