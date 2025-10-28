import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    </main>
  )
}

export default App