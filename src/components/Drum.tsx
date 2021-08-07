import { FaFreeCodeCamp } from 'react-icons/fa' 
import { DrumControl } from './DrumControl'
import { DrumPad } from './DrumPad'



export const Drum = () => {
  return (
    <div className="h-4/6 md:h-80 border-4 w-9/12 md:w-124 m-auto mt-28 border-yellow-400 bg-dark-gray" id="drum-machine">
      <div className="flex justify-end items-center italic font-bold mb-2">
        <span className="text-lg">FCC</span>
        <span className="inline text-2xl pl-2 pr-1">
          <FaFreeCodeCamp />
        </span>
      </div>
      <div className="w-60 md:w-11/12 m-auto flex flex-col h-5/6 md:flex-row" id="display">
        <DrumPad />
        <DrumControl />
      </div>
    </div>
  )
}
