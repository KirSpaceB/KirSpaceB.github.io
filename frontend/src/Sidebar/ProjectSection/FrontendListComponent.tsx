import { useContext } from "react"
import { WebDesignSectionContext } from "../Context/WebDesignSectionContext/WebDesignSectionContext"
import { MainPageContext } from "../../MainPage/context/MainPageContext";
import { MessageIcon } from "../svg/MessageIcon";

export const FrontendListComponent = () => {
  const {setDidUserClickWebDesign} = useContext(WebDesignSectionContext);
  const {setIsOnLoadUIFinished} = useContext(MainPageContext)
  const handleClickEvent = () => {
    setIsOnLoadUIFinished(false)
    setDidUserClickWebDesign(true)
  }

  return (
    <li className="relative z-[15] opacity-1 h-auto ">
      <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 bg-[#252323] group" onClick={handleClickEvent}>
        <MessageIcon/>
        <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
          Web Design
        </div>
      </div>
    </li>
  )
}