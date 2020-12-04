import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#0B132A",
    grey: "#4F5665",
    lightgray: "#DDE0E4",
    blankgrey: "#AFB5C0",
    primary: {
      init: "#F53838",
      dark: "#ED3636",
      light: "#FF3D3D",
      inactive: "#FFECEC",
    },
    border: {
      grey: "#DDDDDD",
      red: "#F53838",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
