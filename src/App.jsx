import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Category from './Components/Category/Category'
import CarouselsEffect from './Components/Carousel/Carousel'


function App() {

  return (
    <div>
     <Header/>
     <CarouselsEffect/>
     <Category/>
    </div>
  )
}

export default App
