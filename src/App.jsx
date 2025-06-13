import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Skills from './components/Skills'
import Story from './components/Story'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Story />
      <Footer />
    </div>
  )
}

export default App
