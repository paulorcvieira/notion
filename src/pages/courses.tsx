import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

import { useMeQuery } from 'graphql/cm/generated/graphql'
import { ssrGetProducts } from 'graphql/cm/generated/pagePublic'
import { withApollo } from 'lib/withApollo'

function CourseManager() {
  const { user, error, isLoading } = useUser()
  const { data: me, loading } = useMeQuery()

  if (error) return <p>Error: {error.message}</p>
  if (isLoading || loading) return <p>Loading...</p>

  return (
    <div>
      <a href="/api/auth/logout">Logout</a>

      <pre>{JSON.stringify(me, null, 2)}</pre>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
})

// HOC
export default withApollo(ssrGetProducts.withPage()(CourseManager))
