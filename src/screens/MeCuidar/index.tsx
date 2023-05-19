import { NavBar } from '@components/NavBar';
import * as S from './styles';
import MeCuidarFoto from '@assets/MeCuidarFoto.png'
import {
    SafeAreaViewView,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Item } from './styles';

export function MeCuidar() {
    type ItemProps = { title: string };

    const Item = ({ title }: ItemProps) => (
        <S.Secoes>
            <S.Secao>
                <S.TextSecao>
                    {title}
                </S.TextSecao>
            </S.Secao>
        </S.Secoes>
    );

    const DATA = [
        {
            id: '1',
            title: 'Relacionamento',
        },
        {
            id: '2',
            title: 'Pessoal',
        },
        {
            id: '3',
            title: 'Profissional',
        },
        {
            id: '3',
            title: 'Qualidade de vida',
        },
    ];

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader >
                    Quais necessidades estão guiando seus sentimentos de hoje?
                </S.TextHeader>
            </S.Header>

            <S.Img source={MeCuidarFoto} />

                <S.ContainerBody>

                    {/* Selecionaveis */}
                    <S.TextSecoes>
                        Necessidades Atendidas
                    </S.TextSecoes>
                    {/* Aqui check box funcional */}

                    <S.TextSecoes>
                        Necessidades não atendidas
                    </S.TextSecoes>
                    {/* Aqui check box funcional */}

                    <S.TextSecoes>
                        Qual area da vida isso impacta?
                    </S.TextSecoes>

                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                        
                    />

                </S.ContainerBody>
            
         <NavBar/>
        </S.Container>
    )
}
