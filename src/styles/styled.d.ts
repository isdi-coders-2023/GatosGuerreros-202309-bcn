import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    padding: string;

    colors: {
      primary: string;
      secondary: string;
      teriary: string;
      accent: string;
      success: string;
      danger: string;
    };

    typography: {
      fontFamily: string;
      serif: string;
      sansSerif: string;
    };
  }
}
