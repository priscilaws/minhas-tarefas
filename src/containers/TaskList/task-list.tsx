import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { CardContainer } from './styles'
import * as enums from '../../utils/enums/Tarefas'
import { RootState } from '../../store'

type Tarefa = {
  titulo: string
  descricao: string
  status: enums.Status
  prioridade: enums.Prioridade
}

const TaskList = () => {
  const tarefas = useSelector((state: RootState) => state.tarefas) as Tarefa[]

  return (
    <CardContainer>
      <p>
        2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
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
}

export default TaskList
