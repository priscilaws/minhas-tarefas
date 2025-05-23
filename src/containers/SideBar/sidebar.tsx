import CardFilter from '../../components/FilterCards'
import * as S from './styles'
const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filter>
        <CardFilter legenda="pendentes" contador={1} />
        <CardFilter legenda="concluidas" contador={2} />
        <CardFilter legenda="urgentes" contador={3} />
        <CardFilter legenda="importantes" contador={4} />
        <CardFilter legenda="normal" contador={5} />
        <CardFilter legenda="todas" contador={10} ativo />
      </S.Filter>
    </div>
  </S.Aside>
)

export default SideBar
