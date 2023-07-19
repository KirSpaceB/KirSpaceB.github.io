// Figure out how we can make so that when the user clicks parallax design on the side bar it emulates a new page on the main section
import { useContext } from "react"
import { FrontendSectionContext } from "./SidebarComponents/FrontendSectionContext/Context"
import { MainPageContext } from "../MainPage/context/MainPageContext";

export const FrontendSection = () => {
  const {setDidUserclickParallaxDesignOnSideBar} = useContext(FrontendSectionContext);
  const {setIsOnLoadUIFinished} = useContext(MainPageContext)
  const handleClickEvent = () => {
    setIsOnLoadUIFinished(false)
    setDidUserclickParallaxDesignOnSideBar(true)
  }
  return (
    <div className="relative h-auto opacity-1">
      <div className="sticky top-0 z-16 opacity-1">
        <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-[#252323] border-white/20">
          Frontend Work
        </h3>
      </div>
      <ol>
        <li className="relative z-[15] opacity-1 h-auto ">
          <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 bg-[#252323] group" onClick={handleClickEvent}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
              </path>
            </svg>
            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
              Parallax Design
            </div>
          </div>
        </li>
      </ol>
    </div>
  )
}
