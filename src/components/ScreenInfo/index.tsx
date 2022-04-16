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

export default function ScreenInfo() {
    return (
        <Style>
            <ScreenInfoData>
                <ContentRow position="START">
                    <Title size="REGULAR" value="Cargo: " />
                    <Title size="REGULAR" value="Presidente" />
                </ContentRow>
                <ContentRow position="CENTER">
                    <InputNumber value={1} />
                    <InputNumber value={2} />
                    <InputNumber value={3} />
                    <InputNumber value={4} />
                    <InputNumber value={5} />
                </ContentRow>
                <ContentRow position="CENTER">
                    <Title size="REGULAR" value="Nome: " />
                    <Title size="REGULAR" value="Fulano" />
                </ContentRow>
                <ContentRow position="START">
                    <Title size="REGULAR" value="Partido: " />
                    <Title size="REGULAR" value="abc" />
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
