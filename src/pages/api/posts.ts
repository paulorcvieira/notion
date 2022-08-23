// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = [
    {
      id: '1dsdadsdasdw',
      author: {
        name: 'Paulo',
        role: 'Software Engineer',
        avatar_url: 'https://github.com/paulorcvieira.png',
      },
      created_at: new Date(),
      content: `
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz especialmente para o meu portifólio. O nome do projeto é FeedNotion 🚀</p>
        <p>👉&nbsp;&nbsp;<a href="#">paulorcvieira/feed-notion</a></p>
        <p>
          <a href="#">#novoprojeto</a>
        </p>
      `,
      draft: false,
      comments: [
        {
          id: '1',
          author: {
            name: 'Carol',
            role: 'Software Engineer',
            avatar_url: 'https://github.com/carolslima.png',
          },
          comment: 'Muito bom Paulo, parabéns!! 👏👏',
          claps: 23,
          created_at: new Date('2022-08-03T21:00:00.000Z'),
        },
        {
          id: '2',
          author: {
            name: 'Carmen',
            role: 'Manager',
            avatar_url:
              'https://source.unsplash.com/collection/1390381/100x100?q=50',
          },
          comment: '💜💜',
          claps: 39,
          created_at: new Date(),
        },
      ],
    },
  ]

  res.status(200).json(posts)
}
