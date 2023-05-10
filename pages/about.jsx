import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>About Page</h1>
      </div>

      <div className={'grid'}>
        <Link className={'card'} href='/'>
          Ir a Home
        </Link>
      </div>
    </MainLayout>
  )
}
