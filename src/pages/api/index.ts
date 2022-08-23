import { getAccessToken } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { accessToken } = await getAccessToken(req, res)

  return httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
