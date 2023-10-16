import React from 'react'
import Landing from './Landing'
import Header from './components/Header'
import Hello from './Hello'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div >
      <Header/>
      <Landing/>
      <Hello/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App