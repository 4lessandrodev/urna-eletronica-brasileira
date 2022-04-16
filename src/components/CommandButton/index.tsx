import Style, { BtnColor } from './style';

interface Props extends BtnColor{
    value: string;
    command: () => void;
}

export default function CommandButton({ color, value, command }: Props) {
    return (
        <Style color={color} onClick={command}>{ value }</Style>
    );
}
