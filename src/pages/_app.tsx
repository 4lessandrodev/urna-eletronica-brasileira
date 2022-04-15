import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import BallotBoxProvider from '@contexts/ballot-provider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BallotBoxProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </BallotBoxProvider>
    );
}

export default MyApp;
