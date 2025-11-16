import React from 'react'
import Title from './Title.jsx';
import RenderStars from './RenderStars.jsx';

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, CircleCheck } from 'lucide-react';

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
    aria-label="Previous"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
    aria-label="Next"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const Reviews = () => {
  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const reviewsList = [
    {
      id: 1,
      name: 'Sarah M.',
      comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rate: 5
    },
    {
      id: 2,
      name: 'Alex K.',
      comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rate: 5
    },
    {
      id: 3,
      name: 'James L.',
      comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rate: 5
    },
    {
      id: 4,
      name: 'Mooen',
      comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rate: 4
    },
  ];

  return (
    <section className='py-12 mb-20 px-4 md:px-16 lg:px-24'>
      {/* Title */}
      <div className='flex justify-start mb-8'>
        <Title title="OUR HAPPY CUSTOMERS" />
      </div>

      {/* Slider Container */}
      <div className='relative px-8 md:px-12'>
        <Slider {...settings}>
          {reviewsList.map((review) => (
            <div key={review.id} className='px-3'>
              {/* Review Card */}
              <div className='flex flex-col w-full min-h-[240px] bg-white rounded-2xl border border-stone-300 p-6 gap-3'>
                
                {/* Stars */}
                <div className='flex items-center gap-1'>
                  <RenderStars rate={review.rate} />
                </div>
                
                {/* Name with verified badge */}
                <div className='flex flex-row items-center gap-2'>
                  <h3 className='font-bold text-base md:text-lg'>
                    {review.name}
                  </h3>
                  <CircleCheck className='w-5 h-5 fill-green-600 text-white' />
                </div>
                
                {/* Comment */}
                <p className='text-sm md:text-base text-stone-600 line-clamp-4'>
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Reviews;