
import * as S from './styles';

import { SlideButton } from '@components/SlideButton';
export function Configuracao() {

    return (

        <S.Container>
            <S.ContainerBody>

                <SlideButton label="Lorem ipsum" />
                <SlideButton label="Lorem ipsum 2" />
                <SlideButton label="Lorem ipsum 3" />
                <SlideButton label="Lorem ipsum 4" />
                <SlideButton label="Lorem ipsum 5" />

            </S.ContainerBody>
        </S.Container>

    )
}
