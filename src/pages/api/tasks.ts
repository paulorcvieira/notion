// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tasks = [
    {
      id: '1-task',
      title: 'Atualizar banco de dados.',
      isComplete: false,
      created_at: new Date(),
    },
    {
      id: '2-task',
      title: 'Estudar React.',
      isComplete: true,
      created_at: new Date(),
    },
  ]

  res.status(200).json(tasks)
}
