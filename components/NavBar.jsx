import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const NavBar = () => {
  return (
    <nav>
      <a className={`${inter.className}`} href='/'>
        Home
      </a>
      <a className={`${inter.className}`} href='/about'>
        About
      </a>
      <a className={`${inter.className}`} href='/contact'>
        Contact
      </a>
    </nav>
  )
}
