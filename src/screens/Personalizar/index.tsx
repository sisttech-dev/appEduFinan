
import * as S from './styles';
import Avatar from '@assets/Avatar.png'
import Pet from '@assets/Pet.png'
import rodaVida from '@assets/rodaVida.png'
import mapaMental from '@assets/mapaMental.png'
import coresApp from '@assets/coresApp.png'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export function Personalizar() {
    const navigation = useNavigation();

    function handleAvatar() {
        navigation.navigate('persoAvatar');
      }
    function handlePet() {
        navigation.navigate('persoPet');
      }
    function handleCor() {
        navigation.navigate('persoCor');
      }
    return (

        <S.Container>

            <S.BtnBack>
                <Ionicons
                    name='md-caret-back'
                    color={"#ffff"}
                    size={30}
                />
                <S.TextBack>
                    Voltar
                </S.TextBack>
            </S.BtnBack>

            {/* Mudar cores app */}
            <S.ContainerHead>
                <S.btnHead onPress={handleCor}>
                    <S.Img5 source={coresApp} />

                    <S.Text>
                        Mude as cores do seu App aqui!
                    </S.Text>
                </S.btnHead>

            </S.ContainerHead>

            <S.Container2>
                {/* botoes esquerda */}
                <S.ContainerBody>

                    <S.btnBody>
                        <S.Img source={rodaVida} />
                        <S.Text>
                            Personalizar Roda da vida
                        </S.Text>
                    </S.btnBody>

                    <S.btnBody2 onPress={handlePet}>
                        <S.Img3 source={Pet} />
                        <S.Text>
                            Escolha seu Pet
                        </S.Text>
                    </S.btnBody2>

                </S.ContainerBody>

                {/* botoes direita */}
                <S.ContainerBody>
                    <S.btnBody2 onPress={handleAvatar}>
                        <S.Img4 source={Avatar} />


                        <S.Text>
                            Mudar meu avatar
                        </S.Text>
                    </S.btnBody2>

                    <S.btnBody>
                        <S.Img2 source={mapaMental} />
                        <S.Text>
                            Personalizar Mapa mental
                        </S.Text>
                    </S.btnBody>

                </S.ContainerBody>
            </S.Container2>

        </S.Container>

    )
}
