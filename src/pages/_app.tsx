import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import AppProvider from 'contexts'
import GlobalStyle from 'styles/global.styles'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AppProvider>
      {/* <ApolloProvider client={client}> */}
      <Head>
        <meta name="theme-color" content="#131319" />
      </Head>

      <NextNprogress
        color="#00875f"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component key={router.route} {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} draggablePercent={60} />
      {/* </ApolloProvider> */}
    </AppProvider>
  )
}
