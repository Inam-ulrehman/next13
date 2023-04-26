import { Inter } from 'next/font/google'
import Landing from './components/home/landing/landing'
import LandingTwo from './components/home/landingTwo/landingTwo'
import LandingThird from './components/home/landingThird/landingThird'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Landing />
      <LandingTwo />
      <LandingThird />
    </main>
  )
}
