import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './NavBar.module.css'

const inter = Inter({ subsets: ['latin'] })

export const NavBar = () => {
  return (
    <nav>
      <Link
        className={`${inter.className} ${styles['menu-container']}`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={`${inter.className} ${styles['menu-container']}`}
        href='/about'
      >
        About
      </Link>
      <Link
        className={`${inter.className} ${styles['menu-container']}`}
        href='/contact'
      >
        Contact
      </Link>
    </nav>
  )
}
