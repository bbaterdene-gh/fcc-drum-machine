import { DrumButton } from './DrumButton'

export const DrumPad = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      <DrumButton>Q</DrumButton>
      <DrumButton>W</DrumButton>
      <DrumButton>E</DrumButton>
      <DrumButton>A</DrumButton>
      <DrumButton>S</DrumButton>
      <DrumButton>D</DrumButton>
      <DrumButton>Z</DrumButton>
      <DrumButton>X</DrumButton>
      <DrumButton>C</DrumButton>
    </div>
  )
}
