import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Collection = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
          <p className='my-2 flex items-center text-2xl  cursor-pointer'>Filter</p>
      </div>
    </div>
  )
}

export default Collection
