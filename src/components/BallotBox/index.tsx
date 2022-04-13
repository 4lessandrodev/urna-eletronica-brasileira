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
    return (
        <Container>
            <Content>
                <InnerBorder>
                    <ContainerBallot>
                        <ContainerScreen />
                        <ContainerKeyBoard>
                            <LogoContainer />
                            <ContainerKeyBoardKeys />
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
