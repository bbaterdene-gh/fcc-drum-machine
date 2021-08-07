import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { BankPayload } from "../features/bank/bankType"
import { changeDescription } from "../features/description/descriptionSlice"
import { selectVolume } from "../features/volumeSlice"

export const DrumButton = (props: DrumButtonProps) => {
  const volume = useAppSelector(selectVolume)
  const dispatch = useAppDispatch()

  const playAudio = () => {
    const audio = new Audio(props.bank.url)
    audio.volume = volume
    audio.play()
  }

  const displayId = () => {
    dispatch(changeDescription(props.bank.id.split('-').join(' ')))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === props.bank.keyTrigger.toLowerCase()) {
        playAudio()
        displayId()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleClick = () => {
    playAudio()
    displayId()
  }

  return (
    <div
      onClick={handleClick}
      className="h-14 w-16 p-4 text-center bg-grey rounded shadow-xl-rb">
      <span>{props.children}</span>
    </div>
  )
}

type DrumButtonProps = {
  children: string,
  bank:     BankPayload,
}