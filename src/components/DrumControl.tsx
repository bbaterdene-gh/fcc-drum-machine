import { useState } from "react"

export const DrumControl = () => {
  const [powerOn, setPowerOn] = useState(false)
  const [bankOn, setBankOn] = useState(false)
  console.log(`here ${powerOn}`)
  console.log(`here ${bankOn}`)
  const handlePowerSwitch = () => {
    setPowerOn(!powerOn)
  }

  const handleBankSwitch = () => {
    setBankOn(!bankOn)
  }

  return (
    <div className="mt-20 text-center">
      <div className="flex flex-col items-center">
        <span className="text-xs">Power</span>
        <div className="select-none relative w-9" onClick={handlePowerSwitch}>
          <input type="checkbox"
          className={`cursor-pointer appearance-none absolute bg-blue w-5 h-4 border-2 border-current ${powerOn ? 'right-0' : 'left-0'}`}
          defaultChecked={powerOn}/>
          <label className="cursor-pointer bg-black block h-4"></label>
        </div>
      </div>
      <div className="mt-2 h-8 bg-grey w-3/5 mx-auto"></div>
      <div className="mt-4">
        <input type="range" min="0" max="1" step="0.0.1" value="0.64"
        className="appearance-none w-3/4 cursor-pointer bg-charcoal h-2 shadow-sm-lr"/>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <span className="text-xs">Bank</span>
        <div className="select-none relative w-9" onClick={handleBankSwitch}>
          <input type="checkbox"
          className={`cursor-pointer appearance-none absolute bg-blue w-5 h-4 border-2 border-current ${bankOn ? 'right-0' : 'left-0'}`}
          defaultChecked={bankOn}/>
          <label className="cursor-pointer bg-black block h-4"></label>
        </div>
      </div>
    </div>
  )
}