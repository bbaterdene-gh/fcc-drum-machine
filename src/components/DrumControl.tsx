import React from 'react'

export const DrumControl = () => {
  return (
    <div className="mt-auto text-center">
      <div>
        <span className="text-xs">Power</span>
      </div>
      <div className="mt-2 h-8 bg-grey w-3/5 mx-auto"></div>
      <div className="mt-4">
        <input type="range" min="0" max="1" step="0.0.1" value="0.64"
        className="appearance-none w-3/4 cursor-pointer bg-charcoal h-2 shadow-sm-lr"/>
      </div>
      <div className="mt-2">
        <span className="text-xs">Bank</span>
      </div>
    </div>
  )
}
