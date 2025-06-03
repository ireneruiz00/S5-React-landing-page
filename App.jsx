import { useState } from 'react'
import './App.css'
import Navbar from './src/components/01-NavBar/Navbar'
import Hero from './src/components/02-Hero/Hero'
import Features from './src/components/03-Features/Features'
import Download from './src/components/05-Download/Download'
import FAQs from './src/components/07-FAQs/FAQs'
import Footer from './src/components/08-Footer/Footer'
import LastSection from './src/components/09-Last Section/LastSection'

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
