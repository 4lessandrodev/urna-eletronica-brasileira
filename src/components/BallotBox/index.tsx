import { useBallotBox } from '../../contexts/ballot-context';
import Screen from '../Screen';
import Logo from '../Logo';
import Keyboard from '../Keyboard';
import Title from '../Title';
import ScreenInfo from '../ScreenInfo';
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

export default function BallotBox() {
    const { ballotBox } = useBallotBox();

    return (
        <Container>
            <Content>
                <InnerBorder>
                    <ContainerBallot>
                        <ContainerScreen>
                            <Screen>
                                {
                                    ballotBox.hasNextStep()
                                        ? <ScreenInfo />
                                        : <Title value="fim" size="XLARGE" />
                                }
                            </Screen>
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
