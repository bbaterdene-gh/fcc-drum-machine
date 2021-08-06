import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPower, toggle } from "../features/power/powerSlice"

export const DrumControl = () => {
  const [bankOn, setBankOn] = useState(false)
  const [volumeRange, setVolumeRange] = useState('0.64')
  const power = useSelector(selectPower)
  const dispatch = useDispatch()

  const handleBankSwitch = () => {
    setBankOn(!bankOn)
  }

  const handleVolumeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolumeRange(e.target.value)
  }

  return (
    <div className="mt-20 text-center">
      <div className="flex flex-col items-center">
        <span className="text-xs">Power</span>
        <div className="select-none relative w-9" onClick={() => dispatch(toggle())}>
          <input type="checkbox"
          className={`cursor-pointer appearance-none absolute bg-blue w-5 h-4 border-2 border-current ${power ? 'right-0' : 'left-0'}`}
          defaultChecked={power}/>
          <label className="cursor-pointer bg-black block h-4"></label>
        </div>
      </div>
      <div className="mt-2 h-8 bg-grey w-3/5 mx-auto table">
        <span className="align-middle table-cell">{`Start`}</span>
      </div>
      <div className="mt-4">
        <input type="range" min="0" max="1" step="0.01" defaultValue={volumeRange} onChange={(e) => handleVolumeRange(e)}
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
