import { CommandButtons } from '../CommandButtons/stories';
import NumericButtons from '../NumericButtons';
import Container, { Border, Normalize } from './style';

export default function Keyboard() {
    return (
        <Container>
            <Border>
                <Normalize>
                    <NumericButtons />
                    <CommandButtons />
                </Normalize>
            </Border>
        </Container>
    );
}
