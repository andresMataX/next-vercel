import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './NavBar.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
}

export default function ActiveLink({ href, text }) {
  const { asPath } = useRouter()

  return (
    <Link
      href={href}
      className={`${inter.className} ${styles['menu-container']}`}
      style={asPath === href ? style : null}
    >
      {text}
    </Link>
  )
}
