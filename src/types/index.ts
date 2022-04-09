export interface FontFamilyType {
  /** Fira Sans Condensed */
  default: string;
   /** Roboto */
  secondary: string;
  /** sans-serif */
  third: string
}

export interface Weights {
  /** 200 */
  extraLight: string;
  /** 300 */
  light: string;
  /** 400 */
  regular: string;
  /** 500 */
  medium: string;
  /** 600 */
  semiBold: string;
  /** 700 */
  bold: string;
  /** 800 */
  extraBold: string;
}

export interface FontSizes {
  xsmall: string;
  small: string;
  xnormal: string;
  normal: string;
  title: string;
  large: string;
  xlarge: string;
  xxlarge: string;
}
export interface FontTypes {
  family: FontFamilyType;
  weights: Weights;
  sizes: FontSizes;
}

export interface SpacingTypes {
  xsmall: string;
  xxsmall: string;
  small: string;
  xmedium: string;
  xxmedium: string;
  medium: string;
  xlarge: string;
  xxlarge: string;
  large: string;
}

export interface BordersRadius {
  /** 2px */
  xsmall: string;
  /** 3px */
  small: string;
  /** 5px */
  xmedium: string;
  /** 7px */
  medium: string;
  /** 34px */
  xlarge: string;
  /** 35px */
  large: string;
}

export interface ColorsType {
  /** C3D1EE */
  primary: string;
  /** 252930 */
  secondary: string;
  /** 159950 */
  green: string;
  /** 0E612D */
  darkGreen: string;
  /** D76237 */
  orange: string;
  /** AA4D2B */
  darkOrange: string;
  /** CCCCCC */
  gray: string;
  /** B4B7C0 */
  darkGray: string;
  /** EBF5FE */
  lightBlue251: string,
  /** ECF3FD */
  lightBlue250: string,
  /** D2E0FD */
  lightBlue242: string,
  /** CFD9F2 */
  lightBlue241: string,
  /** C3D1EE */
  lightBlue240: string,
  /** FFFFFF */
  white: string;
  /** 252930 */
  black81: string;
  /** 161B20 */
  black87: string;
  /** 0C171B */
  black89: string;
}

export interface ThemeType {
  font: FontTypes;
  spacings: SpacingTypes;
  colors: ColorsType;
  borderRadius: BordersRadius;
}

export interface ThemeProvider {
  theme: ThemeType;
}
