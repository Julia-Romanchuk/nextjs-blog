import Head from 'next/head'
import Link from 'next/link'
import { Container, Header, HeaderText } from '../../styles'
import { FC, PropsWithChildren } from 'react'
import Router from 'next/router'

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {

  const redirectToHome = () => {
    Router.push('/')
  }

  return (
    <Container>
      <Head>
        <title>Posts</title>
      </Head>

      <Header >
        <HeaderText onClick={redirectToHome} >Develops Today</HeaderText>
        <Link href="/posts/new" >
          <a>
            Create post
          </a>
        </Link>
      </Header>

      <main>{children}</main>
    </Container>
  )
}

export default Layout