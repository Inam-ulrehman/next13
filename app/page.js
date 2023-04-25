import { Inter } from 'next/font/google'
import Landing from './components/home/landing/landing'
import LandingTwo from './components/home/landingTwo/landingTwo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Landing />
      <LandingTwo />
    </main>
  )
}
