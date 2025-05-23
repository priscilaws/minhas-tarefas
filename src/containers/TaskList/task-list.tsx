import Task from '../../components/Task'
import { CardContainer } from './styles'
import * as enums from '../../utils/enums/Tarefas'

const tarefas = [
  {
    titulo: 'Estudar aula Typescript',
    descricao: 'Ver aula 3 EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta internet',
    descricao: 'Baixar fatura',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'academia',
    descricao: 'treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const TaskList = () => (
  <CardContainer>
    <p>
      {' '}
      2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;{' '}
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Task
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </CardContainer>
)

export default TaskList
