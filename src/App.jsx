import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import WhyJuniors from './components/WhyJuniors'
import Features from './components/Features'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import EarlyAccessPage from './components/EarlyAccessPage'
import TermsOfUse from './components/TermsOfUse'
import PrivacyPolicy from './components/PrivacyPolicy'

const Home = () => (
  <main>
    <Navbar />
    <Hero />
    <StatsBand />
    <WhyJuniors />
    <Features />
    <Comparison />
    <Pricing />
    <CTA />
    <Footer />
  </main>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/early-access" element={<EarlyAccessPage />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
