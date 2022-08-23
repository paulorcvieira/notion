import { getSession } from '@auth0/nextjs-auth0'
import { GetProductsQuery } from 'graphql/cm/generated/graphql'
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from 'graphql/cm/generated/pagePublic'
import { withPublicApollo } from 'lib/withPublicApollo'
import { GetServerSideProps } from 'next'

interface HomeProps {
  data?: GetProductsQuery
}

function Home({ data }: HomeProps) {
  return (
    <div>
      <h1>Login</h1>

      <a href="/api/auth/login">Fazer login</a>

      <br />
      <br />

      <div>
        <h3>Cursos disponíveis</h3>

        <pre>{JSON.stringify(data?.products, null, 2)}</pre>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res)

  if (session) {
    return {
      redirect: {
        destination: '/courses',
        permanent: false,
      },
    }
  }

  const data = await getServerPageGetProducts({}, {} as any)

  return {
    props: data.props,
  }
}

export default withPublicApollo(ssrGetProducts.withPage()(Home))
