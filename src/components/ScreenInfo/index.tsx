import { ReactElement } from 'react';
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
        image,
        name,
        group,
        setInputsNumber,
    } = useBallotBox();

    const handleInput = (): void => {
        const totalInput = ballotBox.quantityOfNumbers;
        const result: ReactElement[] = [];

        while (result.length < totalInput) {
            const index = result.length;
            result.push(<InputNumber key={`${index}${Math.random()}`} value={pressedNumbers[index]} />);
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
                {inputsNumber.length === pressedNumbers.length
                    && (
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
                    )}
            </ScreenInfoData>
            <ScreenInfoImage>
                <PhotoHandler
                    alt="image"
                    height={250}
                    width={240}
                    src={image}
                    withBorder
                />
            </ScreenInfoImage>
        </Style>
    );
}
