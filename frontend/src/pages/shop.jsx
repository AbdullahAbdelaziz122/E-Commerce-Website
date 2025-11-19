import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, ListFilter } from "lucide-react";
import { X } from "lucide-react";
const Collection = () => {
  const [showFilter, setShowFiliter] = useState(false);
  const clothes = [
    {
      id: 1,
      name: "T-shirts",
    },
    {
      id: 2,
      name: "Shorts",
    },
    {
      id: 3,
      name: "Shirts",
    },
    {
      id: 4,
      name: "Hoodie",
    },
    {
      id: 5,
      name: "Jeans",
    },
  ];

  return (
    // Shop divided left for filter and right for collection
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {showFilter && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setShowFiliter(false)}
        />
      )}

      {/* Left: Filter Options */}
      <div
        className={`
        sm:min-w-60 border border-gray-300 rounded-2xl px-5 py-3  
        bg-white z-50 sm:z-0 
        absolute sm:static sm:h-auto sm:w-auto
        ${showFilter ? "fixed top-1/6 left-0 h-screen w-screen" : "hidden"}
        sm:block
        `}
      >
        <div className="flex flex-row justify-between items-center">
          <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
            FILTERS
          </p>
          <ListFilter className="border border-gray-300 p-2 w-8 h-8 rounded-full cursor-pointer hidden sm:block" />
          <X
            onClick={() => setShowFiliter(false)}
            className="border border-gray-300 p-2 w-8 h-8 rounded-full cursor-pointer sm:hidden"
          />
        </div>

        <hr className="my-5 text-gray-300" />
        {/* Category filter */}
        <div className="">
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            {clothes.map((type) => {
              return (
                <p key={type.id} className="flex gap-2">
                  <input className="w-3" type="checkbox" value={type.name} />{" "}
                  {type.name}
                </p>
              );
            })}
          </div>
        </div>
        
        <hr className="my-5 text-gray-300" />
        {/* Price filter */}
        <div className="">
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sm font-medium">Prices</p>
            <ChevronRight className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            {/* Content */}
          </div>
        </div>

        <hr className="my-5 text-gray-300" />
        {/* Color filter */}
        <div className="flex">
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sm font-medium">Colors</p>
            <ChevronRight className="w-4 h-4 cursor-pointer" />
          </div>
        
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            {/* Content */}
          </div>
        </div>

        <hr className="my-5 text-gray-300" />
        {/* Size filter */}
        <div className="">
           <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sm font-medium">Size</p>
            <ChevronRight className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            {/* Content */}
          </div>
        </div>

        <hr className="my-5 text-gray-300" />
        {/* Dress Style filter */}
        <div className="">
           <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sm font-medium">Dress Style</p>
            <ChevronRight className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            {/* Content */}
          </div>
        </div>

        


      </div>


      

      {/* Right Side Collection */}
      <div className="flex flex-col p-4">
        {/* Collection header */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center gap-3">
            <p className="text-lg">Casual</p>
            <p className="text-sm text-gray-500">
              Showing 1-10 of 100 Products
            </p>
          </div>
          <ListFilter
            onClick={() => setShowFiliter(!showFilter)}
            className="border border-gray-300 p-2 w-8 h-8 rounded-full cursor-pointer sm:hidden"
          />
        </div>
        {/* products */}
      </div>
    </div>
  );
};

export default Collection;
