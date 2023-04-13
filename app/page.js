import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Landing from './components/home/landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello</h1>
        <Landing />
      </div>
    </main>
  )
}
