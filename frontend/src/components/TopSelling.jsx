import React from 'react'
import { useShop } from '../context/ShopContext.jsx'
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
import { Link } from 'react-router-dom';
const TopSelling = () => {
  const { products, loading } = useShop();
  const topSelling = products.slice(4, 8);

  if (loading) {
    return (
      <section className='py-12 px-4 md:px-16 lg:px-24'>
        <div className='flex justify-center mb-8'>
          <Title title="Top Selling" />
        </div>
        <div className='text-center text-gray-500'>Loading products...</div>
      </section>
    );
  }

  return (
    <section className='py-12 px-4 md:px-16 lg:px-24'>
      {/* Title */}
      <div className='flex justify-center mb-8'>
        <Title title="Top Selling" />
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {topSelling.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      {/* View All Button */}
      <Link to="/new-arrivals" className='flex justify-center mt-8'>
        <button className='px-12 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors font-medium cursor-pointer'>
          View All
        </button>
      </Link>
    </section>
  )
}

export default TopSelling;