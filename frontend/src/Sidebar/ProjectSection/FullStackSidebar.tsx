// Figure out how we can make so that when the user clicks parallax design on the side bar it emulates a new page on the main section
import { useContext } from "react"
import { MainPageContext } from "../../MainPage/context/MainPageContext";
import { MessageIcon } from "../svg/MessageIcon";
import { FullStackSectionContext } from "../Context/FullStackSection/FullStackSection";
import { WebDesignSectionContext } from "../Context/WebDesignSectionContext/WebDesignSectionContext";

export const BackendLIComponent = () => {
  //Context
  const {setDidUserClickFullStackSection} = useContext(FullStackSectionContext);
  const {setDidUserClickWebDesign} = useContext(WebDesignSectionContext)
  const {setIsOnLoadUIFinished} = useContext(MainPageContext)

  const handleClickEvent = () => {
    setIsOnLoadUIFinished(false)
    setDidUserClickWebDesign(false)
    setDidUserClickFullStackSection(true)
  }
  return (
    <li className="relative z-[15] opacity-1 h-auto ">
      <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 bg-[#252323] group" onClick={handleClickEvent}>
        <MessageIcon/>
        <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
          FullStack
        </div>
      </div>
  </li>
  )
}
