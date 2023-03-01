import { useState } from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import "./Style.scss"
import Advertisement from './Components/Advertisement'
import Home from './Pages/Home'

  
const App =() =>{
  return (
    <>
      <Header />
      <Nav />
      <Advertisement />
    </>
  )
}
export default App;
