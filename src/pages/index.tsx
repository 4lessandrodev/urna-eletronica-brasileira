import BallotBox from '@components/BallotBox';
import AuthorUrl from '@components/Link';
import { Container, Wrapper } from '@components/Templates';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
    return (
        <Container>
            <Wrapper>
                <BallotBox />
                <AuthorUrl />
            </Wrapper>
        </Container>
    );
}
