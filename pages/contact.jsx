import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>Contact Page</h1>
      </div>

      <div className={'grid'}>
        <Link className={'card'} href='/'>
          Ir a Home
        </Link>
      </div>
    </MainLayout>
  )
}
