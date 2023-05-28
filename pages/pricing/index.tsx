import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <h1>Pricing Page</h1>
      </div>

      <div className={'grid'}>
        <Link className={'card'} href='/about'>
          Ir a About
        </Link>
      </div>
    </MainLayout>
  )
}
