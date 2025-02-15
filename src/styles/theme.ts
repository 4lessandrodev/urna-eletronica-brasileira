import { ThemeType } from '@types';

export default {
    font: {
        family: {
            default: "'Fira Sans Condensed', sans-serif",
            secondary: 'Roboto',
            third: "'Roboto', sans-serif",
        },
        weights: {
            extraLight: '200',
            light: '300',
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            extraBold: '800',
        },
        sizes: {
            xsmall: '0.5rem',
            small: '0.7rem',
            xnormal: '0.9rem',
            normal: '1rem',
            title: '1.4rem',
            large: '2rem',
            xlarge: '4rem',
            xxlarge: '6rem',
        },
    },
    colors: {
        primary: '#C3D1EE',
        secondary: '#252930',
        green: '#159950',
        darkGreen: '#0E612D',
        lightOrange: '#FF8B61',
        orange: '#D76237',
        darkOrange: '#AA4D2B',
        lightGray: '#F5F3F3',
        gray: '#CCCCCC',
        darkGray: '#B4B7C0',
        lightBlue251: '#EBF5FE',
        lightBlue250: '#ECF3FD',
        lightBlue242: '#D2E0FD',
        lightBlue241: '#CFD9F2',
        lightBlue240: '#C3D1EE',
        lightBlue239: '#B6C1D8',
        white: '#FFFFFF',
        black81: '#252930',
        black87: '#161B20',
        black89: '#0C171B',
    },
    borderRadius: {
        xsmall: '2px',
        small: '3px',
        xmedium: '5px',
        medium: '7px',
        xlarge: '34px',
        large: '35px',
    },
    spacings: {
        xsmall: '0.2rem',
        xxsmall: '0.4rem',
        small: '0.7rem',
        xmedium: '1rem',
        xxmedium: '1.2rem',
        medium: '1.5rem',
        xlarge: '2rem',
        xxlarge: '2.rem',
        large: '3rem',
    },
} as Partial<ThemeType>;
