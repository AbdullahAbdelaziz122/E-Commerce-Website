import React from 'react'
import versace from '../assets/images/brands/versace.svg'
import zara from '../assets/images/brands/zara.svg'
import gucci from '../assets/images/brands/gucci.svg'
import prada from '../assets/images/brands/prada.svg'
import calvinklein from '../assets/images/brands/calvinklein.svg'

const Brands = () => {
  const brands = [
    { name: 'Versace', logo: versace },
    { name: 'Zara', logo: zara },
    { name: 'Gucci', logo: gucci },
    { name: 'Prada', logo: prada },
    { name: 'Calvin Klein', logo: calvinklein },
  ];

  return (
    // Brand logos section
    <div className='bg-black py-10 md:py-12 lg:py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-6 lg:gap-12 lg:mx-20'>
          {brands.map((brand) => (
            <div key={brand.name} className='flex items-center justify-center'>
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                className='h-6 md:h-8 lg:h-10 w-auto max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands