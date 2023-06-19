
import * as S from './styles';
import { BtnHelp } from '@components/BtnHelp';
import FotoPerfil from '@assets/FotoPerfil.png'
import p6 from '@assets/p6.png'
import Detalhe1 from '@assets/Detail1.png'
import { SimpleLineIcons, Octicons, Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export function Perfil() {

  const navigation = useNavigation();

  function handleWallet() {
    navigation.navigate('wallet');
  }
  function handleConquista() {
    navigation.navigate('conquistas');
  }
  function handlePerso() {
    navigation.navigate('personalizar');
  }
  function handleCalendario() {
    navigation.navigate('calendario');
  }
  function handleConfig() {
    navigation.navigate('config');
  }

  return (

    <S.Container>
      {/* Falta apresentar na tela, nome cadastrado, valor da */}
      {/*   <S.imgDetail source={Detalhe1}/> */}

      {/* Header */}
      <S.Header>
        <S.viewHeader>
          <S.imgPerfil source={FotoPerfil} />
          <S.imgPet source={p6} />
        </S.viewHeader>

        <S.viewDados>
          <S.txtNome >
            Nome Aluno
          </S.txtNome>
          <S.txtIdade>
            16 anos
          </S.txtIdade>

        <S.BtnWallet onPress={handleWallet}>
        <Fontisto
            name='wallet'
            color={"#ffff"}
            size={25}
          />
          <S.Text>
            R$ 50,00
          </S.Text>
        </S.BtnWallet>
        </S.viewDados>

      </S.Header>

      {/* botoes */}
      <S.ContainerBody>

        <S.btnBody onPress={handleConquista}>
          <SimpleLineIcons
            name='trophy'
            color={"#ffff"}
            size={35}
          />
          <S.textBody>
            Conquistas
          </S.textBody>
        </S.btnBody>

        <S.btnBody onPress={handlePerso}>
          <Octicons
            name='paintbrush'
            color={"#ffff"}
            size={35}
          />
          <S.textBody>
            Personalizar
          </S.textBody>
        </S.btnBody>

        <S.btnBody onPress={handleCalendario}>
          <Octicons
            name='calendar'
            color={"#ffff"}
            size={35}
          />
          <S.textBody>
            Calendário
          </S.textBody>
        </S.btnBody>

        <S.btnBody onPress={handleConfig}>
          <Octicons
            name='gear'
            color={"#ffff"}
            size={35}
          />
          <S.textBody>
            Configurações
          </S.textBody>
        </S.btnBody>


        <BtnHelp />
      </S.ContainerBody>

    </S.Container>
  )
}
