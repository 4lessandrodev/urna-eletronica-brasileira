import Style, { BtnColor } from './style';

interface Props extends BtnColor{
    value: string;
}

export default function CommandButton({ color, value }: Props) {
    return (
        <Style color={color}>{ value }</Style>
    );
}
