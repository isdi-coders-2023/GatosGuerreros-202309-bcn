import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  borderRadius: "5px",
  padding: "16px",
  typography: {
    fontFamily: ["DM Sans", "system-ui", "-apple-system", "Segoe UI"].join(","),
    sansSerif: ["DM Sans", "sans-serif"].join(","),
    serif: ["DM Serif Text", "serif"].join(","),
  },
  colors: {
    accent: "#e9f279",
    danger: "#af4f4c",
    primary: "#fdfdf9",
    secondary: "#295e60",
    teriary: "#eefeff",
    success: "#fdfdf9",
  },
};

export { mainTheme };
