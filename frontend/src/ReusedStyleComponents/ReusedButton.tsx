interface ReusedButtonProps {
  textToDisplay:string
  icon?:string
}
export const ReusedButton = ({textToDisplay, icon}: ReusedButtonProps) => {
  return (
    <button className="border-2 w-auto h-auto p-1">
      <div className="flex flex-row text-center justify-center text-white">
        <div className="flex justify-center items-center">{textToDisplay}</div>
        {icon ? <img className="w-[2rem] p-1" src={icon}></img> : undefined}
      </div>
    </button>
  )
}
