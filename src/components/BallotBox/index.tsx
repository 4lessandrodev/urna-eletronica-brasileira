import {
    Base,
    Border,
    Container,
    ContainerBallot,
    ContainerKeyBoard,
    ContainerScreen,
    Content,
    InnerBorder,
} from './style';

export default function BallotBox() {
    return (
        <Container>
            <Content>
                <InnerBorder>
                    <ContainerBallot>
                        <ContainerScreen />
                        <ContainerKeyBoard />
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
