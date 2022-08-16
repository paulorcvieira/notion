import Head from 'next/head'
import { ReactNode } from 'react'

import { Header, LogoVariant } from 'components/communs/Header'
import { ColorVariant } from 'components/communs/Header/styles'

import { Container } from './styles'

interface DefaultLayoutProps {
  title: string
  description: string
  children: ReactNode
  logoFileName: string
  headerTitle: string
  headerLogo?: LogoVariant
  headerColor?: ColorVariant
  headerLogoAlt?: string
}

export default function DefaultLayout({
  title,
  description,
  children,
  logoFileName,
  headerTitle,
  headerLogo,
  headerColor,
  headerLogoAlt,
}: DefaultLayoutProps) {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href={`/assets/${logoFileName}`} />
        <link rel="apple-touch-icon" href={`/assets/${logoFileName}`} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={`/assets/${logoFileName}`} />
      </Head>

      <Header
        title={headerTitle}
        logo={headerLogo}
        color={headerColor}
        logoAlt={headerLogoAlt}
      />

      {children}
    </Container>
  )
}
