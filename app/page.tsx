import Image from 'next/image'
import TopHero from './topHero'
import About from './about'
import Contact from './contact'
import Footer from './footer'
import SickAnimation from './sickAnimation'
import Script from 'next/script'
import NavBar from './navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-blue-100">
      
      {TopHero()}
      {NavBar()}
      {About()}
      {Contact()}
      {Footer()}
      <script
        src="/static/animation_physics.js"
      />
    </main>
  )
}
