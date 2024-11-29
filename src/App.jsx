import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Category from './Components/Category/Category'
import CarouselsEffect from './Components/Carousel/Carousel'
import Product from './Components/Product/Product'


function App() {

  return (
    <div>
     <Header/>
     <CarouselsEffect/>
     <Category/>
     <Product/>
    </div>
  )
}

export default App
