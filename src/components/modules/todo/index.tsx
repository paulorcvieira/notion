import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import GithubCorner from 'react-github-corner'

import DefaultLayout from 'components/communs/layouts/DefaultLayout'
import Task from './Task'

import { PlusCircle } from 'styles/icons'

import {
  Container,
  Content,
  NewTask,
  TaskHeader,
  Tasks,
  TasksContent,
  TasksEmpty,
} from './styles'

import { useTasks } from 'hooks/useTasks'

import { ITask } from 'interfaces/ITasks'

import { ToDoNotionProps } from 'pages/todo'

const notTasksIcon = 'assets/not-tasks-icon.svg'

export default function ToDo({ tasks }: ToDoNotionProps) {
  const { tasksList, setTasksList, newTaskTitle, setNewTaskTitle } = useTasks()

  useEffect(() => {
    if (!tasksList.length) {
      setTasksList(tasks)
    }
  }, [tasks, setTasksList, tasksList])

  const handleCreateNewTask = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      const newTask: ITask = {
        id: String(tasksList.length + 1),
        title: newTaskTitle,
        isComplete: false,
        created_at: new Date(),
      }

      setTasksList((state: ITask[]) => [...state, newTask])
      setNewTaskTitle('')
    },
    [newTaskTitle, setTasksList, setNewTaskTitle, tasksList],
  )

  const handleNewTaskTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('')
      setNewTaskTitle(e.target.value)
    },
    [setNewTaskTitle],
  )

  const deleteTask = useCallback(
    (id: string) => {
      const tasksFiltered = tasksList.filter((task) => task.id !== id)
      setTasksList([...tasksFiltered])
    },
    [tasksList, setTasksList],
  )

  const changeTaskStatus = useCallback(
    (id: string) => {
      const toggleTaskStatus = tasksList.map((task) => {
        if (task.id === id) {
          Object.assign(task, { isComplete: !task.isComplete })
        }
        return task
      })

      setTasksList([...toggleTaskStatus])
    },
    [tasksList, setTasksList],
  )

  const handleNewTaskInvalid = useCallback(
    (e: InvalidEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('É obrigatório digitar um título!')
    },
    [],
  )

  const tasksCompleted = useMemo(() => {
    return tasksList.filter((task) => task.isComplete)
  }, [tasksList])

  const tasksNotCompleted = useMemo(() => {
    return tasksList.filter((task) => !task.isComplete)
  }, [tasksList])

  const isNewTaskTitleEmpty = !newTaskTitle.length

  return (
    <DefaultLayout
      title="ToDoNotion"
      description="Your next generation Todo"
      logoFileName="todo-logo.svg"
      headerTitle="ToDo"
      headerColor="blue"
      headerLogo="todo"
      headerLogoAlt="Logo ToDoNotion"
    >
      <Container>
        <Content>
          <NewTask onSubmit={handleCreateNewTask}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTaskTitle}
              onChange={handleNewTaskTitleChange}
              onInvalid={handleNewTaskInvalid}
            />
            <button
              type="submit"
              disabled={isNewTaskTitleEmpty}
              onClick={handleCreateNewTask}
            >
              Criar <PlusCircle size={20} />
            </button>
          </NewTask>

          <Tasks>
            <TaskHeader>
              <div>
                Tarefas criadas <span>{tasksList.length}</span>
              </div>
              <div>
                Concluídas{' '}
                <span>
                  {tasksCompleted.length} de {tasksList.length}
                </span>
              </div>
            </TaskHeader>

            {tasksList.length ? (
              <TasksContent>
                {tasksNotCompleted.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onChangeTaskStatus={changeTaskStatus}
                    onDeleteTask={deleteTask}
                  />
                ))}
                {tasksCompleted.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onChangeTaskStatus={changeTaskStatus}
                    onDeleteTask={deleteTask}
                  />
                ))}
              </TasksContent>
            ) : (
              <TasksEmpty>
                <img src={notTasksIcon} alt="Ícone sem tarefas" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie e organize seus itens a fazer</span>
              </TasksEmpty>
            )}
          </Tasks>
        </Content>

        <GithubCorner
          href="https://github.com/paulorcvieira"
          octoColor="#1e6f9f"
          bannerColor="#29292e"
          size={86}
        />
      </Container>
    </DefaultLayout>
  )
}
