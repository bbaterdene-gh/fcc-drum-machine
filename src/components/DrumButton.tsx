
export const DrumButton = (props: DrumButtonProps) => {
  return (
    <div className="h-14 w-16 p-4 text-center bg-grey rounded shadow-xl-rb">
      <span>{props.children}</span>
    </div>
  )
}

type DrumButtonProps = {
  children: string
}