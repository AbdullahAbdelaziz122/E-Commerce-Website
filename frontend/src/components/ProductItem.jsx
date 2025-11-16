import React from 'react'
import { useShop } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import RenderStars from './RenderStars';

const ProductItem = ({ id, image, name, price, rating }) => {
  const { currency } = useShop();

  // Format price to 2 decimal places
  const formattedPrice = price.toFixed(2);

//   // Render star rating
  
  return (
    <Link 
      to={`/product/${id}`} 
      className='group block transition-transform duration-300 hover:scale-[1.02]'
      aria-label={`View details for ${name}`}
    >
      <div className='flex flex-col gap-3 w-full'>
        
        {/* Product Image Container */}
        <div className='bg-[#F0F0F0] w-full aspect-square rounded-2xl overflow-hidden relative'>
          <div className='absolute inset-0 flex items-center justify-center p-6 md:p-8'>
            <img 
              src={image} 
              alt={name}
              loading="lazy"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
        </div>
      
        {/* Product Details */}
        <div className='flex flex-col gap-2'>
          {/* Name */}
          <h3 className='font-bold text-base md:text-lg text-black line-clamp-2 group-hover:text-gray-700 transition-colors'>
            {name}
          </h3>

          {/* Rating */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-0.5' aria-label={`Rated ${rating.rate} out of 5`}>
              <RenderStars rate={rating.rate}/>
            </div>
            <span className='text-sm text-black'>
              {rating.rate}/5
            </span>
          </div>

          {/* Price */}
          <div className='flex items-center gap-2'>
            <p className='font-bold text-xl md:text-2xl text-black'>
              {currency}{formattedPrice}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem