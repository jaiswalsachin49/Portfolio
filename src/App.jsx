import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <Work />
      <section id="story" className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-5xl">Story Section</h1>
      </section>
      <section id="chat" className="h-screen bg-gray-700 text-white flex items-center justify-center">
        <h1 className="text-5xl">Chat Section</h1>
      </section>
    </div>
  )
}

export default App
