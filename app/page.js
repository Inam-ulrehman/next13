import { Inter } from 'next/font/google'
import Landing from './components/home/landing/landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Landing />
    </main>
  )
}
