import React, { useState } from 'react'
import { useShop } from '../context/ShopContext.jsx'
import Title from './Title.jsx';

const NewArrivals = () => {
  
    const {products} = useShop();
    
    // last 4 products
    const [newArrivals, setNewArrivals] = useState([]);

    useState(()=> {
        setNewArrivals(products.slice(-4));
    },[])

    return (
    <div className='flex justify-center'>
      <Title title="New Arrivals" />
    </div>
  )
}

export default NewArrivals
