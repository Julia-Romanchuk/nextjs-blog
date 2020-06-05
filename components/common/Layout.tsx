import Head from 'next/head'
import styles from './container.module.css'
import Link from 'next/link'

const Layout = ({ children, home }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
      </Head>

      <header className={styles.header}>
        <h2>Develops Today</h2>
        <Link href="/posts/new" >
          <a>
            Create post
          </a>
        </Link>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout