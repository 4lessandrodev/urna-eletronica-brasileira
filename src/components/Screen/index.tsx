import { ReactComponentElement } from 'react';
import {
    MainContainer,
    ScreenBorder,
    ScreenContainer,
    MainScreen,
} from './style';

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function Screen({ children }: Props) {
    return (
        <MainContainer>
            <ScreenBorder>
                <ScreenContainer>
                    <MainScreen>{ children }</MainScreen>
                </ScreenContainer>
            </ScreenBorder>
        </MainContainer>
    );
}
