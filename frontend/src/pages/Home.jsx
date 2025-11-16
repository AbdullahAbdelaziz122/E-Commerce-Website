import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import Categories from '../components/Categories'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <NewArrivals />
      {/* Divider */}
      <hr className=" border-gray-300" />
      <TopSelling />

      <Categories /> 
      <Reviews />

      <Footer/>
    </div>
  )
}

export default Home
