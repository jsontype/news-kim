import './global.css'
import type { Metadata } from 'next'
import Footer from './components/organisms/Footer'
import { Navbar } from './components/organisms/Nav'
import ReactRouterProvider from './_provider/ReactRouterProvider'
import { RecoilRoot } from 'recoil'
import RecoilProvider from './_provider/RecoilProvider'

export const metadata: Metadata = {
  title: {
    default: 'news-kim',
    template: '%s | news-kim',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <RecoilProvider>
            <ReactRouterProvider>
              <Navbar />
              {children}
              <Footer />
            </ReactRouterProvider>
          </RecoilProvider>
        </main>
      </body>
    </html>
  )
}
