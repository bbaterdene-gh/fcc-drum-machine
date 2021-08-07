import { BankPayload } from "../features/bank/bankType"

export const DrumButton = (props: DrumButtonProps) => {

  const handleClick = () => {
    new Audio(props.bank.url).play()
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