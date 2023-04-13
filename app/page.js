'use client'
import { Inter } from 'next/font/google'
import Landing from './components/home/landing'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home page</h1>

        <Link href='/about'>About page</Link>
        <Landing />
      </div>
    </main>
  )
}
