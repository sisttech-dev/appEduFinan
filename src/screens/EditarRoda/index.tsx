import * as S from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import theme from '@theme/index';
import { useState, useRef, useEffect, useCallback } from 'react';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryContainer, VictoryTooltip } from 'victory-native'
import { Animated, Easing, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function EditarRoda() {
    const buttonScale = useRef(new Animated.Value(1)).current;
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const navigation = useNavigation();
    const [valorAnterior, setValorAnterior] = useState(null);

    const [selectedItem, setSelectedItem] = useState(null);
    const handleEditClick = (itemIndex, subItemIndex) => {
        setSelectedItem(`${itemIndex}-${subItemIndex}`);
    };

    const handleValueChange = (itemIndex, subItemIndex, text) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[itemIndex].subData[subItemIndex].value = text;
            return newData;
        });
    };

    const [data, setData] = useState([
        {
            sessao: "Profissional", valor: 10, color: theme.COLORS.GRAY_300,
            subData: [
                { label: "Contribuição", value: 3 },
                { label: "Financeiro", value: 3 },
                { label: "Realização", value: 4 }
            ]
        },

        {
            sessao: "Pessoal", valor: 10, color: theme.COLORS.RED,
            subData: [
                { label: "Saúde", value: 2 },
                { label: "Intelectual", value: 5 },
                { label: "Emocional", value: 3 }
            ]
        },

        {
            sessao: "Relacionamento", valor: 10, color: theme.COLORS.GREEN,
            subData: [
                { label: "Família", value: 5 },
                { label: "Amoroso", value: 2 },
                { label: "Vida Social", value: 3 }
            ]
        },

        {
            sessao: "Qualidade de vida", valor: 10, color: theme.COLORS.BLUE,
            subData: [
                { label: "Hobbies", value: 5 },
                { label: "Plenitude", value: 4 },
                { label: "Espiritualidade", value: 1 }
            ]
        },
    ]);


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@VidaSocial');

            if (value !== null) {
                const parsedData = JSON.parse(value);
                const tamanhoItens = parsedData.length;
                const valorExistente = 10;
                const resultado = tamanhoItens + valorExistente;

                setData(prevData => {
                    return prevData.map(section => {
                        if (section.sessao === "Relacionamento") {
                            return {
                                ...section,
                                valor: resultado
                            };
                        }
                        return section;
                    });
                });

                setValorAnterior(resultado); // Armazena o valor atualizado
            } else if (valorAnterior !== null) {
                // Utiliza o valor anterior mesmo se o array estiver vazio
                setData(prevData => {
                    return prevData.map(section => {
                        if (section.sessao === "Relacionamento") {
                            return {
                                ...section,
                                valor: valorAnterior
                            };
                        }
                        return section;
                    });
                });
            }
        } catch (error) {
            console.log(`Erro ao obter a quantidade de itens na chave "${'@VidaSocial'}":`, error);
        }
    };

    function handleMeCuidar() {
        navigation.navigate('meCuidar');
    }

    useFocusEffect(useCallback(() => {
        getData()
    }, []))

    return (
        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Editar
                </S.TextHeader>
            </S.Header>

            <S.ContainerScroll>
                <S.Secoes>
                    {data.map((item, i) => (
                        <S.Secao key={i} style={{ backgroundColor: item.color, marginRight: 10 }}>
                            <S.Text>{item.sessao}: {item.valor} Pontos</S.Text>

                            <View style={{ flexDirection: 'row' }}>
                                {item.subData.map((subItem, j) => (
                                    <S.Setor key={`${i}-${j}`} style={{ backgroundColor: item.color }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <S.Text>{subItem.label}</S.Text>

                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <TextInput
                                                    style={{ margin: 10, borderWidth: 1, borderRadius: 5, paddingHorizontal: 20, backgroundColor: 'white' }}
                                                    value={subItem.value.toString()}
                                                    onChangeText={(text) => handleValueChange(i, j, text)}
                                                    onFocus={() => handleEditClick(i, j)}
                                                    onBlur={() => setSelectedItem(null)}
                                                />

                                            </View>
                                        </View>
                                    </S.Setor>
                                ))}
                            </View>
                        </S.Secao>
                    ))}

                    <View style={{ alignItems: 'center', margin:10 }}>
                        <S.Btn onPress={handleMeCuidar}>
                            <S.Text>Concluir</S.Text>
                        </S.Btn>
                    </View>
                </S.Secoes>

            </S.ContainerScroll>
        </S.Container>
    )
}
