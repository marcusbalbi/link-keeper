import React from 'react'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'
import './assets/styles/main.scss'
const App = () => {
  return (
    <div className="root" >
      <Header />
      <Main />  
      <Footer />
    </div>
  )
}

export default App