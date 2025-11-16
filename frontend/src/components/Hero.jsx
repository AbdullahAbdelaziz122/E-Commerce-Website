import React from "react";
import hero from "../assets/images/home/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1]">
      
      {/* Desktop: Two columns | Mobile: Single column */}
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT SIDE - Content */}
       
       <div className="w-full lg:w-3/5 px-4 pt-10  lg:px-10 lg:pt-20">
          
          
          {/* header */}
          <div className="font-bold text-4xl leading-[34px] md:text-5xl md:leading-[60px] text-black ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </div>

            {/* subheader */}
          <div className="text-sm pt-3 text-stone-500 max-w-[545px] md:text-base ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </div>

          {/* button */}
          <div className="mt-6">
            <button className="flex items-center justify-center gap-3 w-full md:w-1/2 md:mx-auto lg:mx-0 lg:w-auto bg-black text-white font-medium py-4 px-[54px] rounded-full hover:bg-gray-800 transition-colors active:scale-95">
              Shop Now
            </button>
          </div>



          {/* stats section */}
            <div className="flex flex-wrap justify-center items-start p-4 mt-8 gap-10 xs:gap-5 ">
            
            {/* Stat 1 */}
            <div className="flex-1 min-w-[120px] min-h-[92px] flex flex-col  md:max-w-max text-left p-3 rounded">
                <div className="text-3xl md:text-4xl font-bold text-black">200+</div>
                <div className="text-xs md:text-sm mt-3 text-stone-500 whitespace-nowrap">International Brands</div>
            </div>

            {/* Divider */}
            <div className="hidden xs:block h-[92px] w-[2px] bg-stone-500"></div>

            {/* Stat 2 */}
             <div className="flex-1 min-w-[120px] min-h-[92px] flex flex-col  md:max-w-max text-left p-3 rounded">
                <div className="text-3xl md:text-4xl font-bold text-black">2,000+</div>
                <div className="text-xs md:text-sm mt-3 text-stone-500 whitespace-nowrap">High-Quality Products</div>
            </div>

            {/* Divider */}
            <div className="hidden  ss:block h-[92px] w-[2px] bg-stone-500"></div>
            {/* Stat 3 */}
             <div className="flex-1 min-w-[120px] min-h-[92px] flex flex-col  md:max-w-max text-left p-3 rounded">
                <div className="text-3xl md:text-4xl font-bold text-black">30,000+</div>
                <div className="text-xs md:text-sm mt-3 text-stone-500 whitespace-nowrap">Happy Customers</div>
            </div>

            </div>

        
        </div>

        {/* RIGHT SIDE - Hero Image (Desktop) / Bottom (Mobile) */}
        <div className="w-full lg:w-2/5 lg:items-start lg:justify-end">
          <img
            src={hero}
            alt="Fashion models wearing stylish clothing"
            className="w-150 h-150 object-cover md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mt-10 md:mt-5 ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
