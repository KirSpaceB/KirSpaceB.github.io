import { SvgComponent } from "../../shared/SvgComponent"
import { CloseSideBar } from "../svg/CloseSideBar"
import { PlusSign } from "../svg/PlusSign"
export const NewChat = () => {
  return (
    <div className="mb-1 flex flex-row gap-2">
      <a 
        href="" 
        className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow"
      >
        <SvgComponent icon={PlusSign}/>
        New Chat
      </a>
      <span>
        <a className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 items-center justify-center bg-[#252323] w-full">
          <SvgComponent icon={CloseSideBar}/>
        </a>
      </span>
    </div>
  )
}
