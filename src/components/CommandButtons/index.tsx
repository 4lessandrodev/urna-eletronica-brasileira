import CommandButton from '../CommandButton';
import ConfirmButton from '../ConfirmButton';
import Style from './style';

export default function CommandButtons() {
    return (
        <Style>
            <CommandButton color="white" value="branco" />
            <CommandButton color="orange" value="corrige" />
            <ConfirmButton value="confirma" />
        </Style>
    );
}
