import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import WhiteLayout from '@/components/layouts/WhiteLayout'

export default function AboutPage() {
  return (
    <>
      <div className={'description'}>
        <h1>About Page</h1>
      </div>

      <div className={'grid'}>
        <Link className={'card'} href='/'>
          Ir a Home
        </Link>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <WhiteLayout>{page}</WhiteLayout>
    </MainLayout>
  )
}
