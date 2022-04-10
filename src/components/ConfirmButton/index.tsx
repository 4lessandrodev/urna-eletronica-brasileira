import Style from './style';

interface Props {
	value: string
}

export default function ConfirmButton({ value }: Props) {
    return (
        <Style>{ value }</Style>
    );
}
