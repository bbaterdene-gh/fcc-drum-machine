import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { selectBankKit, toggleBank } from "../features/bank/bankSlice"
import { changeDescription, selectDescription } from "../features/description/descriptionSlice"
import { selectPower, togglePower } from "../features/power/powerSlice"
import { changeVolume, selectVolume } from "../features/volumeSlice"

export const DrumControl = () => {
  const kit = useAppSelector(selectBankKit)
  const power = useAppSelector(selectPower)
  const description = useAppSelector(selectDescription)
  const volume = useAppSelector(selectVolume)
  const dispatch = useAppDispatch()

  const handleVolumeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeVolume(e.target.valueAsNumber))
    dispatch(changeDescription(`Volume: ${(e.target.valueAsNumber*100).toFixed()}`))
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeDescription(''))
    }, 1000)
  }, [volume, dispatch, kit])

  useEffect(() => {
    const displayString = kit.split('-').map( str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
    dispatch(changeDescription(displayString))
  }, [kit, dispatch])

  return (
    <div className="mt-20 text-center">
      <div className="flex flex-col items-center">
        <span className="text-xs">Power</span>
        <div className="select-none relative w-9" onClick={() => dispatch(togglePower())}>
          <input type="checkbox"
          className={`cursor-pointer appearance-none absolute bg-blue w-5 h-4 border-2 border-current ${power ? 'right-0' : 'left-0'}`}
          defaultChecked={power}/>
          <label className="cursor-pointer bg-black block h-4"></label>
        </div>
      </div>
      <div className="mt-2 h-8 bg-grey w-4/6 mx-auto table">
        <span className="align-middle table-cell">{description}</span>
      </div>
      <div className="mt-4">
        <input type="range" min="0" max="1" step="0.01" defaultValue={volume} onChange={(e) => handleVolumeRange(e)}
        className="appearance-none w-3/4 cursor-pointer bg-charcoal h-2 shadow-sm-lr"/>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <span className="text-xs">Bank</span>
        <div className="select-none relative w-9" onClick={() => dispatch(toggleBank())}>
          <input type="checkbox"
          className={`cursor-pointer appearance-none absolute bg-blue w-5 h-4 border-2 border-current ${kit === 'smooth-piano-kit' ? 'right-0' : 'left-0'}`}
          defaultChecked={kit === 'smooth-piano-kit'}/>
          <label className="cursor-pointer bg-black block h-4"></label>
        </div>
      </div>
    </div>
  )
}
