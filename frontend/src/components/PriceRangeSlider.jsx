import React from 'react'
import { getTrackBackground, Range } from "react-range";


const PriceRangeSlider = ({localValues, setLocalValues, currency}) => {
    
  
    return (
    <div className = 'mt-10 p-4'>
    <Range
      label="Select your value"
      step={100}
      min={0}
      max={100000}
      values={localValues}
      onChange={(values) => setLocalValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            background: getTrackBackground({
                values: localValues,
                colors: ["#d1d5db", "#000000", "#d1d5db"],
                min: 0,
                max: 99999
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            backgroundColor: "#000000",
            border: "2px solid white",
            borderRadius: "50%",
            boxShadow:"0px 2px 6px #aaa"

          }}
        />
      )}
    />
    <div className='flex flex-row justify-between mt-5 '>
        <span>{currency}{localValues[0]}</span>
        <span>{currency}{localValues[1]}</span>
    </div>
    </div>
  )
}

export default PriceRangeSlider