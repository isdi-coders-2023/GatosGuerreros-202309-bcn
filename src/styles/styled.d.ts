import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    padding: string;

    colors: {
      main: string;
      secondary: string;
      teriary: string;
      accent: string;
      success: string;
      danger: string;
    };

    typography: {
      fontFamily: string;
      serifRegular: string;
      serifItalic: string;
      sansSerifRegular: string;
      sansSerifMedium: string;
      sansSerifBold: string;
    };
  }
}
