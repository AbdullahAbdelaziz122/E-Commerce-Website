import { Star, StarHalf } from 'lucide-react';



const RenderStars = ({rate}) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className="w-4 h-4 fill-yellow-400 text-yellow-400" 
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          className="w-4 h-4 fill-yellow-400 text-yellow-400" 
        />
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rate);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className="w-4 h-4 text-gray-300" 
        />
      );
    }

    return stars;
  };

export default RenderStars;