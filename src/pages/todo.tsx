import Head from 'next/head'
import { ChangeEvent, FormEvent, InvalidEvent, useCallback, useEffect, useMemo } from 'react'
import GithubCorner from 'react-github-corner'

import { Header } from 'components/Header'
import Task from 'components/Task'

import { PlusCircle } from 'phosphor-react'

import {
  Container,
  Content,
  NewTask,
  TaskHeader,
  Tasks, TasksContent, TasksEmpty
} from 'styles/todo-notion.styles'

import { useTasks } from 'hooks/useTasks'
import { ITask } from 'interfaces/ITasks'

const notTasksIcon = 'assets/not-tasks-icon.svg'

interface ToDoNotionProps {
  tasks: string
}

export default function ToDoNotion({ tasks }: ToDoNotionProps) {
  const { tasksList, setTasksList, newTaskTitle, setNewTaskTitle } = useTasks()

  useEffect(() => {
    if (!tasksList.length) {
      setTasksList(JSON.parse(tasks))
    }
  }, [tasks])

  const handleCreateNewTask = useCallback((e: FormEvent) => {
    e.preventDefault()

    const newTask: ITask = {
      id: String(tasksList.length + 1),
      title: newTaskTitle,
      isComplete: false,
      created_at: new Date()
    }

    setTasksList((state: ITask[]) => [...state, newTask])
    setNewTaskTitle('')
  }, [newTaskTitle, setTasksList, setNewTaskTitle])

  const handleNewTaskTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('')
      setNewTaskTitle(e.target.value)
  }, [setNewTaskTitle])

  const deleteTask = useCallback((id: string) => {
    const tasksFiltered = tasksList.filter(task => task.id !== id)
    setTasksList([...tasksFiltered])
  }, [tasksList, setTasksList])

  const changeTaskStatus = useCallback((id: string) => {
    const toggleTaskStatus = tasksList.map(task => {
      if (task.id === id) {
        Object.assign(task, { isComplete: !task.isComplete })
      }
      return task
    })

    setTasksList([...toggleTaskStatus])
  }, [tasksList, setTasksList])

  const handleNewTaskInvalid = useCallback(
    (e: InvalidEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('É obrigatório digitar um título!')
  }, [])

  const tasksCompleted = useMemo(() => {
    return tasksList.filter(task => task.isComplete)
  }, [tasksList])

  const tasksNotCompleted = useMemo(() => {
    return tasksList.filter(task => !task.isComplete)
  }, [tasksList])

  const isNewTaskTitleEmpty = !newTaskTitle.length

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/todo-logo.svg" />
        <link rel="apple-touch-icon" href="/assets/todo-logo.svg" />
        <title>ToDoNotion</title>
        <meta name="description" content="Your next generation feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="ToDo" color="blue" logo="todo" />

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
              <div>Tarefas criadas <span>{tasksList.length}</span></div>
              <div>Concluídas <span>{tasksCompleted.length} de {tasksList.length}</span></div>
            </TaskHeader>

            {!!tasksList.length ? (
              <TasksContent>
                {tasksNotCompleted.map(task => (
                  <Task
                    key={task.id}
                    task={task}
                    onChangeTaskStatus={changeTaskStatus}
                    onDeleteTask={deleteTask}
                  />
                ))}
                {tasksCompleted.map(task => (
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
    </>
  )
}

export const getStaticProps = async () => {
  // const response = await fetch('http://localhost:3000/api/tasks')
  // const tasks = await response.json()

  const tasks = [
    {
      id: '1-task',
      title: 'Atualizar banco de dados.',
      isComplete: false,
      created_at: new Date()
    },
    {
      id: '2-task',
      title: 'Estudar React.',
      isComplete: true,
      created_at: new Date()
    },
  ]

  return {
    revalidate: 60 * 60 * 24,
    props: {
      tasks: JSON.stringify(tasks)
    }
  }
}
