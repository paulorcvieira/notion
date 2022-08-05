import { createContext, ReactNode, useState } from 'react'

import { ITask } from 'interfaces/ITasks'

export interface TaskContextData {
  tasksList: ITask[]
  setTasksList: any
  newTaskTitle: string
  setNewTaskTitle: (title: string) => void
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext<TaskContextData>(
  {} as TaskContextData,
)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksList, setTasksList] = useState<ITask[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  return (
    <TasksContext.Provider
      value={{
        tasksList,
        setTasksList,
        newTaskTitle,
        setNewTaskTitle
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
