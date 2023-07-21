import { SvgComponent } from "../../shared/SvgComponent"
import { Message } from "../svg/Message"

export const PastThirtyDaysSection = () => {
  return (
    <div className="relative h-auto opacity-1">
      <div className="sticky top-0 z-16 opacity-1">
        <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-[#252323]">
          Past 30 days
        </h3>
      </div>
      <ol>
        <li className="relative z-[15] opacity-1 h-auto ">
          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group">
            <SvgComponent icon={Message}/>
            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
              Twitter(WIP)
            </div>
          </a>
        </li>
        <li className="relative z-[15] opacity-1 h-auto ">
          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group" href="https://stackoverflow.com/questions/356809/best-way-to-center-a-div-on-a-page-vertically-and-horizontally" target="_blank">
            <SvgComponent icon={Message}/>
            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
              How to center div
            </div>
          </a>
        </li>
      </ol>
    </div>
  )
}
