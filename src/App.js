import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    )
  }
}

export default App