import { useAppSelector } from "../app/hooks"
import { BankPayload } from "../features/bank/bankType"
import { selectVolume } from "../features/volumeSlice"

export const DrumButton = (props: DrumButtonProps) => {
  const volume = useAppSelector(selectVolume)

  const playAudio = () => {
    const audio = new Audio(props.bank.url)
    audio.volume = volume
    audio.play()
  }

  return (
    <div
      onClick={playAudio}
      className="h-14 w-16 p-4 text-center bg-grey rounded shadow-xl-rb">
      <span>{props.children}</span>
    </div>
  )
}

type DrumButtonProps = {
  children: string,
  bank:     BankPayload,
}