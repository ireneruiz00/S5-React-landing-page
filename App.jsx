import { useState } from 'react'
import './App.css'
import Navbar from './src/components/NavBar/Navbar'
import Hero from './src/components/Hero/Hero'
import Features from './src/components/Features/Features'
import Download from './src/components/Download/Download'
import FAQs from './src/components/FAQs/FAQs'
import Footer from './src/components/Footer/Footer'
import LastSection from './src/components/Last Section/LastSection'

function App() {

  
  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <Download/>
     <FAQs/>
     <LastSection/>
     <Footer/>
    </>
  )
}

export default App
