import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Andrés</title>
        <meta name='description' content='About page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>About Page</h1>
        </div>

        <div className={styles.grid}>
          <Link className={styles.card} href='/'>
            Ir a Home
          </Link>
        </div>
      </main>
    </>
  )
}
