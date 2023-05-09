import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>About - Andrés</title>
        <meta name='description' content='Home page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
        </div>

        <div className={styles.grid}>
          <Link className={styles.card} href='/about'>
            Ir a About
          </Link>
        </div>
      </main>
    </>
  )
}
