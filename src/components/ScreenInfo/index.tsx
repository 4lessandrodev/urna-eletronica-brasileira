import { ReactElement, useState } from 'react';
import PhotoHandler from '../PhotoHandler';
import InputNumber from '../InputNumber';
import Title from '../Title';
import Style, {
    ContentColumn,
    ContentRow,
    Info,
    ScreenInfoData,
    ScreenInfoImage,
} from './style';
import { useBallotBox } from '../../contexts/ballot-context';

export default function ScreenInfo() {
    const {
        ballotBox,
        pressedNumbers,
        inputsNumber,
        setInputsNumber,
    } = useBallotBox();
    const [name, setName] = useState<string>('');
    const [group, setGroup] = useState<string>('');

    const handleInput = (): void => {
        const totalInput = ballotBox.quantityOfNumbers;
        const result: ReactElement[] = [];
        let i = 0;
        while (i <= totalInput) {
            result.push(<InputNumber key={`${i}${Math.random()}`} value={pressedNumbers[i]} />);
            i += 1;
        }
        setInputsNumber(result);
    };

    const removeSlash = (value: string) => value.replace(/_/, ' ');

    return (
        <Style onLoad={handleInput}>
            <ScreenInfoData>
                <ContentRow position="START">
                    <Title size="REGULAR" value="Cargo: " />
                    <Title size="REGULAR" value={removeSlash(ballotBox.step)} />
                </ContentRow>
                <ContentRow position="CENTER">
                    {inputsNumber}
                </ContentRow>
                <ContentRow position="CENTER">
                    <Title size="REGULAR" value="Nome: " />
                    <Title size="REGULAR" value={name} />
                </ContentRow>
                <ContentRow position="START">
                    <Title size="REGULAR" value="Partido: " />
                    <Title size="REGULAR" value={group} />
                </ContentRow>
                <ContentColumn>
                    <Info>
                        <Title size="MEDIUM" value="Verde: " />
                        <Title size="MEDIUM" value="Confirmar" />
                    </Info>
                    <Info>
                        <Title size="MEDIUM" value="Laranja: " />
                        <Title size="MEDIUM" value="Corrigir" />
                    </Info>
                </ContentColumn>
            </ScreenInfoData>
            <ScreenInfoImage>
                <PhotoHandler
                    alt="image"
                    height={250}
                    width={240}
                    src="image.jpg"
                    withBorder
                />
            </ScreenInfoImage>
        </Style>
    );
}
