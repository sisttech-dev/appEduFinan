
import * as S from './styles';
import { NavBar } from '@components/NavBar';



export function Home() {

  return (

    <S.Container>
        <S.Container>
          <S.Text>
            header
          </S.Text>
        </S.Container>
        <S.Container>
          <S.Text>
            Carrossel
          </S.Text>
        </S.Container>

       <NavBar>
       <S.Text>
            Carrossel
          </S.Text>
       </NavBar>
    </S.Container>
  )
}
