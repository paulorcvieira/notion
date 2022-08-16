import { ITask } from 'interfaces/ITasks'
import dynamic from 'next/dynamic'

export interface ToDoNotionProps {
  tasks: ITask[]
}

const ToDo = dynamic(() => import('components/modules/todo'), {
  ssr: false,
})

export default function ToDoNotion({ tasks }: ToDoNotionProps) {
  return <ToDo tasks={tasks} />
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/tasks')
  const tasks = await response.json()

  return {
    revalidate: 60 * 60 * 24,
    props: {
      tasks,
    },
  }
}
