import { Answer } from "../Answer/Answer";
import { OnLoadUI } from "./OnLoadUIFolder/OnLoadUI";
import { MainPageContext } from "./context/MainPageContext";
import { FrontendSectionContext } from "../Sidebar/SidebarComponents/FrontendSectionContext/Context";
import { FullStackSectionContext } from "../Sidebar/SidebarComponents/FullStackSectionContext/FullStackSectionContext";

import { useContext, useEffect } from "react";
import { LandingPage } from "../DevelopersPortfolio/FrontendWorks/LandingPage";
import { FullStackLandingPage } from "../DevelopersPortfolio/FullStackWorks/FullStackLandingPage";

export const MainPage = () => {
  // context
  const mainPageContext = useContext(MainPageContext);
  const {isOnLoadUIFinished} = mainPageContext;
  const {didUserclickParallaxDesignOnSideBar} = useContext(FrontendSectionContext)
  const {didUserClickFullStackSection} = useContext(FullStackSectionContext)

  useEffect(() => {
    console.log("🚀 ~ file: MainPage.tsx:9 ~ MainPage ~ isOnLoadUIFinished:", isOnLoadUIFinished)
  }, [isOnLoadUIFinished])
  
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-[#373b46]">
      {
        didUserclickParallaxDesignOnSideBar ? 
          <div>
            <LandingPage/>
          </div>
        :
        didUserClickFullStackSection ? 
          <div>
            <FullStackLandingPage/>
          </div>
        :
        isOnLoadUIFinished ?
          <div className="overflow-y-scroll w-screen h-screen">
            <Answer/> 
          </div>
          :
          <div className="flex flex-1 flex-col justify-center items-center sm:relative sm:z-9">
            <OnLoadUI/>
          </div>
      }
    </div>
  )
}