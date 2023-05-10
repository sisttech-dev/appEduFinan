
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { BtnHelp } from '@components/BtnHelp';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { SimpleLineIcons, Octicons, AntDesign } from '@expo/vector-icons'
export function Perfil() {

  return (

    <S.Container>
      {/* Falta apresentar na tela */}
      {/*   <S.imgDetail source={Detalhe1} />ntar na tela */}

      {/* Header */}
      <S.Header>

        <S.imgPerfil source={FotoPerfil} />

        <S.TextHeader >
          Nome Aluno
        </S.TextHeader>
        <S.secTextHeader>
          16 anos
        </S.secTextHeader>


        <S.BtnWallet>
          <S.Text>
            R$ 50,00
          </S.Text>
        </S.BtnWallet>
      </S.Header>

      <S.BtnWheel>
        <S.Text>
          Roda da vida
        </S.Text>
      </S.BtnWheel>

      {/* botoes */}
      <S.ContainerBody>

        <S.btnBody>
          <SimpleLineIcons
            name='trophy'
            color={"#ffff"}
            size={50}
          />
          <S.textBody>
          </S.textBody>
          <S.textBody>
            Conquistas
          </S.textBody>
        </S.btnBody>

        <S.btnBody>
          <Octicons
            name='paintbrush'
            color={"#ffff"}
            size={40}
          />
          <S.textBody>
            Personalizar
          </S.textBody>
        </S.btnBody>

        <S.btnBody>
          <Octicons
            name='gear'
            color={"#ffff"}
            size={40}
          />
          <S.textBody>
            Configurações
          </S.textBody>
        </S.btnBody>

        <S.btnBody>
          <Octicons
            name='calendar'
            color={"#ffff"}
            size={40}
          />
          <S.textBody>
            Calendário
          </S.textBody>
        </S.btnBody>

        <BtnHelp />
      </S.ContainerBody>

      <NavBar />
    </S.Container>
  )
}
