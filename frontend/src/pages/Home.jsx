import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <NewArrivals />
      {/* Divider */}
      <hr className=" border-gray-300" />
      <TopSelling />

    </div>
  )
}

export default Home
