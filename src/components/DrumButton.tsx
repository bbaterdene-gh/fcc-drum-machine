import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { BankPayload } from "../features/bank/bankType"
import { changeDescription } from "../features/description/descriptionSlice"
import { selectPower } from "../features/power/powerSlice"
import { selectVolume } from "../features/volumeSlice"

export const DrumButton = (props: DrumButtonProps) => {
  const power = useAppSelector(selectPower)
  const volume = useAppSelector(selectVolume)
  const dispatch = useAppDispatch()
  const [isPressed, setIsPressed] = useState(false)

  const playAudio = () => {
    const audio = document.getElementById(props.bank.keyTrigger) as HTMLAudioElement
    audio.currentTime = 0
    audio.volume = volume
    audio.play()
  }

  const displayId = () => {
    dispatch(changeDescription(props.bank.id.split('-').join(' ')))
  }

  const activateButton = () => {
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
    }, 100)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === props.bank.keyTrigger.toLowerCase()) {
        if (power) {
          playAudio()
          displayId()
        }
        activateButton()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleClick = () => {
    if (power) {
      playAudio()
      displayId()
    }
    activateButton()
  }

  return (
    <div
      id={`drum-pad-${props.children}`}
      onClick={handleClick}
      className={`drum-pad h-14 w-16 p-4 text-center rounded ${isPressed ? 'bg-yellow-400' : 'bg-grey shadow-xl-rb'}`}>
      <span>{props.children}</span>
      <audio src={props.bank.url} className="clip" id={props.bank.keyTrigger}></audio>
    </div>
  )
}

type DrumButtonProps = {
  children: string,
  bank:     BankPayload,
}