import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import casual from '../assets/images/categories/casual.png'
import formal from '../assets/images/categories/formal.png'
import party from '../assets/images/categories/party.png'
import gym from '../assets/images/categories/gym.png'

const Categories = () => {
  const categories = [
    { 
      name: 'Casual', 
      image: casual, 
      link: '/category/casual',
      gridClass: 'md:col-span-1',
      height: 'h-72'
    },
    { 
      name: 'Formal', 
      image: formal, 
      link: '/category/formal',
      gridClass: 'md:col-span-2', 
      height: 'h-60'
    },
    { 
      name: 'Party', 
      image: party, 
      link: '/category/party',
      gridClass: 'md:col-span-2',
      height: 'h-60'
    },
    { 
      name: 'Gym', 
      image: gym, 
      link: '/category/gym',
      gridClass: 'md:col-span-1',
      height: 'h-72'

    },
  ];

  return (
    <section className='py-12 px-4 md:px-16 lg:px-24'>
      <div className='bg-[#F0F0F0] rounded-3xl p-8 md:p-16'>
        
        {/* Title */}
        <div className='flex justify-center text-center mb-12'>
          <Title title="BROWSE BY DRESS STYLE" />
        </div>

        {/* Categories */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5'>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className={`group relative overflow-hidden rounded-2xl transition-all hover:shadow-2xl ${category.gridClass}`}
            >
              {/* Image Container */}
              <div className={`relative h-72 overflow-hidden bg-white`}>
                <img 
                  src={category.image} 
                  alt={`${category.name} style clothing`}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                />
                
                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
              </div>

              {/* Category Label - Top Left */}
              <div className='absolute top-6 left-6 z-10'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:scale-105 transition-transform'>
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
