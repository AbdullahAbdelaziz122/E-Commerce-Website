import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='inline-flex gap-2 items-center mt-20 mb-5 justify-center'>
      <p className="font-bold text-4xl  md:text-5xl text-black font-['Alfa_Slab_One']">{title}</p>
    </div>
  )
}

export default Title
