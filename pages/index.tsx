import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>Home Page</h1>
      </div>

      <div className={'grid'}>
        <Link className={'card'} href='/about'>
          Ir a About
        </Link>
      </div>
    </MainLayout>
  )
}
