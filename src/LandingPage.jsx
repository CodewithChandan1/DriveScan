import React from 'react'
// import { Header } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default function LandingPage() {
    
  return (
      <div className="min-h-screen bg-white">
          <Header />
          <main>
              <Hero />
              <Features />
              <Services />
              <FAQ />
          </main>
          <Footer />
      </div>
  )
}
