import { Trash } from 'phosphor-react'

import { ITask } from 'interfaces/ITasks'

import { Container } from './styles'

const circleChecked = 'assets/circle-checked.svg'
const circleUnchecked = 'assets/circle-unchecked.svg'

interface TaskProps {
  task: ITask
  onChangeTaskStatus: (id: string) => void
  onDeleteTask: (id: string) => void
}

export default function Task({
  task,
  onDeleteTask,
  onChangeTaskStatus,
}: TaskProps) {
  return (
    <Container isComplete={task.isComplete}>
      <div>
        {task.isComplete ? (
          <button
            title="Marcar como não concluída"
            onClick={() => onChangeTaskStatus(task.id)}
          >
            <img src={circleChecked} alt="Tarefa concluída" />
          </button>
        ) : (
          <button
            title="Marcar como concluída"
            onClick={() => onChangeTaskStatus(task.id)}
          >
            <img src={circleUnchecked} alt="Tarefa não concluída" />
          </button>
        )}
      </div>
      <div onClick={() => onChangeTaskStatus(task.id)}>
        <span>{task.title}</span>
      </div>
      <div>
        <button title="Apagar tarefa" onClick={() => onDeleteTask(task.id)}>
          <Trash size={20} />
        </button>
      </div>
    </Container>
  )
}
