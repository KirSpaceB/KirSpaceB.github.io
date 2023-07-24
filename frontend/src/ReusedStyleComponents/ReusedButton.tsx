interface ReusedButtonProps {
  textToDisplay:string
  icon?:string
  link?:string
}
export const ReusedButton = ({textToDisplay, icon,link}: ReusedButtonProps) => {
  return (
    <a className="border-2 w-auto h-auto p-1 cursor-pointer" target="_blank" href={link}>
      <div className="flex flex-row text-center justify-center text-white">
        <div className="flex justify-center items-center">{textToDisplay}</div>
        {icon ? <img className="w-[2rem] p-1" src={icon}></img> : undefined}
      </div>
    </a>
  )
}
