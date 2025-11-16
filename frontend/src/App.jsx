import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/cart.jsx'
import Order from './pages/Order.jsx'
import Shop from './pages/shop.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Order/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
    </div>
  )
}

export default App
 