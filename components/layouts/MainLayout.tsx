import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'

interface Props {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>About - Andrés</title>
        <meta name='description' content='Home page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  )
}
