export interface FontFamilyType {
  default: string;
  secondary: string;
}

export interface FontTypes {
  family: FontFamilyType
}

export interface SpacingTypes {
  large: string;
  medium: string;
}

export interface ColorsType {
  secondaryColor: string;
}

export interface ThemeType {
  font: FontTypes;
  spacings: SpacingTypes;
  colors: ColorsType;
}

export interface ThemeProvider {
  theme: ThemeType;
}