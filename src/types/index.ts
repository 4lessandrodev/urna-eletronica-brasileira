export interface FontFamilyType {
  default: string;
  secondary: string;
  third: string
}

export interface FontTypes {
  family: FontFamilyType
}

export interface SpacingTypes {
  large: string;
  medium: string;
}

export interface ColorsType {
  primary: string;
  secondary: string;
  green: string;
  darkGreen: string;
  orange: string;
  darkOrange: string;
  gray: string;
  darkGray: string;
  lightBlue251: string,
  lightBlue250: string,
  lightBlue242: string,
  lightBlue241: string,
  lightBlue240: string,
  white: string;
  black81: string;
  black87: string;
  black89: string;
}

export interface ThemeType {
  font: FontTypes;
  spacings: SpacingTypes;
  colors: ColorsType;
}

export interface ThemeProvider {
  theme: ThemeType;
}
