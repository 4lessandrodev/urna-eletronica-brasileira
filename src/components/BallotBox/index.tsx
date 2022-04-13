import {
    Base,
    Border,
    Container,
    ContainerBallot,
    ContainerKeyBoard,
    ContainerKeyBoardKeys,
    ContainerScreen,
    Content,
    InnerBorder,
    LogoContainer,
} from './style';
import Screen from '../Screen';
import Logo from '../Logo';
import Keyboard from '../Keyboard';

export default function BallotBox() {
    return (
        <Container>
            <Content>
                <InnerBorder>
                    <ContainerBallot>
                        <ContainerScreen>
                            <Screen>{ }</Screen>
                        </ContainerScreen>
                        <ContainerKeyBoard>
                            <LogoContainer>
                                <Logo />
                            </LogoContainer>
                            <ContainerKeyBoardKeys>
                                <Keyboard />
                            </ContainerKeyBoardKeys>
                        </ContainerKeyBoard>
                    </ContainerBallot>
                    <Base>
                        <Border />
                        <Border />
                        <Border />
                        <Border />
                        <Border />
                        <Border />
                    </Base>
                </InnerBorder>
            </Content>
        </Container>
    );
}
