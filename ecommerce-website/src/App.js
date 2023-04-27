import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/about/About'
import Cart from './component/cart/Cart'

import Contact from './component/contact/Contact'
import Errorpage from './component/Errorpage'
import Home from './component/home/Home'
import Navbar from './component/navbar/Navbar'
import Products from './component/products/Products'
import CartsDetails from './component/CartsDetails'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/carts/:id' element={<CartsDetails />} />
            <Route path='*' element={<Errorpage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App