// Figure out how we can make so that when the user clicks parallax design on the side bar it emulates a new page on the main section
import { useContext } from "react"
import { MainPageContext } from "../../MainPage/context/MainPageContext";
import { MessageIcon } from "../svg/MessageIcon";
import { BackendSectionContext } from "../SidebarComponents/BackendSectionContext/BackendSectionContext";
import { FrontendSectionContext } from "../SidebarComponents/FrontendSectionContext/FrontendSectionContext";

export const BackendLIComponent = () => {
  //Context
  const {setDidUserClickBackendSection} = useContext(BackendSectionContext);
  const {setDidUserClickFrontend} = useContext(FrontendSectionContext)
  const {setIsOnLoadUIFinished} = useContext(MainPageContext)

  const handleClickEvent = () => {
    setIsOnLoadUIFinished(false)
    setDidUserClickFrontend(false)
    setDidUserClickBackendSection(true)
  }
  return (
    <li className="relative z-[15] opacity-1 h-auto ">
      <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 bg-[#252323] group" onClick={handleClickEvent}>
        <MessageIcon/>
        <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
          Backend
        </div>
      </div>
  </li>
  )
}
