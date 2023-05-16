import Footer from './components/footer/footer'
import Header from './components/header/header'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'CarMax - Shop for used cars, then buy online or at a store',
  description: `CarMax's Love Your Car Guarantee is our way of helping you buy a car that truly fits your life, with 30-day money back returns and 24-hour test drives.`,
}
// test

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
